import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  // handle login
  async function handleLogin(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await login(email.trim(), password);
      navigate("/");
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

        {/* welcome heading */}
        <div className="auth-heading">
          <h1>Welcome Back!</h1>
          <p>
            Your cinematic universe is waiting for you.
          </p>
        </div>

        {/* login form */}
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
              }}
              required
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
                }}
                required
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
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>

        {/* register link */}
        <div className="auth-footer">
          <p>
            New to CineVerse?{" "}
            <Link to="/register">
              Create an Account
            </Link>
          </p>
        </div>

      </section>
    </div>
  );
}