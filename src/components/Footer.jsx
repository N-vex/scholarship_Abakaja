import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    

<footer className="bg-primary text-primary-foreground text-white bg-black">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <a
                  href="/"
                  className="flex items-center rtl:space-x-reverse"
                >
                  <span className="flex items-center md:space-x-1">
                    <img 
                      src="./src/assets/logo01.png" 
                      className="h-8 md:h-10 transform md:scale-200" 
                      alt="Logo" 
                    />
                    <img 
                      src="./src/assets/logo02.png" 
                      className="h-8 md:h-10" 
                      alt="Logo 2"
                    />
                  </span>
                </a>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Empowering dreams through education since 2020.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/scholarships" className="text-primary-foreground/80 hover:text-accent transition-colors">Scholarship</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Scholarships</h3>
            <ul className="space-y-3">
              <li><a href="/scholarships" className="text-primary-foreground/80 hover:text-accent transition-colors">Undergraduate</a></li>
              <li><a href="/scholarships" className="text-primary-foreground/80 hover:text-accent transition-colors">Graduate</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">STEM Programs</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Arts & Humanities</a></li>
              <li><a href="/application-form" className="text-primary-foreground/80 hover:text-accent transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  123 Education Lane<br />
                  Boston, MA 02101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+15551234567" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@brightfuture.org" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@M.O.Abakaja.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2026 M.O. Abakaja Educational Foundation Scholarships. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};
