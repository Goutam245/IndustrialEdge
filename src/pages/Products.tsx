import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight, SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const allProducts = [
  { id: "cdp-850", name: "CDP-850 Heavy Duty Centrifugal Pump", model: "CDP-850-SS316", specs: ["850 LPM", "85m Head", "250 bar"], price: "$8,450", rating: 5, reviews: 247, badges: ["Best Seller", "In Stock"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80", category: "Pumps" },
  { id: "hpu-5000", name: "HPU-5000 Hydraulic Power Unit", model: "HPU-5000-380V", specs: ["75 kW", "500L Tank", "350 bar"], price: "$24,750", rating: 4, reviews: 189, badges: ["New Arrival"], image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=500&q=80", category: "Hydraulic" },
  { id: "ibv-300", name: "IBV-300 Industrial Ball Valve", model: "IBV-300-DN150", specs: ["DN150", "PN64", "5M+ Cycles"], price: "$2,890", rating: 5, reviews: 412, badges: ["Top Rated"], image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80", category: "Valves" },
  { id: "pgb-7200", name: "PGB-7200 Planetary Gearbox", model: "PGB-7200-R3", specs: ["7200 Nm", "97% Eff.", "100:1"], price: "$12,300", rating: 5, reviews: 156, badges: ["Premium"], image: "https://images.unsplash.com/photo-1537462715315-0e3e3a4ae717?w=500&q=80", category: "Gearboxes" },
  { id: "cdp-1200", name: "CDP-1200 High Cap Centrifugal Pump", model: "CDP-1200-SS316", specs: ["1200 LPM", "95m Head", "300 bar"], price: "$11,250", rating: 5, reviews: 98, badges: ["In Stock"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80", category: "Pumps" },
  { id: "pfh-850", name: "PFH-850 High-Efficiency Filter", model: "PFH-850-SS", specs: ["850 LPM", "10 micron", "250 bar"], price: "$1,650", rating: 4, reviews: 203, badges: ["In Stock"], image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80", category: "Filters" },
  { id: "hca-400", name: "HCA-400 Hydraulic Cylinder Assembly", model: "HCA-400-200", specs: ["400mm Bore", "200mm Stroke", "350 bar"], price: "$6,780", rating: 5, reviews: 134, badges: ["Best Seller"], image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&q=80", category: "Hydraulic" },
  { id: "pnv-200", name: "PNV-200 Pneumatic Control Valve", model: "PNV-200-DN80", specs: ["DN80", "16 bar", "1M Cycles"], price: "$1,420", rating: 4, reviews: 87, badges: ["In Stock"], image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&q=80", category: "Valves" },
];

const categories = ["All", "Pumps", "Hydraulic", "Valves", "Gearboxes", "Filters"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = activeCategory === "All" ? allProducts : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="relative h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80)" }} />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">Product Catalog</h1>
            <p className="text-primary-foreground/60 text-sm">Home &gt; Products</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{filtered.length} products</span>
                <button
                  className="lg:hidden flex items-center gap-1.5 text-sm text-foreground"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
              </div>
            </div>

            <div className="flex gap-8">
              {/* Sidebar filters */}
              <aside className={`${showFilters ? "fixed inset-0 z-50 bg-card p-6 overflow-auto" : "hidden"} lg:block lg:static lg:w-64 shrink-0`}>
                {showFilters && (
                  <button className="lg:hidden absolute top-4 right-4" onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                )}
                <h3 className="font-heading font-semibold text-sm text-foreground mb-4">Filters</h3>

                {[
                  { label: "Pressure Rating", options: ["Up to 100 bar", "101-250 bar", "251-400 bar", "400+ bar"] },
                  { label: "Material", options: ["Stainless Steel 316", "Carbon Steel", "Ductile Iron", "Bronze"] },
                  { label: "Application", options: ["Mining", "Construction", "Manufacturing", "Marine", "Oil & Gas"] },
                ].map((filter) => (
                  <div key={filter.label} className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{filter.label}</p>
                    <div className="space-y-2">
                      {filter.options.map((opt) => (
                        <label key={opt} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input type="checkbox" className="rounded border-border text-accent focus:ring-accent" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <Button variant="accent-outline" size="sm" className="w-full">
                  Apply Filters
                </Button>
              </aside>

              {/* Product Grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link to={`/products/${product.id}`} className="group card-industrial overflow-hidden flex flex-col h-full">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute top-3 left-3 flex gap-1.5">
                          {product.badges.map((badge) => (
                            <span key={badge} className="text-[10px] font-semibold bg-accent text-accent-foreground px-2 py-0.5 rounded">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-xs text-muted-foreground font-mono mb-1">{product.model}</p>
                        <h3 className="font-heading font-semibold text-sm text-foreground mb-2 group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className={`w-3.5 h-3.5 ${j < product.rating ? "fill-accent text-accent" : "text-border"}`} />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {product.specs.map((spec) => (
                            <span key={spec} className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-0.5 rounded">{spec}</span>
                          ))}
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="font-heading font-bold text-foreground">{product.price}</span>
                          <span className="inline-flex items-center gap-1 text-accent text-xs font-medium">
                            Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
