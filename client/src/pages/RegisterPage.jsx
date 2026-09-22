import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <p className="eyebrow">Start your journey</p>
        <h1>Create your account</h1>

        <form className="auth-form">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="At least 8 characters"
          />

          <label htmlFor="role">I am registering as</label>
          <select id="role" defaultValue="candidate">
            <option value="candidate">Candidate</option>
            <option value="recruiter">Recruiter</option>
          </select>

          <button type="submit" className="primary-button">
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}

export default RegisterPage;