# IronPulse Fitness Website



A responsive fitness website developed using HTML, CSS, JavaScript, and Vite. This project focuses on improving website performance, accessibility, image optimization, code splitting, and automated deployment.



**Live Website:** https://maleeha1d2003.github.io/ironpulse-fitness-website/



**GitHub Repository:** https://github.com/maleeha1d2003/ironpulse-fitness-website



## Project Overview



IronPulse Fitness is a fitness website designed for a local studio offering group fitness classes and personal training. The project focuses on delivering a responsive, fast, accessible, and well-documented website.



The development work was completed in five stages, covering baseline auditing, image optimization, code splitting, accessibility improvements, and deployment.



## Features



- Responsive fitness landing page

- Hero section and fitness program cards

- Class schedule page

- Interactive booking form with client-side validation

- Optimized WebP images

- Lazy loading for below-the-fold images

- Dynamic imports and code splitting

- Accessible form validation and ARIA attributes

- Visible keyboard focus indicators

- Skip-to-content navigation

- Reduced-motion support

- Automated GitHub Pages deployment using GitHub Actions



## Technology Stack



- HTML5

- CSS3

- JavaScript

- Vite

- Node.js and npm

- Sharp (image optimization)

- WebP

- Git and GitHub

- GitHub Actions

- GitHub Pages

- Lighthouse



## Project Structure



```text

ironpulse-fitness-website/

│

├── .github/

│   └── workflows/

│       └── deploy.yml

│

├── public/

│   └── images/

│

├── scripts/

│   └── optimize-images.js

│

├── src/

│   ├── assets/

│   ├── booking.js

│   ├── main.js

│   ├── schedule.js

│   └── style.css

│

├── index.html

├── package.json

├── package-lock.json

├── vite.config.js

├── README.md

├── CASE_STUDY.md

├── baseline.html

└── task2-final.html

```



## Getting Started



### Prerequisites



Install:



- Node.js

- npm

- Git



### Clone the repository



```bash

git clone https://github.com/maleeha1d2003/ironpulse-fitness-website.git

```



### Open the project directory



```bash

cd ironpulse-fitness-website

```



### Install dependencies



```bash

npm install

```



### Start the development server



```bash

npm run dev

```



Vite starts a local development server. Open the URL displayed in the terminal.



### Build for production



```bash

npm run build

```



The production build automatically runs the image optimization script before Vite generates the production files.



### Preview the production build



```bash

npm run preview

```



The generated production files are stored in the `dist/` directory.



## Task 1: Baseline Audit & Project Setup



The initial website was evaluated using Lighthouse to establish baseline performance and quality measurements.



The original report is available in `baseline.html`.



### Baseline Lighthouse Scores



| Category | Score |

|---|---:|

| Performance | 90 |

| Accessibility | 100 |

| Best Practices | 100 |

| SEO | 92 |



### Baseline Performance Metrics



| Metric | Result |

|---|---:|

| First Contentful Paint (FCP) | 2.3 s |

| Largest Contentful Paint (LCP) | 3.2 s |

| Total Blocking Time (TBT) | 0 ms |

| Cumulative Layout Shift (CLS) | 0.012 |



These measurements established the initial performance baseline.



## Task 2: Asset Optimization & Lazy Loading



Task 2 focused on reducing image file sizes, serving images in WebP format, and implementing efficient image loading.



### Image Optimization



- Converted source images into WebP format using Sharp.

- Stored optimized images locally.

- Reduced image file sizes while maintaining visual quality.

- Automated image optimization during production builds.



### Image Size Comparison



| Image | Original Size | Optimized Size |

|---|---:|---:|

| Hero image | 183.9 KB | 33.3 KB |

| Training image | 81.7 KB | 12.8 KB |



### Lazy Loading



The training image uses:



```html

loading="lazy"

decoding="async"

```



The hero image receives high loading priority because it is visible immediately when the page opens.



### Automated Image Optimization



The image optimization script is located at:



`scripts/optimize-images.js`



The build command in `package.json` is:



```json

"build": "node scripts/optimize-images.js && vite build"

```



### Lighthouse Results After Task 2



The report is available in `task2-final.html`.



| Category | Baseline | Task 2 Final |

|---|---:|---:|

| Performance | 90 | 100 |

| Accessibility | 100 | 100 |

| Best Practices | 100 | 100 |

| SEO | 92 | 100 |



### Performance Metrics Comparison



| Metric | Baseline | Task 2 Final |

|---|---:|---:|

| First Contentful Paint | 2.3 s | 1.0 s |

| Largest Contentful Paint | 3.2 s | 1.2 s |

| Total Blocking Time | 0 ms | 0 ms |

| Cumulative Layout Shift | 0.012 | 0 |



These measurements show the improvements achieved during image optimization and lazy loading.



## Task 3: Code Splitting & Dynamic Imports



