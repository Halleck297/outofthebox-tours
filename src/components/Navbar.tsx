import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Us", href: "#us" },
  { name: "Local Guides", href: "#guides" },
  { name: "Tours", href: "#tours" },
  { name: "Tailor-Made", href: "#tailor-made" },
  { name: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/color-logo-nobg.svg"
              alt="Out of the Box Tours"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground hover:text-pop-pink transition-colors uppercase tracking-wide text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#tailor-made"
              className="bg-pop-yellow text-foreground font-bold px-6 py-3 rounded-full shadow-pop hover:shadow-pop-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-foreground hover:text-pop-pink transition-colors uppercase tracking-wide py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#tailor-made"
                onClick={() => setIsOpen(false)}
                className="bg-pop-yellow text-foreground font-bold px-6 py-3 rounded-full shadow-pop uppercase tracking-wide text-center mt-4"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
