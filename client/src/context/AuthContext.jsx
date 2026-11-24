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

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, checkAuth, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
