import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Your next opportunity starts here</p>

          <h1>
            Find meaningful work.
            <span> Build your future.</span>
          </h1>

          <p className="hero-description">
            CareerConnect helps candidates discover opportunities and helps
            recruiters find talented people.
          </p>

          <div className="hero-actions">
            <Link to="/jobs" className="primary-button">
              Find a job
            </Link>

            <Link to="/register" className="secondary-button">
              Create an account
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <span className="status-dot"></span>
            Live opportunities
          </div>

          <div className="job-preview">
            <div className="company-logo">T</div>

            <div>
              <h3>Frontend Developer</h3>
              <p>Technology company · Chennai</p>
            </div>
          </div>

          <div className="job-preview">
            <div className="company-logo purple">A</div>

            <div>
              <h3>AI Application Developer</h3>
              <p>Artificial intelligence · Remote</p>
            </div>
          </div>

          <div className="job-preview">
            <div className="company-logo green">D</div>

            <div>
              <h3>Data Analyst</h3>
              <p>Analytics company · Bengaluru</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <p className="eyebrow">Why CareerConnect?</p>
          <h2>Everything you need for your next career move.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">01</div>
            <h3>Discover opportunities</h3>
            <p>
              Search for jobs by title, skill, location, employment type, and
              experience level.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">02</div>
            <h3>Build your profile</h3>
            <p>
              Present your skills, education, experience, and projects in one
              professional profile.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">03</div>
            <h3>Track applications</h3>
            <p>
              Apply to jobs and follow every application from submission to
              final decision.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;