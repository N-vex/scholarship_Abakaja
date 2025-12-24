import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Scholarship } from "./pages/Scholarship";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import { Card } from "@/components/ui/card";
import ApplicationForm from "./pages/ApplicationForm"; 
import ApplicationFormSubmit  from "@/components/ui/ApplicationFormSubmit";
import Admin from "./pages/Admin"; 
import {LoginPage} from "./pages/LoginPage";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import { SignupPage } from "./pages/SignUpPage";
import ScholarProfile from "./pages/ScholarProfile";

export const App = () => {
    return (
        <Router>
            <div className="app flex flex-col min-h-screen">
                <Navbar />
                <main className="grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/scholarships" element={<Scholarship />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/application-form" element={<ApplicationForm />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <Admin />
                            </ProtectedRoute>
                        }
                        />
                        <Route path="/form-submission" element={<ApplicationFormSubmit />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/scholar-profile" element={<ScholarProfile />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};