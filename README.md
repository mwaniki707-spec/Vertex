# Vertex Network Solutions

Enterprise cybersecurity, networking, and cloud infrastructure website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start dev server (port 3000)    |
| `npm run build` | Create production build         |
| `npm run start` | Start production server         |
| `npm run lint`  | Run ESLint                      |

## Pages

| Route        | Description                                           |
| ------------ | ----------------------------------------------------- |
| `/`          | Home — hero, services overview, stats, CTA            |
| `/services`  | Detailed service breakdowns with process timeline     |
| `/products`  | Product showcase with pricing                         |
| `/about`     | Company mission, values, timeline, team               |
| `/contact`   | Secure contact form with validation                   |
| `/login`     | Authentication — sign in                              |
| `/register`  | Authentication — create account                       |
| `/dashboard` | Protected dashboard with network status & alerts      |

## API Routes

| Endpoint              | Method | Description                 |
| --------------------- | ------ | --------------------------- |
| `/api/auth/login`     | POST   | Authenticate user           |
| `/api/auth/register`  | POST   | Create new account          |
| `/api/auth/session`   | GET    | Verify session              |
| `/api/auth/logout`    | POST   | End session                 |
| `/api/contact`        | POST   | Submit contact form         |
| `/api/payments`       | POST   | Create payment intent       |
| `/api/playwright`     | POST   | Automation task scaffold    |

## Demo Credentials

- **Email:** `admin@vertex.com`
- **Password:** `Admin123!`

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & API routes
│   ├── api/              # Server-side API endpoints
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── dashboard/        # Protected dashboard
│   ├── login/            # Login page
│   ├── products/         # Products page
│   ├── register/         # Registration page
│   └── services/         # Services page
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page-specific sections
│   └── ui/               # Reusable UI components
├── context/              # React context providers
├── lib/                  # Utilities (auth, validation, data, etc.)
└── types/                # TypeScript type definitions
```

## Security Features

- Input validation on both client and server
- XSS prevention via input sanitization
- Rate limiting on all API routes
- HttpOnly secure session cookies
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Environment variables for secrets

## Integration Points

- **Stripe:** Payment route ready at `/api/payments` — add `STRIPE_SECRET_KEY`
- **Cloudinary:** Image URL builder in `src/lib/cloudinary.ts` — add cloud name
- **Playwright:** Automation scaffold at `/api/playwright` — install playwright to activate

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Linting:** ESLint with Next.js config
