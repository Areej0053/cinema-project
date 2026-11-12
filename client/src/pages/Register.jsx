
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setMessage("");
  }

  function handleRegister(event) {
    event.preventDefault();

    setError("");
    setMessage("");

    // Check required fields
    if (Object.values(form).some((value) => !value.trim())) {
      setError("Please fill in all fields.");
      return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password length
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Confirm passwords match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Milestone 1: Frontend validation only.
    // Real registration will be added in Milestone 2.
    setMessage(
      "Your details are valid. Account registration is coming soon."
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-card">

        {/* CineVerse Logo */}
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

        {/* Page Heading */}
        <div className="auth-heading">
          <h1>Join CineVerse</h1>
          <p>
            Create your profile and explore a universe of movies.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} noValidate>

          {/* Full Name */}
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
            />
          </div>

          {/* Email */}
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
            />
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
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
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          {/* Success Message */}
          {message && (
            <p className="auth-success" role="status">
              {message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              Sign In
            </Link>
          </p>
        </div>

      </section>
    </main>
  );
}
