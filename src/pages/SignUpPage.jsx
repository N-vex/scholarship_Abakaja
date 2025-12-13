import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/components/ui/client";
import { motion } from "framer-motion";
import "@/pages/LoginPage.css";

export const SignupPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* ------------------ EMAIL/PASSWORD SIGNUP ------------------ */
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
    } else {
      setVerificationSent(true);
    }
  };

  /* ------------------ GOOGLE OAUTH SIGNUP ------------------ */
    const handleGoogleSignup = async () => {
    setOauthLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
        redirectTo: `${window.location.origin}/admin`,
        },
    });

    if (error) {
        setErrorMessage(error.message);
        setOauthLoading(false);
    }
    };

  /* ------------------ SESSION CHECK ------------------ */
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        navigate("/admin");
      }
    };
    checkSession();
  }, [navigate]);

  return (
    <div className="login-root min-h-screen p-6 flex items-center justify-center px-4">
      <motion.div
        className="login-left w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src="./src/assets/logo01.png"
          className="w-40 mb-8 mx-auto"
          alt="logo"
        />

        {!verificationSent ? (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              Create your account
            </h1>

            <p className="subtitle text-center mb-6">
              Already have an account?{" "}
              <a href="/login" className="text-blue-700">
                Sign in
              </a>
            </p>

            {/* -------- GOOGLE SIGNUP BUTTON -------- */}
            <button
              onClick={handleGoogleSignup}
              disabled={oauthLoading}
              className="oauth-btn w-full mb-4 flex items-center justify-center gap-2"
            >
              {oauthLoading ? "Connecting..." : "Sign up with Google"}
            </button>

            <div className="divider my-6">
              <span>or sign up with email</span>
            </div>

            {/* -------- EMAIL SIGNUP FORM -------- */}
            <form onSubmit={handleSignup} className="login-form space-y-4">
              <div className="flex flex-col">
                <label>Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label>Confirm password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {errorMessage && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}

              <button
                type="submit"
                className="primary-btn w-full py-3"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Sign up"}
              </button>
            </form>
          </>
        ) : (
          /* -------- EMAIL VERIFICATION STATE -------- */
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-semibold">Verify your email 📩</h2>
            <p className="text-gray-500">
              We’ve sent a verification link to:
            </p>
            <p className="font-medium">{email}</p>
            <p className="text-sm text-gray-500">
              Please check your inbox to activate your account.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
