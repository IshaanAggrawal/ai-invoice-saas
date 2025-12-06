# BoltBill - AI Invoicing SaaS

BoltBill is a modern SaaS application that helps freelancers and small businesses create professional invoices in seconds using AI technology. Built with Next.js 14+, Tailwind CSS, and TypeScript.

![BoltBill Dashboard](./public/dashboard-preview.png)

## Features

- 🤖 **AI-Powered Invoice Creation** - Generate invoices from simple descriptions
- 💅 **Beautiful Templates** - Professionally designed invoice templates
- ⚡ **Lightning Fast** - Create and send invoices in under 30 seconds
- 🎨 **Customizable Design** - Personalize invoices to match your brand
- 📱 **Responsive** - Works perfectly on all devices
- 🔐 **Secure** - Built with security best practices

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **UI Components**: Lucide React Icons
- **Authentication**: Clerk
- **Styling**: Tailwind CSS with custom configurations
- **Deployment**: Vercel

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
my-app/
├── app/                 # Next.js app router pages
│   ├── automations/     # AI automation features
│   ├── builder/         # Invoice builder page
│   ├── dashboard/       # User dashboard
│   ├── login/           # Login page
│   │   └── [[...sign-in]]/ # Clerk sign-in catch-all route
│   ├── pricing/         # Pricing page
│   ├── profile/         # User profile page
│   ├── signup/          # Signup page
│   │   └── [[...sign-up]]/ # Clerk sign-up catch-all route
│   ├── support/         # Support page
│   ├── templates/       # Invoice templates
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # Reusable components
│   ├── index.ts         # Component exports
│   ├── Navbar.tsx       # Navigation component
│   ├── Button.tsx       # Button component
│   ├── Card.tsx         # Card component
│   └── Badge.tsx        # Badge component
├── public/              # Static assets
└── styles/              # Global styles
```

## Key Components

### Invoice Builder
Create professional invoices with our intuitive builder:
- Real-time preview
- Line item management
- Tax calculations
- AI-powered suggestions

### Templates
Choose from dozens of professionally designed templates that match your brand perfectly.

### AI Automations
Automate repetitive tasks with our AI-powered features.

### Authentication
Secure authentication powered by Clerk:
- Sign up and login pages with hash-based routing
- Protected routes for authenticated users only
- User profile management

### Reusable Components
We've created several reusable components to maintain consistency across the application:

1. **Navbar** - Consistent navigation across all pages
2. **Card** - Flexible container component with consistent styling
3. **Button** - Primary and secondary button variants with hover effects
4. **Badge** - Status indicators with color variations

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add the required environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS utilities
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript
- [Clerk Documentation](https://clerk.com/docs) - learn about Clerk authentication

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.