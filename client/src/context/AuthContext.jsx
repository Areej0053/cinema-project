import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // check current user
  const checkAuth = async () => {
    setAuthError(null);

    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        credentials: "include"
      });

      if (response.status === 401) {
        setUser(null);
      } else if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        throw new Error("Could not check authentication");
      }
    } catch (error) {
      setUser(null);
      setAuthError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // register new user
  const register = async (name, email, password) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  };

  // login user
  const login = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    setUser(data.user);
    setAuthError(null);

    return data;
  };

  // logout user
  const logout = async () => {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    setUser(null);
    setAuthError(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        authError,
        checkAuth,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}