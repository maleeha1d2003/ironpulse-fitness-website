
export function renderSchedule() {
  return `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="IronPulse Fitness home">
        <span class="brand-mark" aria-hidden="true">IP</span>
        <span>IRONPULSE<span class="brand-accent"> FITNESS</span></span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#programs">Programs</a>
        <a href="#booking" class="nav-cta">Book a session</a>
      </nav>
    </header>

    <main
      class="dynamic-page section"
      id="main-content"
      tabindex="-1"
    >
      <p class="eyebrow">TRAIN TOGETHER</p>

      <h1 class="dynamic-page-title">Class schedule</h1>

      <p class="dynamic-intro">
        Choose a session that fits your week. These sample classes
        demonstrate the schedule experience.
      </p>

      <div class="schedule-grid">
        <article class="schedule-card">
          <span class="program-number">MONDAY · 08:00 AM</span>
          <h2>Strength & Conditioning</h2>
          <p>Build full-body strength with guided resistance training.</p>
          <span class="schedule-meta">45 minutes · Studio A</span>
        </article>

        <article class="schedule-card">
          <span class="program-number">WEDNESDAY · 05:30 PM</span>
          <h2>Group Fitness</h2>
          <p>A high-energy group workout focused on movement and endurance.</p>
          <span class="schedule-meta">50 minutes · Main Floor</span>
        </article>

        <article class="schedule-card">
          <span class="program-number">SATURDAY · 10:00 AM</span>
          <h2>Personal Training</h2>
          <p>Focused coaching with exercises adapted to your goals.</p>
          <span class="schedule-meta">60 minutes · Studio B</span>
        </article>
      </div>

      <div class="dynamic-actions">
        <a class="button button-primary" href="#booking">
          Book a class →
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
