# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application built with TypeScript and Tailwind CSS v4, designed for creating advertorial content. The project uses the App Router architecture with React 19.

## Development Commands

**Development:**
```bash
npm run dev
```
Starts the development server at http://localhost:3000 with hot reloading.

**Production Build:**
```bash
npm run build
```
Creates an optimized production build.

**Production Server:**
```bash
npm start
```
Runs the production server (requires build first).

**Linting:**
```bash
npm run lint
```
Runs ESLint to check code quality.

## Architecture

### Framework & Stack
- **Next.js 16** with App Router (app directory)
- **React 19** (latest version with new features)
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** with PostCSS plugin architecture

### Key Architectural Patterns

**App Router Structure:**
- Uses Next.js App Router (not Pages Router)
- All routes are defined in the `app/` directory
- `app/layout.tsx` is the root layout with font configuration
- `app/page.tsx` is the home page
- Server Components by default unless marked with `"use client"`

**Styling Approach:**
- Tailwind CSS v4 uses the new `@tailwindcss/postcss` plugin
- Imports Tailwind via `@import "tailwindcss"` in `app/globals.css`
- Uses `@theme inline` for custom CSS variable definitions
- Built-in dark mode support via `prefers-color-scheme`
- Custom CSS variables: `--background`, `--foreground`, `--font-geist-sans`, `--font-geist-mono`

**Font Configuration:**
- Uses `next/font/google` for optimized font loading
- Geist Sans and Geist Mono fonts are configured in `app/layout.tsx`
- Fonts are exposed via CSS variables for use in Tailwind config

**TypeScript Configuration:**
- Path alias `@/*` maps to project root
- Target: ES2017
- JSX mode: `react-jsx` (not `preserve`)
- Module resolution: `bundler` (not `node`)
- Strict mode enabled

**ESLint Configuration:**
- Uses ESLint v9 flat config format via `eslint.config.mjs`
- Includes Next.js recommended rules: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Custom global ignores for `.next/`, `out/`, `build/`, and `next-env.d.ts`

### Important Technical Details

1. **Tailwind CSS v4 Differences:**
   - Uses `@import "tailwindcss"` instead of directives like `@tailwind base`
   - PostCSS config uses `@tailwindcss/postcss` plugin
   - Theme customization via `@theme inline` blocks

2. **Next.js 16 Features:**
   - Server Components are the default
   - Client Components must explicitly use `"use client"`
   - Metadata API for SEO (see `app/layout.tsx`)
   - Automatic image optimization with `next/image`

3. **Module Resolution:**
   - Use `@/` prefix for imports from project root (e.g., `@/app/components/Button`)
   - TypeScript uses `bundler` module resolution, not `node`
