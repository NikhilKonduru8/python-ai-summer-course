
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Courses", href: "#courses" },
    { name: "Instructors", href: "#instructors" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">Python Mastery</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Button asChild className="bg-primary text-black hover:bg-primary/90">
                <a href="https://forms.gle/HaU79P3qhA4pCdhr5" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Button asChild className="w-full mt-4 bg-primary text-black hover:bg-primary/90">
                <a href="https://forms.gle/HaU79P3qhA4pCdhr5" target="_blank" rel="noopener noreferrer">
                  Register Now
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
