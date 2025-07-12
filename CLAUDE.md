# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Time Wizard is a React-based web application for calculating total time from multiple time intervals. It uses TypeScript, Vite, and modern React patterns with a feature-based architecture.

## Essential Commands

```bash
# Development
pnpm dev          # Start development server at http://localhost:5173
pnpm preview      # Preview production build

# Building
pnpm build        # Type check and build (runs through Turbo)

# Code Quality
pnpm format       # Format code with Biome
pnpm lint         # Lint and auto-fix issues with Biome
pnpm check        # Combined format + lint check

# Testing
pnpm test         # Run all tests via Turbo
pnpm vitest       # Run tests in watch mode
pnpm vitest run   # Run tests once
```

## Architecture

### Directory Structure
- `src/features/` - Feature-based modules (currently: time calculation)
- `src/components/` - Shared components organized by type (ui/, layouts/, icons/)
- `src/hooks/` - Global custom hooks
- `src/lib/` - Utility functions and helpers

### Key Patterns
1. **Feature-driven architecture**: Business logic organized under `src/features/`
2. **Custom hooks pattern**: Complex logic encapsulated in hooks (e.g., `useTimeIntervals`)
3. **Schema validation**: Zod schemas define data structures and validation rules
4. **Component library**: UI components from shadcn/ui in `src/components/ui/`
5. **Path aliasing**: Use `@/` for imports from src directory

### State Management
- Local component state with React hooks
- Form state managed by custom hooks with Zod validation
- Persistence via localStorage (using `useLocalStorage` hook)

## Development Guidelines

### Adding New Features
1. Create feature directory under `src/features/`
2. Include: components/, hooks/, schemas/ subdirectories as needed
3. Define Zod schemas for data validation
4. Create custom hooks for business logic
5. Build UI components using shadcn/ui primitives

### Testing
- Test files colocated with source files (*.test.ts, *.test.tsx)
- Use Vitest and Testing Library
- Focus on integration tests for hooks and components
- Run specific test: `pnpm vitest path/to/test`

### Code Style
- Biome handles all formatting and linting
- Pre-commit hooks ensure code quality
- TypeScript strict mode enforced
- Follow existing patterns in the codebase

### UI Development
- Use Tailwind CSS utilities for styling
- Leverage shadcn/ui components from `src/components/ui/`
- Icons from lucide-react
- Maintain accessibility with Radix UI primitives

## Important Files
- `biome.json` - Formatting and linting configuration
- `turbo.json` - Build pipeline configuration
- `components.json` - shadcn/ui component configuration
- `src/features/time/` - Core time calculation feature implementation