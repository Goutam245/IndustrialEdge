import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Gauge, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "30+", label: "Years Excellence" },
  { icon: Gauge, value: "5,000+", label: "Active Installations" },
  { icon: Shield, value: "99.8%", label: "Uptime Rating" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
            Engineered for Power.
            <br />
            <span className="text-gradient">Built for Precision.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Discover industrial-grade solutions designed for the toughest jobs on
            earth. Trusted by industry leaders across six continents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="accent" size="lg" className="text-base px-8">
                Explore Products
              </Button>
            </Link>
            <Link to="/dealers">
              <Button variant="hero-outline" size="lg" className="text-base px-8">
                Find a Dealer
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-2xl font-heading font-bold text-primary-foreground">
                  {value}
                </p>
                <p className="text-xs text-primary-foreground/50 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
