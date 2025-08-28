# Dark & Dystopian Fashion Brand Website

## Overview

Dark & Dystopian is a futurewear brand creating an MVP single-page website to capture early community interest for collectible, narrative-driven sustainable garments. The application is built as a full-stack TypeScript solution with React frontend and Express backend, designed to showcase the brand's duality of dystopian grit and solarpunk renewal through an email subscription system for early access.

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