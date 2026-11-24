import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading, authError } = useAuth();

  // wait for session check
  if (loading) {
    return <p>Loading...</p>;
  }

  // check authentication errors
  if (authError) {
    return <p role="alert">Unable to check your session.</p>;
  }

  // redirect guests to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
