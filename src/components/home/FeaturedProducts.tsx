import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Hydraulic Power Unit HPU-5000",
    specs: ["75 kW Motor", "500L Tank", "350 bar"],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
  },
  {
    name: "Centrifugal Pump CDP-850",
    specs: ["850 LPM", "85m Head", "250 bar"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    name: "Industrial Ball Valve IBV-300",
    specs: ["DN150", "PN64", "5M+ Cycles"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    name: "Planetary Gearbox PGB-7200",
    specs: ["7200 Nm", "97% Efficiency", "100:1 Ratio"],
    image: "https://images.unsplash.com/photo-1537462715315-0e3e3a4ae717?w=600&q=80",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Featured Products
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Built to Outperform
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/products"
                className="group block card-industrial overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