Task 3 introduced separate JavaScript modules for the class schedule and booking pages.



### Dynamic Modules



| Module | Purpose |

|---|---|

| `src/main.js` | Homepage, navigation, and route handling |

| `src/schedule.js` | Class schedule page |

| `src/booking.js` | Booking form page |



### Dynamic Import Implementation



The schedule module is loaded using:



```javascript

const { renderSchedule } = await import("./schedule.js");

```



The booking module is loaded using:



```javascript

const { renderBooking } = await import("./booking.js");

```



These dynamic imports allow Vite to generate separate JavaScript chunks for the schedule and booking pages.



### Booking Form



The booking form includes:



- Full name

- Email address

- Training preference

- Preferred date

- Client-side validation

- Confirmation message



The booking form is a frontend demonstration. It does not send personal information to a backend or store booking requests.



## Task 4: Accessibility Audit & Fixes



Task 4 focused on improving website accessibility and addressing common accessibility requirements.



### Accessibility Improvements



- Added ARIA labels and descriptions to interactive elements and form fields.

- Implemented accessible form validation messages.

- Added `aria-invalid` to identify invalid form fields.

- Used live regions to announce form feedback.

- Added visible keyboard focus indicators.

- Added a skip-to-main-content link.

- Added reduced-motion support for users who prefer less animation.

- Improved text and interface border contrast.



### Colour Contrast



The website uses a dark background with light text and lime-green accent colours.



Important colour combinations were checked against WCAG AA contrast requirements:



| Combination | WCAG AA Requirement |

|---|---|

| Normal text | 4.5:1 |

| Large text | 3:1 |

| Important UI boundaries and indicators | 3:1 |



### Lighthouse Accessibility Results



The Task 4 Lighthouse audit achieved:



| Category | Score |

|---|---:|

| Performance | 100 |

| Accessibility | 100 |

| Best Practices | 96 |

| SEO | 100 |



Lighthouse also identified additional items requiring manual accessibility testing. Therefore, the automated accessibility score should not be treated as proof that every WCAG requirement has been manually verified.



## Task 5: Performance Testing, Deployment & Documentation



Task 5 focuses on production deployment, automated CI/CD, final performance verification, and project documentation.



### GitHub Actions CI/CD



The deployment workflow is located at:



`.github/workflows/deploy.yml`



The workflow is configured to:



1. Trigger when changes are pushed to the `main` branch.

2. Allow manual execution through GitHub Actions.

3. Check out the repository.

4. Set up Node.js 22.

5. Install dependencies using `npm ci`.

6. Build the website using `npm run build`.

7. Configure GitHub Pages.

8. Upload the production `dist/` directory.

9. Deploy the website to GitHub Pages.



### Deployment



The website is hosted using GitHub Pages.



**Live URL:**



https://maleeha1d2003.github.io/ironpulse-fitness-website/



The GitHub Pages deployment source is configured to use GitHub Actions, and successful workflow runs have been verified in the repository.



### Task 5 Lighthouse Results



The final Lighthouse audit was performed on the publicly deployed IronPulse Fitness website using Google Chrome DevTools. The production audit achieved Performance 100, Accessibility 100, Best Practices 96, and SEO 100. The report is saved as `task5-final-lighthouse.html` for verification and future reference.



| Category | Score |

|---|---:|

| Performance | 100 |

| Accessibility | 100 |

| Best Practices | 96 |

| SEO | 100 |





### Documentation



The project includes:



- `README.md` – setup, build, project structure, and deployment instructions.

- `CASE_STUDY.md` – project challenges, solutions, implementation, and results.

- `baseline.html` – initial Lighthouse report.

- `task2-final.html` – Task 2 final Lighthouse report.
- `task5-final-lighthouse.html` – final Lighthouse report from the deployed production website.



## Deployment Instructions



To deploy updates:



1. Make changes to the project.

2. Build locally using `npm run build`.

3. Commit and push changes to the `main` branch.



```bash

git add .

git commit -m "Update IronPulse Fitness website"

git push origin main

```



GitHub Actions automatically starts the deployment workflow after the push.



The deployment status can be checked in the repository's **Actions** tab.



## Repository



GitHub Repository:



https://github.com/maleeha1d2003/ironpulse-fitness-website



Live Website:



https://maleeha1d2003.github.io/ironpulse-fitness-website/



## Conclusion



The IronPulse Fitness project progressed through five development stages, covering initial auditing, asset optimization, code splitting, accessibility improvements, and automated deployment.



The project achieved a Lighthouse Accessibility score of 100 and Performance score of 100 in the latest recorded Task 5 audit. Image optimization reduced the size of the two main images, while dynamic imports separated the schedule and booking modules into independent JavaScript chunks.



GitHub Actions automates the production build and GitHub Pages deployment, providing a repeatable deployment workflow.



The final project includes its source code, live website, Lighthouse evidence, setup instructions, and case study documentation.
