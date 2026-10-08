# ThaiDigital Market — Architecture Plan

## 1. Goal
Build a production-ready marketplace MVP for Thai digital creators. The system is free for sellers to join and sell, while the marketplace earns commission only on successful sales.

## 2. Core Product Principles
- No subscription model for any user tier.
- One account can act as buyer and seller.
- Commission is calculated server-side only.
- Pricing and revenue values are never trusted from the client.
- Digital files are protected and delivered via signed URLs.
- Admin moderation is required before publishing products.
- Thai language is the default UI language.

## 3. Architecture Overview
### Frontend
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui foundation
- Thai-friendly fonts and responsive layout

### Backend
- Prisma ORM with PostgreSQL
- Next.js server actions and route handlers
- Authentication via NextAuth compatible architecture
- Service layer for products, orders, payments, sellers, downloads
- Validation and security layer using Zod and server-side checks

### Storage & Files
- Cloud storage abstraction for digital files
- Protected signed download URLs
- Allowed MIME/extension validation with size limits

### Payment & Payout Architecture
- Payment provider abstraction for future integration
- Mock provider for MVP without real money handling
- Seller payout architecture is prepared but not implemented in the MVP

## 4. Recommended Project Structure
- app/
- components/
- lib/
- services/
- actions/
- api/
- types/
- validators/
- prisma/
- docs/

## 5. Phase Plan
### Phase 1 — Project Setup and Foundation
- Scaffold Next.js + TypeScript + Tailwind
- Configure shadcn/ui base
- Add Prisma and PostgreSQL configuration
- Add auth foundation, layout, home page
- Validate build and dev server

### Phase 2 — Users, Stores, Sellers
- Register/login flows
- Store creation
- Seller dashboard shell

### Phase 3 — Products and Moderation
- Product CRUD
- Categories and upload validation
- Admin approval flow

### Phase 4 — Order and Commission
- Cart, checkout, order creation
- Mock payment provider
- Commission calculation

### Phase 5 — Downloads and Reviews
- Purchase validation
- Protected download endpoint
- Review rules

### Phase 6 — Admin and Settings
- Dashboard modules
- Settings and notifications

### Phase 7 — Hardening
- Security, validation, rate limiting, error boundaries

### Phase 8 — Seed data and deployment
- Demo accounts, categories, product data
- Vercel-ready deployment checks

## 6. Design Decisions
- PostgreSQL is chosen because the project requires relational integrity and a proper marketplace data model.
- Next.js App Router is used for modern server components, route handlers, and future server-side security patterns.
- Authentication will rely on a standards-based credential flow with server-protected routes.
- shadcn/ui is configured with a Tailwind-first design system to keep the project clean, consistent, and scalable.
