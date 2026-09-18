import { Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Features from "./components/Features";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="app">

      {/* NAVIGATION */}
      <header className="navbar">
        <div
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          Kricon<span>Tech</span>
        </div>

        <nav>
          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("dashboard")}>
            Dashboard
          </button>

          <button onClick={() => scrollToSection("features")}>
            Features
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <Link to="/login" className="nav-btn">
            Login
          </Link>
        </nav>
      </header>

      <main>

        {/* HERO */}
        <section className="hero" id="home">

          <div className="hero-content">

            <p className="eyebrow">
              DIGITAL SOLUTIONS
            </p>

            <h1>
              Build better.
              <br />
              <span>Move faster.</span>
            </h1>

            <p className="hero-text">
              A modern digital platform designed to deliver
              simple, reliable and user-friendly experiences.
            </p>

            <div className="hero-buttons">

              <Link
                to="/register"
                className="primary-btn"
              >
                Get Started
              </Link>

              <button
                className="secondary-btn"
                onClick={() => scrollToSection("about")}
              >
                Explore
              </button>

            </div>

          </div>

          <div className="hero-visual">

            <div className="visual-box">

              <div className="visual-icon">
                ✦
              </div>

              <h2>
                Innovation
              </h2>

              <p>
                Technology • People • Progress
              </p>

            </div>

          </div>

        </section>

        {/* DASHBOARD */}
        <Dashboard />

        {/* FEATURES */}
        <Features />

        {/* ABOUT */}
        <section
          className="about"
          id="about"
        >

          <div>
            <p className="eyebrow">
              ABOUT THE PROJECT
            </p>

            <h2>
              Technology built around users.
            </h2>
          </div>

          <p>
            This frontend is developed as part of the
            Kricon I.T. Solutions internship to demonstrate
            practical frontend development, responsive
            design and clean code organization.
          </p>

        </section>

      </main>

      <footer>
        <p>
          © 2026 KriconTech. Internship Project.
        </p>
      </footer>

    </div>
  );
}

export default App;