import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/titiksha2003",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/titiksha-dwivedi-8097ab265/", 
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:titiksha2003dwivedi@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold mb-4 hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Titiksha Dwivedi
            </span>
          </button>

          {/* Tagline */}
          <p className="text-background/80 mb-6 max-w-md mx-auto">
            Creative Frontend Developer & Digital Storyteller passionate about building innovative solutions
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5 text-background" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm flex items-center justify-center">
              © {currentYear} Titiksha Dwivedi. Made with 
              <Heart className="w-4 h-4 mx-1 text-accent fill-current" />
              and lots of coffee ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;