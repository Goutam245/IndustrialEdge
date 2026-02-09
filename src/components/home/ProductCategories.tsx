import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { name: "Hydraulic Systems", count: 47, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" },
  { name: "Heavy-Duty Pumps", count: 63, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Industrial Valves", count: 89, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" },
  { name: "Power Transmission", count: 38, image: "https://images.unsplash.com/photo-1537462715315-0e3e3a4ae717?w=600&q=80" },
  { name: "Pneumatic Components", count: 42, image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80" },
  { name: "Filtration Systems", count: 94, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" },
  { name: "Pressure Vessels", count: 31, image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80" },
  { name: "Control Systems", count: 56, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
];

const ProductCategories = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Product Categories
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Solutions for Every Application
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to="/products"
                className="group relative block aspect-[3/2] rounded-lg overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading font-bold text-primary-foreground text-sm">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-primary-foreground/60 font-mono">
                    {cat.count} products
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
