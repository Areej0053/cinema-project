import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  // update form fields
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  // handle registration
  async function handleRegister(event) {
    event.preventDefault();
    setError("");

    // check required fields
    if (Object.values(form).some((value) => !value.trim())) {
      setError("Please fill in all fields.");
      return;
    }

    // validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    // validate password length
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (new TextEncoder().encode(form.password).length > 72) {
      setError("Password is too long.");
      return;
    }

    // check passwords match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await register(
        form.name.trim(),
        form.email.trim(),
        form.password
      );

      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <section className="auth-card">

        {/* cineverse logo */}
        <div className="auth-logo">
          <span
            className="auth-logo-icon"
            aria-hidden="true"
          >
            🎬
          </span>

          <span className="auth-logo-text">
            Cine<span className="auth-logo-red">Verse</span>
          </span>
        </div>

        {/* page heading */}
        <div className="auth-heading">
          <h1>Join CineVerse</h1>
          <p>
            Create your profile and explore a universe of movies.
          </p>
        </div>

        {/* registration form */}
        <form onSubmit={handleRegister} noValidate>

          <div className="form-group">
            <label htmlFor="register-name">
              Full Name
            </label>

            <input
              id="register-name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">
              Email Address
            </label>

            <input
              id="register-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">
              Password
            </label>

            <div className="password-field">
              <input
                id="register-password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword
                    ? "Hide passwords"
                    : "Show passwords"
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="register-confirm">
              Confirm Password
            </label>

            <input
              id="register-confirm"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              autoComplete="new-password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* error message */}
          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          {/* submit button */}
          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* login link */}
        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              Sign In
            </Link>
          </p>
        </div>

      </section>
    </div>
  );
}