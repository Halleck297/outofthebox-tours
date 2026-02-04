import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/color-logo-nobg.svg"
              alt="Out of the Box Tours"
              className="h-12 w-auto mb-4"
            />
            <p className="text-background/70 mb-6">
              Authentic Italian experiences with passionate local guides.
              Travel different, travel unforgettable.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-pop-yellow rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pop-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pop-turquoise rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4">EXPLORE</h4>
            <ul className="space-y-3">
              <li>
                <a href="#us" className="text-background/70 hover:text-pop-yellow transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#guides" className="text-background/70 hover:text-pop-yellow transition-colors">
                  Local Guides
                </a>
              </li>
              <li>
                <a href="#tours" className="text-background/70 hover:text-pop-yellow transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="#tailor-made" className="text-background/70 hover:text-pop-yellow transition-colors">
                  Tailor-Made
                </a>
              </li>
              <li>
                <a href="#blog" className="text-background/70 hover:text-pop-yellow transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-display text-xl mb-4">POPULAR TOURS</h4>
            <ul className="space-y-3">
              <li>
                <a href="#tours" className="text-background/70 hover:text-pop-pink transition-colors">
                  Florence Hidden Gems
                </a>
              </li>
              <li>
                <a href="#tours" className="text-background/70 hover:text-pop-pink transition-colors">
                  Chianti Wine Experience
                </a>
              </li>
              <li>
                <a href="#tours" className="text-background/70 hover:text-pop-pink transition-colors">
                  Siena & San Gimignano
                </a>
              </li>
              <li>
                <a href="#tours" className="text-background/70 hover:text-pop-pink transition-colors">
                  Cinque Terre Day Trip
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-4">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pop-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Florence, Tuscany<br />Italy
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pop-yellow" />
                <a href="tel:+390551234567" className="text-background/70 hover:text-pop-yellow transition-colors">
                  +39 055 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pop-pink" />
                <a href="mailto:hello@outofthebox.tours" className="text-background/70 hover:text-pop-pink transition-colors">
                  hello@outofthebox.tours
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              &copy; 2026 Out of the Box Tours. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
