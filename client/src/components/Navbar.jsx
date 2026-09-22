import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">
          CareerConnect
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/login">Login</Link>
          <Link to="/register" className="nav-button">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;