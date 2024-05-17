import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Logo and home link */}
        <Link href="/" className="navbar-brand">
          Simple Portfolio
        </Link>

        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/github" className="nav-link">
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
