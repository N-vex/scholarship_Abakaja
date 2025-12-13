import { useEffect, useState } from "react";
import { supabase } from "@/components/ui/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;

      if (user && user.email_confirmed_at) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }

      setLoading(false);
    };

    checkAuth();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user && session.user.email_confirmed_at) {
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center text-white justify-center">
        Checking authentication…
      </div>
    );
  }

  if (!authorized) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
