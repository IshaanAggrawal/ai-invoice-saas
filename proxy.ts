import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 1. Define Public Routes
// IMPORTANT: You MUST add '/signup(.*)' here, or you will cause an infinite redirect loop.
const isPublicRoute = createRouteMatcher([
  '/', 
  '/pricing', 
  '/support', 
  '/sign-in(.*)', 
  '/signup(.*)' // Ensure this matches your actual page path
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // 2. Check if user is NOT logged in AND the route is NOT public
  if (!userId && !isPublicRoute(req)) {
    // 3. Force redirect to /signup
    return NextResponse.redirect(new URL('/signup', req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};