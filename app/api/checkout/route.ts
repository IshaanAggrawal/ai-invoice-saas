import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { dbConnect } from '@/lib/dbConnect';
import User from '@/models/User';
import Subscription from '@/models/Subscription';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-11-17' as any, // Using 'as any' to bypass TypeScript error for now
});

// In a real implementation, you would define these price IDs in your Stripe dashboard
const PRICE_IDS = {
  pro: process.env.STRIPE_PRO_PRICE_ID || 'price_pro_monthly', // Replace with actual Stripe price ID
  business: process.env.STRIPE_BUSINESS_PRICE_ID || 'price_business_monthly', // Replace with actual Stripe price ID
};

export async function POST(req: Request) {
  try {
    // In Clerk v6+, auth() returns a Promise that must be awaited
    const { userId } = await auth();
    
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { priceId } = await req.json();

    // Connect to database
    await dbConnect();

    // Get user from database
    const user = await User.findOne({ clerkUserId: userId });
    
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    // Check if user already has a Stripe customer ID
    let customerId = '';
    let subscription = await Subscription.findOne({ userId: user._id });

    if (subscription && subscription.stripeCustomerId) {
      customerId = subscription.stripeCustomerId;
    } else {
      // Create a new Stripe customer
      const customer = await stripe.customers.create({
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
      });
      customerId = customer.id;
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer: customerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
      client_reference_id: user._id.toString(),
      metadata: {
        clerkUserId: userId,
        plan: priceId === PRICE_IDS.pro ? 'pro' : 'business',
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}