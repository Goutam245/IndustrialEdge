import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent rounded flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-sm">IE</span>
              </div>
              <span className="font-heading font-bold text-lg">IndustrialEdge</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Engineered for power. Built for precision. Trusted by industry leaders worldwide since 1985.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-accent">Products</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              {["Hydraulic Systems", "Heavy-Duty Pumps", "Industrial Valves", "Power Transmission", "Pneumatic Components", "Filtration Systems", "Pressure Vessels", "Control Systems"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="hover:text-accent transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-accent">Resources</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              {["Technical Manuals", "Installation Guides", "Video Library", "CAD Downloads", "Troubleshooting", "Maintenance Schedules"].map((item) => (
                <li key={item}>
                  <Link to="/resources" className="hover:text-accent transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-accent">Company</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              {[
                { name: "About Us", path: "/about" },
                { name: "Find a Dealer", path: "/dealers" },
                { name: "Careers", path: "/about" },
                { name: "Sustainability", path: "/about" },
                { name: "News & Blog", path: "/resources" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-accent transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span>+1-800-INDUSTRY<br />(463-8787)</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span>info@industrialedge.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>4500 Industrial Parkway<br />Cleveland, OH 44135</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-medium text-primary-foreground/80 mb-2">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 h-9 px-3 text-xs bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
                />
                <button className="h-9 px-3 bg-accent text-accent-foreground text-xs font-semibold rounded hover:bg-accent/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs text-primary-foreground/50 font-mono">
            {["ISO 9001:2015", "ISO 14001:2015", "ASME Certified", "API 610", "CE Marking", "UL Listed"].map((cert) => (
              <span key={cert} className="border border-primary-foreground/20 rounded px-3 py-1.5">
                {cert}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
            <p>© 2025 IndustrialEdge Corporation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
