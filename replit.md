# Replit.md

## Overview

This is a full-stack web application built with a React frontend and Express.js backend. The application is currently configured as a portfolio website for Zeeshan Mushtaq, a SAP Developer and Digital Transformation Expert. The architecture uses a modern development stack with TypeScript, Tailwind CSS, and shadcn/ui components, with database capabilities configured for PostgreSQL through Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Icons**: Font Awesome and Lucide React icons

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: TSX for TypeScript execution in development
- **Production**: ESBuild for server-side bundling

### Development Setup
- **Package Manager**: npm
- **Module System**: ES modules (type: "module")
- **TypeScript**: Strict mode enabled with path mapping
- **Development Server**: Vite dev server with HMR
- **Build Process**: Separate builds for client (Vite) and server (ESBuild)

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Located in `shared/schema.ts` with users table defined
- **Migrations**: Generated in `./migrations` directory
- **Storage Interface**: Abstracted storage layer with MemStorage implementation for development

### Frontend Components
- **Pages**: Portfolio landing page with modular sections
- **Navigation**: Sticky navigation with smooth scrolling
- **Sections**: Hero, About, Skills, Experience, Projects, Education, Contact, Footer
- **UI Library**: Comprehensive shadcn/ui components for consistent design
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Services
- **Routes**: Centralized route registration in `server/routes.ts`
- **Storage**: Interface-based storage pattern for easy database switching
- **Middleware**: Request logging and error handling
- **Static Serving**: Vite integration for development, static serving for production

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js routes handle HTTP requests with `/api` prefix
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL accessed through Drizzle ORM
5. **Response**: JSON responses with proper error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **express**: Web application framework
- **react**: Frontend framework
- **tailwindcss**: Utility-first CSS framework

### UI Dependencies
- **@radix-ui**: Headless UI primitives
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant utilities
- **clsx**: Conditional className utility

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: JavaScript bundler for production

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Server**: TSX executes TypeScript server directly
- **Client**: Vite dev server with HMR
- **Database**: Migrations applied with `npm run db:push`

### Production Build
- **Client Build**: Vite builds static assets to `dist/public`
- **Server Build**: ESBuild bundles server to `dist/index.js`
- **Start Command**: `npm run start` runs the production server

### Platform Configuration
- **Environment**: Replit with Node.js 20, PostgreSQL 16
- **Port**: 5000 (mapped to external port 80)
- **Deployment**: Autoscale deployment target
- **Database**: Environment variable `DATABASE_URL` required

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 14, 2025: Completed professional portfolio website for Zeeshan Mushtaq
  - Implemented comprehensive single-page portfolio with hero, about, skills, experience, projects, education, and contact sections
  - Added extensive technology stack display with 18+ technologies including SAP, AWS, Azure, GCP, Docker, Kubernetes, etc.
  - Integrated professional photo from attached assets
  - Added proper SAP and Coursera certification logos
  - Replaced generic office image with relevant technology/data visualization image
  - Optimized for responsive design and GitHub Pages hosting
  - All content based on authentic resume data provided by user

## Changelog

- June 14, 2025: Initial setup and portfolio development