# ECONOMIK WEBSITE

# TECHNICAL ARCHITECTURE & DEVELOPMENT BLUEPRINT

---

# PROJECT ARCHITECTURE

Architecture Style:

Modern Full Stack Web Application

Pattern:

Component-Based Architecture

Principles:

* Scalability
* Reusability
* Performance
* SEO First
* Accessibility
* Clean Code
* Maintainability

---

# TECHNOLOGY STACK

## Frontend

Next.js 15

TypeScript

TailwindCSS

Shadcn/UI

Lucide Icons

GSAP

ScrollTrigger

SplitText

Observer

Flip

Lenis

Framer Motion (micro interactions only)

---

## Backend

Next.js Route Handlers

Server Actions

---

## Database

PostgreSQL

---

## ORM

Prisma

---

## CMS

Sanity CMS

Purpose:

* Blog posts
* Case studies
* Workshops
* Team members
* Testimonials

Without requiring developers.

---

## Email System

Resend

Templates:

* Lead Notification
* Contact Form
* Newsletter Confirmation
* Workshop Registration

---

## Forms

React Hook Form

Zod Validation

---

## Analytics

Google Analytics 4

Microsoft Clarity

Google Search Console

---

## Hosting

Vercel

---

# PROJECT STRUCTURE

/app

```text
app
├── page.tsx
├── layout.tsx
├── globals.css
│
├── services
├── insights
├── workshops
├── about
├── contact
├── cases
│
├── api
│   ├── contact
│   ├── newsletter
│   └── workshops
```

---

# COMPONENT STRUCTURE

/components

```text
components
│
├── layout
│   ├── Navbar
│   ├── Footer
│   ├── Preloader
│
├── hero
│   ├── HeroSection
│
├── sections
│   ├── ProblemsSection
│   ├── MethodologySection
│   ├── ServicesSection
│   ├── CasesSection
│   ├── TeamSection
│   ├── InsightsSection
│   ├── TestimonialsSection
│   ├── CTASection
│
├── animations
│   ├── RevealText
│   ├── RevealImage
│   ├── Counter
│   ├── Parallax
│
├── ui
│   ├── Button
│   ├── Card
│   ├── Modal
│   ├── Input
│
└── forms
    ├── ContactForm
    ├── NewsletterForm
```

---

# GSAP SYSTEM

Create centralized animation architecture.

Folder:

```text
lib/animations
```

Structure:

```text
animations
│
├── hero.ts
├── methodology.ts
├── services.ts
├── testimonials.ts
├── counters.ts
├── parallax.ts
├── preloader.ts
```

Each section owns its timeline.

Avoid animation logic inside components.

---

# PRELOADER ARCHITECTURE

Component:

Preloader.tsx

Behavior:

Video preload

↓

Tiger video starts

↓

Logo reveal

↓

Exit animation

↓

Main content unlock

---

Requirements:

Prevent scroll.

Enable scroll only after animation finishes.

Store completion state.

Avoid replay during navigation.

---

# SCROLL ENGINE

Lenis

Purpose:

Smooth scrolling.

Integrate with GSAP.

---

Configuration:

Desktop:

Enabled

Mobile:

Reduced intensity

---

# HERO SYSTEM

Animations:

SplitText

Reveal Masks

Parallax Layers

Mouse Tracking

---

Layers:

Background

Data particles

Magnifying glass

Tiger silhouette

Content

---

Performance:

GPU accelerated transforms only.

No expensive repainting.

---

# METHODOLOGY SECTION

Most important section.

---

Implementation:

Pinned ScrollTrigger

---

Duration:

250vh - 350vh

---

Timeline:

Data

↓

Analysis

↓

Strategy

↓

Results

---

Assets:

SVG charts

Animated indicators

Magnifying glass transitions

---

# SERVICES SYSTEM

Component:

ServiceCard

Props:

```typescript
{
 title:string
 description:string
 icon:string
 benefits:string[]
}
```

---

Interaction:

Hover expansion

Reveal details

CTA button

---

# CASE STUDIES SYSTEM

CMS Driven

---

Fields:

Title

Client

Challenge

Solution

Results

Images

Metrics

Tags

---

URL:

/cases/[slug]

---

SEO optimized.

---

# BLOG SYSTEM

CMS Driven

---

Content Types:

Article

Category

Author

Tag

---

Features:

Search

Filtering

Pagination

Related Articles

Reading Time

Share Buttons

SEO Metadata

---

URL:

/insights/[slug]

---

# TEAM SYSTEM

CMS Driven

---

Fields:

Name

Role

Photo

Biography

LinkedIn

Skills

---

Future proof.

No hardcoded members.

---

# TESTIMONIAL SYSTEM

CMS Driven

---

Fields:

Name

Role

Company

Photo

Quote

Rating

---

Animation:

Horizontal reveal

---

# CONTACT SYSTEM

Main Conversion Point.

---

Fields:

Name

Email

Phone

Company

Challenge

Source

---

Validation:

Client

Server

---

Spam Protection:

Honeypot

Rate Limit

Captcha optional

---

# NEWSLETTER SYSTEM

Database storage.

---

Fields:

Email

CreatedAt

---

Double opt-in.

---

# DATABASE STRUCTURE

Table:

leads

```sql
id
name
email
phone
company
challenge
source
created_at
```

---

Table:

newsletter

```sql
id
email
created_at
```

---

# SEO ARCHITECTURE

Dynamic Metadata

OpenGraph

Twitter Cards

Structured Data

Canonical URLs

Sitemap

Robots.txt

Breadcrumbs

Schema.org

---

Article Schema

Organization Schema

Local Business Schema

FAQ Schema

---

# PERFORMANCE STRATEGY

Images:

next/image

WebP

AVIF

---

Videos:

Compressed MP4

Lazy loaded

---

Fonts:

Local hosting

---

Scripts:

Dynamic imports

Code splitting

---

# ACCESSIBILITY

Keyboard navigation

Focus states

ARIA labels

Contrast compliance

Reduced Motion support

---

# RESPONSIVE STRATEGY

Breakpoints:

Mobile

Tablet

Desktop

Ultra Wide

---

Mobile First

Desktop Enhanced

---

# SECURITY

Environment Variables

Server Actions

Input Sanitization

Rate Limiting

HTTPS

CSRF Protection

Validation Layers

---

# CMS CONTENT TYPES

Article

Workshop

Case Study

Testimonial

Team Member

SEO Page Settings

---

# ADMIN EXPERIENCE

Non-technical members should:

Publish articles

Add workshops

Edit team

Update testimonials

Manage case studies

Without touching code.

---

# DEPLOYMENT PIPELINE

GitHub

↓

Pull Request

↓

Preview Deployment

↓

Testing

↓

Production Deployment

↓

Vercel

---

# MONITORING

Google Analytics

Microsoft Clarity

Vercel Analytics

Error Tracking

Sentry

---

# CONVERSION TRACKING

Track:

CTA Clicks

Contact Submissions

Newsletter Signups

Workshop Registrations

Scroll Depth

Page Engagement

---

# QUALITY TARGET

Lighthouse

Performance: 95+

Accessibility: 95+

Best Practices: 100

SEO: 100

---

# FINAL DEVELOPMENT OBJECTIVE

Build a website that feels like a premium economic intelligence consultancy platform.

The experience should communicate:

Trust

Authority

Intelligence

Strategy

Growth

The technology stack, animations, architecture and content structure must work together to maximize lead generation while maintaining exceptional performance and scalability.
