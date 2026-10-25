
import "./style.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="#" aria-label="IronPulse Fitness home">
      <span class="brand-mark">IP</span>
      <span>IRONPULSE<span class="brand-accent"> FITNESS</span></span>
    </a>
    <nav aria-label="Main navigation">
      <a href="#programs">Programs</a>
      <a href="#about">Our approach</a>
      <a href="#contact" class="nav-cta">Start training</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow"><span></span> YOUR STRENGTH. YOUR JOURNEY.</p>
        <h1>Stronger every day.<br /><span>Better every version.</span></h1>
        <p class="hero-copy">
          Train with purpose, build lasting habits, and discover what your
          body can do with coaching that meets you where you are.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#programs">Explore programs ↗</a>
          <a class="button button-secondary" href="#about">Discover our approach</a>
        </div>
        <div class="hero-stats" aria-label="Our training philosophy">
          <div><strong>01</strong><span>Train with purpose</span></div>
          <div><strong>02</strong><span>Progress at your pace</span></div>
          <div><strong>03</strong><span>Build lasting strength</span></div>
        </div>
      </div>
      <div class="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=80"
          alt="Modern gym with strength training equipment"
          fetchpriority="high"
        />
        <div class="image-label">
          <span class="pulse-dot"></span>
          <span><strong>BUILT THROUGH CONSISTENCY</strong><small>Every rep moves you forward.</small></span>
        </div>
        <div class="vertical-label">STRENGTH · DISCIPLINE · COMMUNITY</div>
      </div>
    </section>

    <section class="programs section" id="programs">
      <div class="section-heading">
        <div>
          <p class="eyebrow">FIND YOUR FOCUS</p>
          <h2>Training that moves you forward.</h2>
        </div>
        <p>Good training starts with a plan that fits your goals and your life.</p>
      </div>
      <div class="program-grid">
        <article class="program-card">
          <span class="program-number">01 / PERSONAL</span>
          <h3>Personal Training</h3>
          <p>One-to-one coaching shaped around your goals, experience, and schedule.</p>
          <a href="#contact">Find your coach ↗</a>
        </article>
        <article class="program-card">
          <span class="program-number">02 / STRENGTH</span>
          <h3>Strength & Conditioning</h3>
          <p>Build strength, improve movement, and develop a foundation that lasts.</p>
          <a href="#contact">Build your plan ↗</a>
        </article>
        <article class="program-card">
          <span class="program-number">03 / COMMUNITY</span>
          <h3>Group Fitness</h3>
          <p>Bring your energy, train with others, and make consistency a habit.</p>
          <a href="#contact">Join a class ↗</a>
        </article>
      </div>
    </section>

    <section class="approach section" id="about">
      <p class="eyebrow">THE IRONPULSE APPROACH</p>
      <h2>Less guesswork.<br /><span>More meaningful progress.</span></h2>
      <p>We believe fitness should be challenging, welcoming, and sustainable.
        Start where you are, focus on the fundamentals, and keep showing up.</p>
    </section>

    <section class="contact section" id="contact">
      <div>
        <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>Ready to get moving?</h2>
      </div>
      <a class="button button-primary" href="mailto:hello@ironpulse.example">Ask about training ↗</a>
    </section>
  </main>

  <footer>
    <a class="brand" href="#"><span class="brand-mark">IP</span> IRONPULSE FITNESS</a>
    <p>Train with purpose. Progress with confidence.</p>
    <span>© <span id="year"></span> IronPulse Fitness</span>
  </footer>
`;

document.querySelector("#year").textContent = new Date().getFullYear();
