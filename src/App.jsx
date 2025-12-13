import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Scholarship } from "./pages/Scholarship";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import { Card } from "@/components/UI/Card";
import ApplicationForm from "./pages/ApplicationForm"; 
import { ApplicationFormSubmit } from "@/components/ui/ApplicationFormSubmit";
import Admin from "./pages/Admin"; 


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
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/form-submission" element={<ApplicationFormSubmit />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};