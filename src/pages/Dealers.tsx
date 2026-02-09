import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, Search, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const dealers = [
  { name: "Industrial Solutions NYC", address: "425 West 33rd Street, New York, NY 10001", phone: "(212) 555-0142", hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM", distance: "0.8 mi", rating: 4.8, reviews: 124, services: ["Sales", "Service", "Parts", "Rentals", "24/7 Emergency"] },
  { name: "Metro Hydraulics Supply", address: "1840 Webster Avenue, Bronx, NY 10457", phone: "(718) 555-0293", hours: "Mon-Sat: 6AM-6PM", distance: "4.2 mi", rating: 4.6, reviews: 87, services: ["Sales", "Service", "Parts", "Training"] },
  { name: "Tri-State Equipment Corp", address: "350 Hudson Street, Jersey City, NJ 07302", phone: "(201) 555-0456", hours: "Mon-Fri: 7AM-5PM", distance: "6.7 mi", rating: 4.9, reviews: 201, services: ["Sales", "Service", "Parts", "Custom Engineering"] },
  { name: "Atlantic Industrial Group", address: "290 Harbor Boulevard, Bridgeport, CT 06604", phone: "(203) 555-0178", hours: "Mon-Fri: 7:30AM-5:30PM", distance: "52 mi", rating: 4.7, reviews: 93, services: ["Sales", "Service", "Parts"] },
  { name: "Hudson Valley Hydraulics", address: "12 Commerce Drive, Poughkeepsie, NY 12601", phone: "(845) 555-0321", hours: "Mon-Fri: 8AM-5PM", distance: "78 mi", rating: 4.5, reviews: 64, services: ["Sales", "Service", "Training"] },
];

const Dealers = () => {
  const [searchVal, setSearchVal] = useState("10001");
  const [radius, setRadius] = useState("50");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="relative h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)" }} />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">Find Your Nearest Dealer</h1>
            <p className="text-primary-foreground/60">Over 200 certified dealers and service centers worldwide</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Search Panel */}
              <div>
                <div className="card-industrial p-6 sticky top-20">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Search</h3>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      placeholder="ZIP code or city"
                      className="w-full h-11 pl-10 pr-4 border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Radius</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {["25", "50", "100", "250"].map((r) => (
                      <button
                        key={r}
                        onClick={() => setRadius(r)}
                        className={`py-2 rounded text-sm font-medium transition-colors ${radius === r ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}
                      >
                        {r} mi
                      </button>
                    ))}
                  </div>

                  <Button variant="accent" className="w-full">Search Dealers</Button>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Showing {dealers.length} dealers within {radius} miles
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-2 space-y-4">
                {dealers.map((dealer, i) => (
                  <motion.div
                    key={dealer.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="card-industrial p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-heading font-semibold text-foreground">{dealer.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                            <span className="text-sm font-medium text-foreground">{dealer.rating}</span>
                            <span className="text-xs text-muted-foreground">({dealer.reviews})</span>
                          </div>
                        </div>
                        <div className="space-y-1.5 text-sm text-muted-foreground mb-3">
                          <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-accent" />{dealer.address}</p>
                          <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-accent" />{dealer.phone}</p>
                          <p className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-accent" />{dealer.hours}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {dealer.services.map((s) => (
                            <span key={s} className="text-[10px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-sm font-mono text-muted-foreground">{dealer.distance}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm"><ExternalLink className="w-3 h-3" /> Directions</Button>
                          <Button variant="accent" size="sm"><Phone className="w-3 h-3" /> Call</Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Global coverage */}
                <div className="mt-8 rounded-xl bg-primary p-8 text-center">
                  <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">Global Dealer Network</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {[
                      { region: "North America", count: 87 },
                      { region: "Europe", count: 54 },
                      { region: "Asia-Pacific", count: 31 },
                      { region: "South America", count: 23 },
                      { region: "Middle East & Africa", count: 18 },
                    ].map((r) => (
                      <div key={r.region}>
                        <p className="text-2xl font-heading font-bold text-accent">{r.count}</p>
                        <p className="text-xs text-primary-foreground/60">{r.region}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dealers;
