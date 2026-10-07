import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/juhar-yimer.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-primary-glow">Juhar Yimer</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-6 text-white">
              Senior Software Developer
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-white leading-relaxed max-w-2xl">
              Passionate about creating innovative solutions with modern technologies. 
              I specialize in full-stack development, ERP customization, and building 
              scalable applications that make a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-8">
              <Button
                variant="outline"
                size="icon"
                className="border-red-500 text-red-500 bg-white hover:bg-red-50 hover:text-red-600"
                asChild
              >
                <a href="mailto:juharyimer7@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-red-500 text-red-500 bg-white hover:bg-red-50 hover:text-red-600"
                asChild
              >
                <a href="https://github.com/juaryimami" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-red-500 text-red-500 bg-white hover:bg-red-50 hover:text-red-600"
                asChild
              >
                <a href="https://www.linkedin.com/in/juhar-yemer/" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-strong"
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-500 text-red-500 bg-white hover:bg-red-50"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-glow opacity-20 animate-float"></div>
                <img
                  src={profileImage}
                  alt="Juhar Yimer - Senior Software Developer"
                  className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-strong relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="text-white hover:text-primary-glow"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
