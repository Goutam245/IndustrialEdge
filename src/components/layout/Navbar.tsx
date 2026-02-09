import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Products", path: "/products" },
  { name: "Dealers", path: "/dealers" },
  { name: "Resources", path: "/resources" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-accent rounded flex items-center justify-center">
            <span className="text-accent-foreground font-heading font-bold text-sm">IE</span>
          </div>
          <span className="text-primary-foreground font-heading font-bold text-lg tracking-tight hidden sm:block">
            IndustrialEdge
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18004638787"
            className="flex items-center gap-1.5 text-primary-foreground/80 text-sm hover:text-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            1-800-INDUSTRY
          </a>
          <Link to="/contact">
            <Button variant="accent" size="sm">
              Request Quote
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-primary-foreground/10 mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button variant="accent" size="sm" className="w-full">
                  Request Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
