import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/header.css";

export default function Header() {
  const { user, loading, logout } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const navItems = [
    { label: "Explore", path: "/" },
    { label: "About", path: "/about" }
  ];

  // handle logout
  async function handleLogout() {
    setError("");
    setLoggingOut(true);

    try {
      await logout();
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoggingOut(false);
    }
  }

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

          {/* guest navigation */}
          {!loading && !user && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `header-nav-link ${isActive ? "active" : ""}`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `header-nav-link ${isActive ? "active" : ""}`
                }
              >
                Register
              </NavLink>
            </>
          )}

          {/* logged in navigation */}
          {!loading && user && (
            <>
              <span className="header-user-name">
                Hi, {user.name}
              </span>

              <button
                type="button"
                className="header-nav-link logout-button"
                onClick={handleLogout}
                disabled={loggingOut}
              >
                {loggingOut ? "Logging out..." : "Logout"}
              </button>
            </>
          )}
        </nav>
      </div>

      {error && (
        <p className="header-auth-error" role="alert">
          {error}
        </p>
      )}
    </header>
  );
}