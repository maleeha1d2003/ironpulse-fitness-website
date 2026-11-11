# Case Study: IronPulse Fitness Website Speed & Accessibility Rescue

## 1. Project Overview

**Project:** IronPulse Fitness Website Speed & Accessibility Rescue  
**Client:** IronPulse Fitness  
**Technology:** Frontend Development  
**Tools:** HTML, CSS, JavaScript, Vite, Sharp, GitHub Actions, GitHub Pages, and Lighthouse

IronPulse Fitness is a fitness website designed for a local studio offering group classes and personal training. The project's objective was to improve website performance, accessibility, and user experience while establishing an automated deployment process.

The project was completed in five stages, covering baseline auditing, image optimization, code splitting, accessibility improvements, and deployment documentation.

## 2. Initial Challenges

The initial website assessment established several areas for improvement:

- Large image files increased page loading time.
- Images needed more efficient loading strategies.
- The application required separate modules for its schedule and booking pages.
- Accessibility improvements were needed for interactive elements and form validation.
- A repeatable production deployment process and comprehensive documentation were required.

## 3. Solutions and Implementation

### 3.1 Baseline Audit and Project Setup

The project began with a Lighthouse audit to establish baseline measurements.

Initial Lighthouse scores:

| Category | Baseline Score |
|---|---:|
| Performance | 90 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 92 |

The baseline report was saved as `baseline.html`.

### 3.2 Asset Optimization and Lazy Loading

The image optimization process used Sharp to convert source images into WebP format.

The main image size reductions were:

| Image | Original Size | Optimized Size |
|---|---:|---:|
| Hero image | 183.9 KB | 33.3 KB |
| Training image | 81.7 KB | 12.8 KB |

The hero image was configured with high loading priority, while the training image uses lazy loading and asynchronous decoding.

Image optimization was also integrated into the production build command.

### 3.3 Code Splitting and Dynamic Imports

The schedule and booking pages were separated into independent JavaScript modules.

| File | Responsibility |
|---|---|
| `src/main.js` | Homepage, navigation, and route handling |
| `src/schedule.js` | Class schedule |
| `src/booking.js` | Booking form |

Dynamic imports were used to load these modules when their corresponding routes were opened.

This allowed Vite to generate separate JavaScript chunks for the schedule and booking pages.

The booking form includes client-side validation and a confirmation message. It is a frontend demonstration and does not store or transmit booking requests to a backend.

### 3.4 Accessibility Audit and Fixes

Accessibility improvements included:

- ARIA labels and descriptions.
- Accessible form validation messages.
- Invalid-field identification using `aria-invalid`.
- Live regions for form feedback.
- Visible keyboard focus indicators.
- A skip-to-content link.
- Reduced-motion support.
- Improved text and interface border contrast.

The latest recorded Lighthouse accessibility audit achieved a score of 100.

Some additional Lighthouse checks require manual testing, so the automated score is not considered a complete manual WCAG assessment.

### 3.5 Performance Testing and Deployment

GitHub Actions was configured to automate the production build and deployment process.

The workflow performs these operations:

1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs dependencies using `npm ci`.
4. Builds the website using `npm run build`.
5. Configures GitHub Pages.
6. Uploads the `dist/` directory.
7. Deploys the website to GitHub Pages.

Successful GitHub Actions workflow runs were verified in the repository.

The deployed website is publicly accessible through GitHub Pages. GitHub Pages is configured to use GitHub Actions as its deployment source, and HTTPS is enforced.

## 4. Results and Performance Comparison

### 4.1 Lighthouse Score Comparison

| Category | Baseline | Final Production Audit |
|---|---:|---:|
| Performance | 90 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 96 |
| SEO | 92 | 100 |

The final Lighthouse audit was performed on the publicly deployed IronPulse Fitness website using Google Chrome DevTools. The production audit achieved Performance 100, Accessibility 100, Best Practices 96, and SEO 100. The report is saved as `task5-final-lighthouse.html` for verification and future reference.

The results show that Performance increased from 90 to 100 and SEO increased from 92 to 100 compared with the baseline. Accessibility remained at 100. Best Practices scored 96 in the final production audit, so there is still room for improvement in that category.

### 4.2 Image Optimization Results

| Image | Original Size | Optimized Size |
|---|---:|---:|
| Hero image | 183.9 KB | 33.3 KB |
| Training image | 81.7 KB | 12.8 KB |

Both images were substantially reduced in size through WebP conversion.

### 4.3 Deployment Results

- GitHub repository maintained with the project source code.
- GitHub Actions deployment workflow configured.
- Successful workflow executions verified.
- GitHub Pages configured with GitHub Actions as its deployment source.
- HTTPS enforced.
- Website publicly accessible.

## 5. Challenges Encountered

During development, several challenges required attention:

**Image optimization:** Large source images needed to be reduced without unnecessarily affecting visual quality. Sharp and WebP conversion were used to address this.

**Dynamic routing:** Separating the schedule and booking pages required careful handling of hash-based navigation and dynamic imports.

**Form accessibility:** The booking form required accessible error messages, invalid-field identification, and clear confirmation feedback.

**Keyboard accessibility:** Visible focus indicators and a skip-to-content link were added. A keyboard Tab-navigation issue remained unresolved and was deferred, so further manual testing is still recommended.

**Automated deployment:** GitHub Actions was configured to build and publish the Vite production output through GitHub Pages.

## 6. Technologies and Tools Used

- HTML5 and CSS3
- JavaScript
- Vite
- Node.js and npm
- Sharp
- WebP
- Git and GitHub
- GitHub Actions
- GitHub Pages
- Lighthouse

## 7. Project Links

**Live Website:**  
https://maleeha1d2003.github.io/ironpulse-fitness-website/

**GitHub Repository:**  
https://github.com/maleeha1d2003/ironpulse-fitness-website

## 8. Conclusion

The IronPulse Fitness project improved the website through image optimization, lazy loading, code splitting, accessibility enhancements, and automated deployment.

The final production Lighthouse audit achieved Performance and Accessibility scores of 100, Best Practices 96, and SEO 100. Image optimization reduced the size of the two main images, while dynamic imports separated the schedule and booking modules into independent JavaScript chunks.

GitHub Actions automates the production build and GitHub Pages deployment, providing a repeatable deployment workflow.

The final project includes the website source code, public deployment, Lighthouse evidence, setup instructions, and case study documentation. Further manual accessibility testing remains useful for validating keyboard navigation and other accessibility requirements.
