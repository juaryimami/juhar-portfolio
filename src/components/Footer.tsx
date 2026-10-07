import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Juhar Yimer</h3>
            <p className="text-gray-300 leading-relaxed">
              Senior Software Developer passionate about creating innovative 
              solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector("#about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-300 hover:text-primary-glow transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector("#skills");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-300 hover:text-primary-glow transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector("#projects");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-300 hover:text-primary-glow transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-300 hover:text-primary-glow transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>Addis Ababa, Ethiopia</p>
              <p>
                <a
                  href="mailto:juharyimer7@gmail.com"
                  className="hover:text-primary-glow transition-colors"
                >
                  juharyimer7@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+251928355547"
                  className="hover:text-primary-glow transition-colors"
                >
                  +251 928 355 547
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-primary-glow hover:bg-white/10"
                asChild
              >
                <a href="mailto:juharyimer7@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-primary-glow hover:bg-white/10"
                asChild
              >
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-primary-glow hover:bg-white/10"
                asChild
              >
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Juhar Yimer. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" fill="currentColor" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;