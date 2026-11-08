
import "./style.css";

const app = document.querySelector("#app");

const homeView = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="IronPulse Fitness home">
      <span class="brand-mark" aria-hidden="true">IP</span>
      <span>IRONPULSE<span class="brand-accent"> FITNESS</span></span>
    </a>

    <nav aria-label="Main navigation">
      <a href="#programs">Programs</a>
      <a href="#about">Our approach</a>
      <a href="#schedule">Class schedule</a>
      <a href="#booking" class="nav-cta">Book a session</a>
    </nav>
  </header>

  <main id="main-content" tabindex="-1">
    <section class="hero" id="home">
      <div class="hero-content">
        <p class="eyebrow">
          <span></span> YOUR STRENGTH. YOUR JOURNEY.
        </p>

        <h1>
          Stronger every day.<br />
          <span>Better every version.</span>
        </h1>

        <p class="hero-copy">
          Train with purpose, build lasting habits, and discover what your
          body can do with coaching that meets you where you are.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="#programs">
            Explore programs →
          </a>
          <a class="button button-secondary" href="#about">
            Discover our approach
          </a>
        </div>

        <div class="hero-stats" aria-label="Our training philosophy">
          <div><strong>01</strong><span>Train with purpose</span></div>
          <div><strong>02</strong><span>Progress at your pace</span></div>
          <div><strong>03</strong><span>Build lasting strength</span></div>
        </div>
      </div>

      <div class="hero-visual">
        <img
          src="${import.meta.env.BASE_URL}images/hero-source.webp"
          alt="Modern gym with strength training equipment"
          fetchpriority="high"
          width="600"
          height="400"
        />

        <div class="image-label">
          <span class="pulse-dot"></span>
          <span>
            <strong>BUILT THROUGH CONSISTENCY</strong>
            <small>Every rep moves you forward.</small>
          </span>
        </div>

        <div class="vertical-label">
          STRENGTH · DISCIPLINE · COMMUNITY
        </div>
      </div>
    </section>

    <section class="programs section" id="programs">
      <div class="section-heading">
        <div>
          <p class="eyebrow">FIND YOUR FOCUS</p>
          <h2>Training that moves you forward.</h2>
        </div>

        <p>
          Good training starts with a plan that fits your goals and your life.
        </p>
      </div>

      <div class="program-grid">
        <article class="program-card">
          <span class="program-number">01 / PERSONAL</span>
          <h3>Personal Training</h3>
          <p>
            One-to-one coaching shaped around your goals, experience, and schedule.
          </p>
          <a href="#booking">Find your coach →</a>
        </article>

        <article class="program-card">
          <span class="program-number">02 / STRENGTH</span>
          <h3>Strength & Conditioning</h3>
          <p>
            Build strength, improve movement, and develop a foundation that lasts.
          </p>
          <a href="#booking">Build your plan →</a>
        </article>

        <article class="program-card">
          <span class="program-number">03 / COMMUNITY</span>
          <h3>Group Fitness</h3>
          <p>
            Bring your energy, train with others, and make consistency a habit.
          </p>
          <a href="#schedule">Join a class →</a>
        </article>
      </div>
    </section>

    <section class="approach section" id="about">
      <div class="approach-content">
        <p class="eyebrow">THE IRONPULSE APPROACH</p>

        <h2>
          Less guesswork.<br />
          <span>More meaningful progress.</span>
        </h2>

        <p>
          We believe fitness should be challenging, welcoming, and sustainable.
          Start where you are, focus on the fundamentals, and keep showing up.
        </p>
      </div>

      <div class="approach-visual">
        <img
          src="${import.meta.env.BASE_URL}images/training-source.webp"
          alt="Athlete participating in a fitness training session"
          loading="lazy"
          decoding="async"
          width="464"
          height="309"
        />
      </div>
    </section>

    <section class="contact section" id="contact">
      <div>
        <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>Ready to get moving?</h2>
      </div>

      <a class="button button-primary" href="#booking">
        Ask about training →
      </a>
    </section>
  </main>

  <footer>
    <a class="brand" href="#home">
      <span class="brand-mark" aria-hidden="true">IP</span>
      IRONPULSE FITNESS
    </a>

    <p>Train with purpose. Progress with confidence.</p>

    <span>© <span id="year"></span> IronPulse Fitness</span>
  </footer>
`;

function setPageContent(content) {
  app.innerHTML = content;

  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

function renderHome() {
  setPageContent(homeView);
}

async function renderRoute() {
  const route = window.location.hash.slice(1) || "home";

  if (route === "booking") {
    const { renderBooking } = await import("./booking.js");

    setPageContent(renderBooking());

    const form = document.querySelector("#booking-form");
    const message = document.querySelector("#booking-message");

    if (form && message) {
      const fields = [
        {
          input: document.querySelector("#booking-name"),
          error: document.querySelector("#booking-name-error"),
          requiredMessage: "Please enter your full name.",
        },
        {
          input: document.querySelector("#booking-email"),
          error: document.querySelector("#booking-email-error"),
          requiredMessage: "Please enter your email address.",
          invalidMessage: "Please enter a valid email address.",
        },
        {
          input: document.querySelector("#booking-class"),
          error: document.querySelector("#booking-class-error"),
          requiredMessage: "Please select a training preference.",
        },
        {
          input: document.querySelector("#booking-date"),
          error: document.querySelector("#booking-date-error"),
          requiredMessage: "Please select your preferred date.",
        },
      ];

      function validateField(field) {
        const { input, error, requiredMessage, invalidMessage } = field;
        let errorText = "";

        if (input.validity.valueMissing) {
          errorText = requiredMessage;
        } else if (input.validity.typeMismatch) {
          errorText = invalidMessage;
        }

        error.textContent = errorText;

        if (errorText) {
          input.setAttribute("aria-invalid", "true");
        } else {
          input.removeAttribute("aria-invalid");
        }

        return errorText === "";
      }

      fields.forEach((field) => {
        field.input.addEventListener("input", () => {
          validateField(field);
          message.textContent = "";
        });

        field.input.addEventListener("change", () => {
          validateField(field);
          message.textContent = "";
        });
      });

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        message.textContent = "";

        const results = fields.map((field) => validateField(field));
        const firstInvalidIndex = results.indexOf(false);

        if (firstInvalidIndex !== -1) {
          message.textContent =
            "Please correct the highlighted fields before submitting.";

          fields[firstInvalidIndex].input.focus();
          return;
        }

        message.textContent =
          "Thank you! Your booking request has been recorded in this demo.";

        form.reset();

        fields.forEach((field) => {
          field.error.textContent = "";
          field.input.removeAttribute("aria-invalid");
        });
      });
    }

    return;
  }

  if (route === "schedule") {
    const { renderSchedule } = await import("./schedule.js");

    setPageContent(renderSchedule());
    return;
  }

  renderHome();

  if (route && route !== "home") {
    requestAnimationFrame(() => {
      document.getElementById(route)?.scrollIntoView({
        behavior: "smooth",
      });
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');

  if (!link) return;

  const target = link.getAttribute("href").slice(1);

  if (!target) return;

  if (target === "schedule" || target === "booking") {
    event.preventDefault();

    if (window.location.hash === `#${target}`) {
      renderRoute();
    } else {
      window.location.hash = target;
    }
  }
});

window.addEventListener("hashchange", renderRoute);

renderRoute();
