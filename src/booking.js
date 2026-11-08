
export function renderBooking() {
  return `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="IronPulse Fitness home">
        <span class="brand-mark" aria-hidden="true">IP</span>
        <span>IRONPULSE<span class="brand-accent"> FITNESS</span></span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#schedule">Class schedule</a>
        <a href="#programs">Programs</a>
      </nav>
    </header>

    <main
      class="dynamic-page section"
      id="main-content"
      tabindex="-1"
    >
      <p class="eyebrow">TAKE THE NEXT STEP</p>

      <h1 class="dynamic-page-title" id="booking-title">
        Book a training session
      </h1>

      <p class="dynamic-intro">
        Share your details and training preference. This demo form displays
        a confirmation without sending personal data to a server.
      </p>

      <form
        class="booking-form"
        id="booking-form"
        aria-labelledby="booking-title"
        novalidate
      >
        <label for="booking-name">Full name</label>
        <input
          id="booking-name"
          name="name"
          type="text"
          autocomplete="name"
          required
          placeholder="Your name"
          aria-describedby="booking-name-error"
        />
        <p class="field-error" id="booking-name-error" aria-live="polite"></p>

        <label for="booking-email">Email address</label>
        <input
          id="booking-email"
          name="email"
          type="email"
          autocomplete="email"
          required
          placeholder="you@example.com"
          aria-describedby="booking-email-error"
        />
        <p class="field-error" id="booking-email-error" aria-live="polite"></p>

        <label for="booking-class">Training preference</label>
        <select
          id="booking-class"
          name="class"
          required
          aria-describedby="booking-class-error"
        >
          <option value="">Select a session</option>
          <option value="Personal Training">Personal Training</option>
          <option value="Strength & Conditioning">Strength & Conditioning</option>
          <option value="Group Fitness">Group Fitness</option>
        </select>
        <p class="field-error" id="booking-class-error" aria-live="polite"></p>

        <label for="booking-date">Preferred date</label>
        <input
          id="booking-date"
          name="date"
          type="date"
          required
          aria-describedby="booking-date-error"
        />
        <p class="field-error" id="booking-date-error" aria-live="polite"></p>

        <button class="button button-primary" type="submit">
          Send booking request →
        </button>

        <p
          class="form-message"
          id="booking-message"
          role="status"
          aria-live="polite"
        ></p>
      </form>

      <div class="dynamic-actions">
        <a class="button button-secondary" href="#schedule">
          View class schedule
        </a>
        <a class="button button-secondary" href="#home">
          Back to home
        </a>
      </div>
    </main>

    <footer>
      <a class="brand" href="#home">
        <span class="brand-mark" aria-hidden="true">IP</span>
        IRONPULSE FITNESS
      </a>
      <p>Train with purpose. Progress with confidence.</p>
    </footer>
  `;
}
