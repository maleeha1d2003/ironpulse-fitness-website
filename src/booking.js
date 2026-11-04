export function renderBooking() {
  return `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="IronPulse Fitness home">
        <span class="brand-mark">IP</span>
        <span>IRONPULSE<span class="brand-accent"> FITNESS</span></span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#schedule">Class schedule</a>
        <a href="#programs">Programs</a>
      </nav>
    </header>
    <main class="dynamic-page section">
      <p class="eyebrow">TAKE THE NEXT STEP</p>
      <h1 class="dynamic-page-title">Book a training session</h1>
      <p class="dynamic-intro">Share your details and training preference. This demo form displays a confirmation without sending personal data to a server.</p>
      <form class="booking-form" id="booking-form">
        <label for="booking-name">Full name</label>
        <input id="booking-name" name="name" type="text" autocomplete="name" required placeholder="Your name" />
        <label for="booking-email">Email address</label>
        <input id="booking-email" name="email" type="email" autocomplete="email" required placeholder="you@example.com" />
        <label for="booking-class">Training preference</label>
        <select id="booking-class" name="class" required>
          <option value="">Select a session</option>
          <option>Personal Training</option>
          <option>Strength & Conditioning</option>
          <option>Group Fitness</option>
        </select>
        <label for="booking-date">Preferred date</label>
        <input id="booking-date" name="date" type="date" required />
        <button class="button button-primary" type="submit">Send booking request →</button>
        <p class="form-message" id="booking-message" role="status" aria-live="polite"></p>
      </form>
      <div class="dynamic-actions">
        <a class="button button-secondary" href="#schedule">View class schedule</a>
        <a class="button button-secondary" href="#home">Back to home</a>
      </div>
    </main>
    <footer>
      <a class="brand" href="#home"><span class="brand-mark">IP</span> IRONPULSE FITNESS</a>
      <p>Train with purpose. Progress with confidence.</p>
    </footer>
  `;
}
