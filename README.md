# TLA Website

A modern, responsive website for TLA IT Solutions featuring a clean, flat design with subtle section differentiation.

## Project Overview

This website is built with Next.js and uses a component-based architecture. It features:

- Responsive design that works on mobile, tablet, and desktop
- Sticky sidebar navigation for easy section access
- Animated section transitions and interactive elements
- Subtle color differentiation between sections for improved UX

## Color Scheme

The website uses a carefully selected color palette:

- Main Orange: `#ff7d29` - Primary brand color used for headings, buttons, and accents
- Subtle Orange: `#fff8f0` - Light background color for alternating sections
- White: `#ffffff` - Clean background for content sections
- Divider Orange: `#FFBF76` - Used for subtle section dividers and accents

## Font

The website uses Jost, a modern sans-serif font that provides excellent readability across devices:

- Font weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Loaded via Google Fonts in the app/layout.tsx file

## Project Structure

- `/app` - Next.js app router pages and layout
- `/components` - React components organized by section
- `/public` - Static assets including images and logos
- `/lib` - Utility functions

## Sections

The website is organized into the following sections:

1. **Home/Hero** - Introduction with call-to-action buttons
2. **About Us** - Company history and philosophy with interactive timeline
3. **Quote Banner** - Animated typing effect showcasing the TLA meaning
4. **Our Services** - Grid layout of services offered
5. **Our Clients** - Testimonials with horizontal scrolling
6. **Our Team** - Team member profiles
7. **Contact Us** - Contact information

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
