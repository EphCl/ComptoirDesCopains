# Replit.md - Le Comptoir des Copains

## Overview

This is a full-stack web application for "Le Comptoir des Copains", a tropical-themed bar in Lille, France. The application features a React frontend with a Node.js/Express backend, using PostgreSQL for data storage and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **API Structure**: RESTful API with `/api` prefix

### Development Setup
- **Package Manager**: npm
- **Development Server**: TSX for TypeScript execution
- **Build Process**: Vite for frontend, esbuild for backend
- **Database Migrations**: Drizzle Kit for schema management

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - contains shared database schema
- **Migrations**: Managed through Drizzle Kit, output to `./migrations`
- **Current Schema**: Basic user table with id, username, and password fields

### Frontend Components
- **Component Library**: Comprehensive Shadcn/UI component set
- **Pages**: Home page with bar information, 404 page
- **Hooks**: Custom hooks for mobile detection and toast notifications
- **Utilities**: Class name utilities with clsx and tailwind-merge

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Development Tools**: Request logging, error handling middleware

### Styling System
- **CSS Framework**: Tailwind CSS with custom configuration
- **Theme**: Neutral color scheme with CSS variables
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Component Styling**: Consistent design system through Shadcn/UI

## Data Flow

### Client-Server Communication
1. Frontend makes HTTP requests to `/api` endpoints
2. TanStack Query manages caching and synchronization
3. Backend processes requests through Express middleware
4. Database operations handled through Drizzle ORM
5. Responses sent back as JSON

### Development Workflow
1. Vite dev server serves frontend with HMR
2. TSX runs backend with auto-restart on changes
3. Database schema changes managed through Drizzle migrations
4. Development logging provides request/response visibility

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Unstyled UI primitives
- **wouter**: Lightweight React router
- **zod**: Schema validation library

### Development Tools
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **tailwindcss**: Utility-first CSS framework

### UI and Styling
- **lucide-react**: Icon library
- **tailwind-merge**: Tailwind class merging utility
- **class-variance-authority**: Component variant management
- **date-fns**: Date manipulation library

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Served from build output directory

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: `NODE_ENV=development` for dev mode
- **Production**: `NODE_ENV=production` for optimized builds

### Database Management
- **Schema Updates**: Use `npm run db:push` to apply schema changes
- **Migrations**: Stored in `./migrations` directory
- **Connection**: Configured for PostgreSQL dialect with Neon

### Server Configuration
- **Port**: Configurable through environment
- **Static Files**: Express serves built frontend assets
- **API Routes**: Prefixed with `/api` for backend endpoints
- **Session Storage**: PostgreSQL-backed session management

## Notes

- The application currently uses an in-memory storage implementation but is configured for PostgreSQL
- Database schema is minimal with just a users table - can be extended as needed
- Frontend is themed for a tropical bar with dark color scheme
- All UI components are built with accessibility in mind through Radix UI
- The application supports both development and production environments
- French language content suggests primary audience is French-speaking users