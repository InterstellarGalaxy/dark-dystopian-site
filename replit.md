# Dark & Dystopian Fashion Brand Website

## Overview

Dark & Dystopian is a provocative futurewear movement that transforms dystopian grit into solarpunk hope through community-driven creative rebellion. The application is built as a full-stack TypeScript solution with React frontend and Express backend, showcasing the brand's "light born from darkness" philosophy through tiered membership structure and email subscription system for the collective uprising.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling and validation
- **Tailwind CSS** with shadcn/ui components for styling and design system

### Backend Architecture
- **Express.js** server with TypeScript for RESTful API endpoints
- **Drizzle ORM** for database schema definition and query building
- **PostgreSQL** as the primary database (configured for Neon Database)
- **In-memory storage fallback** for development when database is not available
- **Session-based architecture** ready for future authentication needs

### Database Design
- **Email Subscriptions Table**: Stores early access email signups with timestamps
- **Users Table**: Prepared for future user authentication system
- **UUID Primary Keys**: Using PostgreSQL's `gen_random_uuid()` for unique identifiers
- **Zod Schema Validation**: Type-safe database operations with runtime validation

### API Structure
- `POST /api/subscribe` - Email subscription endpoint with duplicate prevention
- `GET /api/subscriptions` - Admin endpoint for viewing all subscriptions
- Centralized error handling with proper HTTP status codes
- Request/response logging middleware for debugging

### Design System
- **Dark Theme**: Deep blacks, charcoal greys, off-whites reflecting dystopian aesthetic
- **Solarpunk Accents**: Subtle green/golden highlights for renewal theme
- **Typography**: Inter font for readability, Fira Code for monospace accents
- **Component Library**: Complete shadcn/ui component set for consistent UI patterns

### Development Workflow
- **Hot Module Replacement** in development with Vite integration
- **Type Safety**: Comprehensive TypeScript configuration across client/server/shared
- **Build Process**: Client builds to static assets, server bundles with esbuild
- **Database Migrations**: Drizzle Kit for schema management and deployment

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for database connectivity
- **drizzle-orm** and **drizzle-kit**: Modern TypeScript ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form** with **@hookform/resolvers**: Form state management and validation
- **zod**: Runtime type validation for API and form data

### UI and Styling
- **@radix-ui/react-***: Headless UI primitives for accessible component foundation
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Type-safe variant management for components
- **lucide-react**: Icon library for consistent iconography

### Development Tools
- **vite**: Frontend build tool and development server
- **typescript**: Static type checking across the application
- **esbuild**: Fast bundling for production server builds
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting platform
- **connect-pg-simple**: PostgreSQL session store (prepared for future auth)
- Database connection via `DATABASE_URL` environment variable

## SEO Implementation

### Technical SEO Features
- **Comprehensive Meta Tags**: Primary meta tags, Open Graph, Twitter Cards with Dark & Dystopian branding
- **Schema Markup**: JSON-LD structured data for ClothingStore with brand information and subscription actions
- **SEO-Friendly URLs**: Clean URL structure for `/philosophy`, `/sustainability`, `/community` pages
- **Robots.txt**: Proper crawling instructions with sitemap reference
- **XML Sitemap**: Complete sitemap with all pages, priorities, and change frequencies
- **Internal Linking**: Strategic internal links throughout content for SEO juice distribution
- **Semantic HTML**: Proper heading hierarchy (H1, H2, H3) with SEO-optimized content structure

### Content Strategy
- **Primary Keywords**: Sustainable fashion, futurewear, collectible clothing, narrative fashion, dystopian clothing
- **Long-tail Keywords**: "Sustainable futurewear brands", "collectible limited edition clothing", "plant-based material fashion"
- **Content Pages**: Philosophy, Sustainability, and Community pages with 200+ words of unique, SEO-optimized content
- **Enhanced 404 Page**: Brand-aligned error page with navigation and internal linking
- **Footer Navigation**: Comprehensive site navigation with additional keyword-rich content

### Performance Optimizations
- **Meta Tags for Core Web Vitals**: Theme colors, mobile optimization, preconnect directives
- **Image Alt Tags**: Descriptive alt text for all images
- **Anchor Link Support**: Subscribe section with proper ID for deep linking
- **Mobile-First Navigation**: Responsive navigation with mobile menu

### Recent SEO Changes (2025-01-28)
- Implemented comprehensive meta tag strategy with Open Graph and Twitter Cards
- Created structured data with JSON-LD schema for ClothingStore
- Added robots.txt and XML sitemap for better crawl discovery
- Enhanced internal linking structure across all pages
- Created SEO-optimized content pages (Philosophy, Sustainability, Community)
- Improved navigation with keyword-rich anchor texts
- Enhanced footer with additional navigation and brand keywords

### Brand Identity Update (2025-01-28)
- **Core Identity Shift**: Evolved from minimalist aesthetic to provocative futurewear rebellion
- **New Philosophy**: "Dystopian Hope" - light born from darkness through community-driven creative rebellion
- **Product Vision**: Eternal Artifacts (Dystopian Steel Rings, Phoenix Seed Garments, Oceanic Resurrection Collection)
- **Community Structure**: Tiered Dystopian Collective (🌱 Seedling Free, ⚡ Creator $15/mo, 👑 Visionary $50/mo)
- **Brand Messaging**: "Creative freedom is our weapon" against disposable culture
- **Target Audience**: Conscious Rebels (25-40) seeking community-controlled creative resistance
- **Differentiation**: Community votes on products, dual-purpose design (eternal durability or regenerative transformation)