# Ecommerce Frontend - React Application

## Overview
React-based frontend application for the ecommerce platform, built following the design specifications from Figma.

## Tech Stack
- React 18.2
- TypeScript
- Vite
- React Router
- Axios

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Runs the app in development mode at http://localhost:3000

### Build
```bash
npm run build
```

### Testing
```bash
npm test
```

## Project Structure
```
src/
  components/     # Reusable React components
  pages/          # Page components
  services/       # API service layer
  types/          # TypeScript type definitions
  App.tsx         # Main app component
  main.tsx        # Entry point
```

## Environment Variables
Create a `.env` file:
```
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

## Code Standards
- Follows React Code Standards from specs/frontend/frontend_react_code_standards.md
- ADA Compliance: WCAG 2.1 AA
- VQA Compliance: Visual quality assurance standards