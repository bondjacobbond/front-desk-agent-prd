# AGENTS.md

Guidelines for AI agents working on the Front Desk Agent PRD webapp.

## Project Overview

This is an interactive Product Requirements Document (PRD) webapp for Bond Sports' AI Front Desk Agent product. It's a Next.js application that presents the PRD content in an engaging, scrollable format with navigation.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Font**: Geist (via Next.js)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (sections composition)
│   └── globals.css        # Global styles & Tailwind config
├── components/
│   ├── nav.tsx            # Navigation sidebar/header
│   ├── section-wrapper.tsx # Reusable section container
│   ├── sections/          # Individual PRD sections
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── kpis.tsx
│   │   └── ... (other sections)
│   └── ui/                # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── ... (other UI components)
└── lib/
    ├── utils.ts           # Utility functions (cn helper)
    └── prd-data.ts        # PRD content/data
```

## Code Conventions

### Component Patterns

1. **Client Components**: Use `"use client"` directive for interactive components

   ```tsx
   "use client";

   import { motion } from "framer-motion";

   export function MyComponent() {
     // Component code
   }
   ```

2. **Section Components**: All section components follow this pattern:
   - Export a named function component (e.g., `HeroSection`)
   - Use `id` attribute matching the section name for navigation
   - Include `scroll-mt-14` or `scroll-mt-0` for scroll offset
   - Wrap content in semantic `<section>` tag

3. **Styling**: Use Tailwind utility classes with the `cn()` helper for conditional classes

   ```tsx
   import { cn } from "@/lib/utils";

   <div className={cn(
     "base-classes",
     condition && "conditional-classes",
     anotherCondition && "more-classes"
   )}>
   ```

### Brand Colors

Use Bond Sports brand colors consistently:

- `bond-navy` (#0d4774) - Primary brand color
- `bond-navy-dark` (#092d4a) - Dark variant
- `bond-navy-light` (#1a5a8a) - Light variant
- `bond-gold` (#d4a853) - Accent color
- `bond-gold-light` (#e5c17a) - Light gold variant
- `bond-soft-bg` - Soft background tint

### Typography

- Use `font-display` for headings and brand elements
- Use default font stack for body text
- Maintain consistent text sizing hierarchy

### Animations

- Use Framer Motion for entrance animations
- Prefer subtle, performant animations
- Common pattern:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
  ```

### Navigation

- Navigation items are defined in `src/components/nav.tsx`
- Each section must have a matching `id` attribute
- Sections are tracked via IntersectionObserver for active state
- Mobile uses Sheet component, desktop uses fixed sidebar

## Development Guidelines

### Adding New Sections

1. Create component in `src/components/sections/[name].tsx`
2. Add section to `src/app/page.tsx`
3. Add navigation item to `src/components/nav.tsx` sections array
4. Ensure section has matching `id` attribute

### Component Guidelines

- **Keep components focused**: One component per section/feature
- **Use TypeScript**: Properly type all props and functions
- **Accessibility**: Include semantic HTML and ARIA labels where needed
- **Responsive**: Design mobile-first, enhance for desktop
- **Performance**: Use Next.js Image component for images, lazy load when appropriate

### Styling Guidelines

- **Tailwind-first**: Prefer Tailwind utilities over custom CSS
- **Consistent spacing**: Use Tailwind spacing scale (4px base)
- **Color usage**: Use semantic color tokens (`text-muted-foreground`, `bg-muted`, etc.) when possible
- **Brand colors**: Use Bond colors for brand-specific elements

### Data Management

- PRD content is stored in `src/lib/prd-data.ts`
- Keep data separate from presentation
- Use TypeScript types/interfaces for data structures

## Common Patterns

### Section Wrapper

```tsx
import { SectionWrapper } from "@/components/section-wrapper";

export function MySection() {
  return (
    <SectionWrapper id="my-section" title="My Section">
      {/* Content */}
    </SectionWrapper>
  );
}
```

### Badge/Status Indicators

```tsx
import { Badge } from "@/components/ui/badge";

<Badge
  variant="outline"
  className="rounded-full border-bond-navy/20 bg-bond-navy/5"
>
  Status Text
</Badge>;
```

### Card Components

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>;
```

## Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun lint:fix` - Fix ESLint errors
- `bun format` - Format code with Prettier
- `bun type-check` - Run TypeScript type checking
- `bun check` - Run all checks (type-check, lint, format-check)

## Best Practices

1. **Type Safety**: Always use TypeScript types, avoid `any`
2. **Component Composition**: Break down complex components into smaller pieces
3. **Reusability**: Extract common patterns into reusable components
4. **Performance**: Use React.memo() for expensive components if needed
5. **Accessibility**: Ensure keyboard navigation and screen reader support
6. **Mobile-First**: Design for mobile, enhance for larger screens
7. **Consistency**: Follow existing patterns and conventions

## File Naming

- Components: PascalCase (e.g., `HeroSection.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Types: PascalCase (e.g., `types.ts` or inline in files)

## Import Organization

1. React/Next.js imports
2. Third-party libraries
3. Internal components (`@/components/...`)
4. Utilities (`@/lib/...`)
5. Types/interfaces
6. Relative imports (if any)

Example:

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Notes

- This is a documentation/presentation webapp, not a production application
- Focus on clarity, readability, and visual appeal
- The PRD content drives the structure and features
- Keep the codebase maintainable and easy to update as PRD evolves

## Content Sync Requirement

- When updating review decisions, open questions, or resolution priorities, always update both documentation and frontend data in the same change:
  - `PRD_REVIEW_SUMMARY.md`
  - `PRD_REVIEW_COUNCIL.md`
  - `src/lib/prd-data.ts` (the frontend source of truth for rendered PRD decision content)
