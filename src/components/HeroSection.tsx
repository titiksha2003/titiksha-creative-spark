import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Creative Frontend Developer
          </span>
          <br />
          <span className="text-foreground text-3xl sm:text-4xl lg:text-5xl">
            & Digital Storyteller
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
          Passionate B.Tech student crafting beautiful web experiences and innovative digital solutions. 
          From AI-powered language learning platforms to audience analytics tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection("#projects")}
            className="group"
          >
            View My Work
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => scrollToSection("#contact")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a 
            href="https://github.com/titiksha2003" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-accent"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/titiksha-dwivedi-8097ab265/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-primary"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:titiksha2003dwivedi@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-accent"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;