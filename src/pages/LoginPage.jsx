import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/components/ui/client"; 
import "@/pages/LoginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

    const handleGoogleLogin = async () => {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/admin`,
        },
      });
    };


  // const handleGithubLogin = async () => {
  //   const { error } = await supabase.auth.signInWithOAuth({
  //     provider: "github",
  //   });
  //   if (error) {
  //     console.error("GitHub login error:", error.message);
  //   }
  // };

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          setErrorMessage("Wrong password or email. Please try again.");
        } else {
          setErrorMessage(error.message);
        }
      } else if (data?.user) {
        // ✅ Successful login → navigate to admin
        navigate("/admin", { replace: true });
      }
    } catch (err) {
      console.error("Unexpected login error:", err);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        navigate("/admin", { replace: true });
      }
    };
    checkSession();

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          navigate("/admin");
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="login-root min-h-screen flex flex-col md:flex-row p-6 md:p-24">
      {/* LEFT PANEL */}
      <div className="login-left w-full md:w-1/2 flex flex-col justify-center">
        <img 
          src="/assets/logo01.png" 
          className="w-48 h-auto mb-8"
          alt="logo" 
        />

        <h1 className="text-2xl md:text-3xl font-bold">Sign in to your account</h1>
        <p className="subtitle mb-6">
          No Account? <a href="/signup" className="text-blue-600">Sign Up</a>
        </p>

        <form onSubmit={handleEmailLogin} className="login-form space-y-4">
          <div className="flex flex-col">
            <label className="mb-1">Email address</label>
            <input  name="email" type="email" placeholder="Enter your email" className="p-2 border rounded" />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Password</label>
            <input  name="password" type="password" placeholder="••••••••" className="p-2 border rounded" />
          </div>

          <div className="form-row flex justify-between items-center text-sm">
            <label className="remember flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot text-blue-600">Forgot password?</a>
          </div>

          <button type="submit" className="primary-btn w-full py-3 bg-black text-white rounded">
            Sign in
          </button>

                    {errorMessage && (
            <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
          )}
        </form>

        <div className="divider my-6 text-center border-b relative">
          <span className="bg-white px-2 relative top-3 text-gray-500 text-sm">Or continue with</span>
        </div>

        <div className="oauth flex flex-col sm:flex-row gap-4 mt-6">
          <button 
            onClick={handleGoogleLogin} 
            className="oauth-btn flex-1 border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            Google
          </button>

          {/* <button 
            onClick={handleGithubLogin} 
            className="oauth-btn flex-1 border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            GitHub
          </button> */}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="login-right hidden md:block md:w-1/2 bg-gray-100" />
    </div>
  );
};
