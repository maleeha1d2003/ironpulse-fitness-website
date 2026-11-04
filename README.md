# IronPulse Fitness Website

A responsive fitness landing page built with HTML, CSS, and JavaScript using Vite. This project focuses on website performance, accessibility, SEO, optimized image delivery, and lazy loading.

## Features

- Responsive fitness landing page
- Hero section and fitness program cards
- Navigation and call-to-action sections
- Optimized WebP images
- Lazy loading for below-the-fold images
- Automated image optimization during production builds
- Vite development and production build setup

## Technology Stack

- HTML5
- CSS3
- JavaScript
- Vite
- Sharp (Image Optimization)
- WebP

## Getting Started

### Prerequisites

Install Node.js and npm.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

The production build automatically runs the image optimization script before Vite generates the final website files.

### Preview the production build

```bash
npm run preview
```

## Task 1: Baseline Lighthouse Audit

The initial Lighthouse report is saved in `baseline.html`.

### Baseline Lighthouse Scores

| Category | Baseline Score |
|---|---:|
| Performance | 90/100 |
| Accessibility | 100/100 |
| Best Practices | 100/100 |
| SEO | 92/100 |

### Baseline Performance Metrics

| Metric | Baseline Result |
|---|---:|
| First Contentful Paint (FCP) | 2.3 s |
| Largest Contentful Paint (LCP) | 3.2 s |
| Total Blocking Time (TBT) | 0 ms |
| Cumulative Layout Shift (CLS) | 0.012 |

These measurements represent the initial Lighthouse audit and provide a baseline for evaluating subsequent improvements.

## Task 2: Asset Optimization & Lazy Loading

Task 2 focuses on reducing image file sizes, serving images in WebP format, implementing lazy loading, and automating image optimization in the Vite build pipeline.

### Image Optimization

- Replaced externally loaded image resources with locally hosted image assets.
- Used Sharp to convert source JPEG and PNG images into WebP format.
- Resized images according to their display dimensions.
- Applied WebP quality settings to reduce image file sizes while maintaining visual quality.

### Image Size Comparison

| Image | Original Size | Optimized Size |
|---|---:|---:|
| Hero image | 183.9 KB | 33.3 KB |
| Training image | 81.7 KB | 12.8 KB |

### Lazy Loading

The training image in the Approach section uses:

```html
loading="lazy"
decoding="async"
```

The hero image is loaded with high priority because it is visible immediately when the page opens.

### Automated Build Pipeline

The image optimization script is located at:

`scripts/optimize-images.js`

It uses Sharp to process source images and generate WebP files in:

`public/images/`

The `package.json` build command runs the optimization script before Vite creates the production build:

```json
"build": "node scripts/optimize-images.js && vite build"
```

### Lighthouse Results After Task 2

The final Lighthouse report is saved in `task2-final.html`.

| Category | Baseline | Final |
|---|---:|---:|
| Performance | 90 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 92 | 100 |

### Performance Metrics Comparison

| Metric | Baseline | Final |
|---|---:|---:|
| First Contentful Paint (FCP) | 2.3 s | 1.0 s |
| Largest Contentful Paint (LCP) | 3.2 s | 1.2 s |
| Total Blocking Time (TBT) | 0 ms | 0 ms |
| Cumulative Layout Shift (CLS) | 0.012 | 0 |

The Performance score increased from 90 to 100, representing an approximately 11.1% relative improvement over the baseline.

The final measurements were obtained using Lighthouse Mobile Performance testing on the production preview.

## Repository

GitHub: [https://github.com/maleeha1d2003/ironpulse-fitness-website](https://github.com/maleeha1d2003/ironpulse-fitness-website)

## Task 3: Code Splitting & Dynamic Imports

Task 3 separates the class schedule and booking form into independent JavaScript modules. These modules are loaded on demand with JavaScript dynamic imports so visitors do not download their code during the initial page load.

### Dynamic Modules

| Module | Purpose | Loading behavior |
|---|---|---|
| `src/schedule.js` | Renders the class schedule | Loaded when the visitor opens `#schedule` |
| `src/booking.js` | Renders the booking form | Loaded when the visitor opens `#booking` |
| `src/main.js` | Initial page, routing, and navigation | Loaded on the initial page visit |

### Implementation

The application uses dynamic imports in `src/main.js`:

```js
const { renderSchedule } = await import("./schedule.js");
```

and:

```js
const { renderBooking } = await import("./booking.js");
```

The schedule and booking modules are therefore separate code-split chunks in the Vite production build. Hash-based navigation and the `hashchange` event allow users to move between the home page, schedule, and booking views without a full-page reload.

### Verify the Production Build

Run:

```bash
npm install
npm run build
```

Vite creates the production output in `dist/`. Check the generated JavaScript files in `dist/assets/` to confirm that the schedule and booking modules are emitted as separate chunks. Check the build output to verify the initial JavaScript bundle is below the required 200 KB limit.

The booking form is a front-end demonstration: it validates the required fields and displays a confirmation message, but it does not submit information to a backend or store bookings.
