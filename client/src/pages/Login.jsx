
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    // Milestone 1: Frontend validation only.
    // Real authentication will be added in Milestone 2.
    setMessage(
      "Your details are valid. Sign-in functionality is coming soon."
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-card">

        <div className="auth-logo">
          <span>🎬</span>
          <span>CineVerse</span>
        </div>

        <div className="auth-heading">
          <h1>Welcome Back!</h1>
          <p>
            Your cinematic universe is waiting for you.
          </p>
        </div>

        <form onSubmit={handleLogin} noValidate>

          <div className="form-group">
            <label htmlFor="login-email">
              Email Address
            </label>

            <input
              id="login-email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              autoComplete="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
                setMessage("");
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">
              Password
            </label>

            <div className="password-field">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                autoComplete="current-password"
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                  setMessage("");
                }}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          {message && (
            <p className="auth-success" role="status">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="auth-button"
          >
            Sign In
          </button>

        </form>

        <div className="auth-footer">
          <p>
            New to CineVerse?{" "}
            <a href="/register">
              Create an Account
            </a>
          </p>
        </div>

      </section>
    </main>
  );
}
