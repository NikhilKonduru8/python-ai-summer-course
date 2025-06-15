import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigationItems = [
    { name: "Overview", href: "#overview" },
    { name: "Instructor", href: "#instructor" },
    { name: "Schedule", href: "#schedule" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Tools", href: "#tools" },
    { name: "Project", href: "#project" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-teal to-secondary-blue rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">ML</span>
            </div>
            <span className="font-bold text-xl text-primary-foreground">Python AI Course</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent-teal hover:text-primary-foreground ${
                  activeSection === item.href.slice(1)
                    ? "bg-accent-teal text-primary-foreground shadow-md"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button 
              asChild
              className="ml-4 bg-gradient-to-r from-accent-teal to-secondary-blue text-primary-foreground hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              <a 
                href="https://forms.gle/QsRtV6VFTDKfWFcF9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enroll Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-in slide-in-from-top-5 duration-300">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                asChild
                className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground"
              >
                <a 
                  href="https://forms.gle/QsRtV6VFTDKfWFcF9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Enroll Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;