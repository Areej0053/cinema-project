
import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const navItems = [
    { label: "Explore", path: "/" },
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
    { label: "About", path: "/about" }
  ];

  return (
    <header className="cineverse-header">
      <div className="header-container">
        <NavLink
          to="/"
          className="cineverse-logo"
          aria-label="CineVerse Home"
        >
          <span className="logo-icon" aria-hidden="true">
            🎬
          </span>
          <span>
            Cine<span className="logo-red">Verse</span>
          </span>
        </NavLink>

        <nav className="header-navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `header-nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
