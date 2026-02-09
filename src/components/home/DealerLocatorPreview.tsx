import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const DealerLocatorPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-2">
              Dealer Network
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Find Your Nearest Authorized Dealer
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Over 200 certified dealers and service centers worldwide, ready to support you with sales, installation, and maintenance.
            </p>

            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter ZIP code or city"
                  defaultValue="10001"
                  className="w-full h-11 pl-10 pr-4 border rounded-lg bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <Button variant="accent">Search</Button>
            </div>

            <div className="space-y-3">
              {[
                { name: "Industrial Solutions NYC", dist: "0.8 mi", rating: "4.8" },
                { name: "Metro Hydraulics Supply", dist: "4.2 mi", rating: "4.6" },
                { name: "Tri-State Equipment Corp", dist: "6.7 mi", rating: "4.9" },
              ].map((dealer) => (
                <div
                  key={dealer.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/60 border"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{dealer.name}</p>
                      <p className="text-xs text-muted-foreground">{dealer.dist} away · ⭐ {dealer.rating}</p>
                    </div>
                  </div>
                  <span className="text-xs text-accent font-medium">View →</span>
                </div>
              ))}
            </div>

            <Link to="/dealers" className="mt-6 inline-block">
              <Button variant="outline" size="sm">
                View All Dealers
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden aspect-[4/3] bg-muted"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              alt="Dealer network coverage"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <p className="text-5xl font-heading font-bold mb-2">200+</p>
                <p className="text-sm text-primary-foreground/70">Authorized Dealers Worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DealerLocatorPreview;
