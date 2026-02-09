import { motion } from "framer-motion";
import { Award, Shield, Globe, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Engineering Excellence",
    desc: "150+ patents. Every product undergoes 5,000+ hour durability testing before market release. Our in-house team sets the standard.",
    stat: "150+ Patents",
  },
  {
    icon: Shield,
    title: "Proven Durability",
    desc: "Average product lifespan exceeds 20 years in extreme environments. 98.5% of units sold in 1995 are still operational today.",
    stat: "20+ Year Lifespan",
  },
  {
    icon: Globe,
    title: "Global Support",
    desc: "24/7 technical support in 35 languages. 200+ authorized service centers worldwide. Average response time: 4 hours.",
    stat: "200+ Service Centers",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "15% revenue invested in R&D annually. Smart IoT-enabled products with predictive maintenance. Industry-first 10-year warranty.",
    stat: "15% R&D Investment",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Why IndustrialEdge
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ icon: Icon, title, desc, stat }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
              <span className="inline-block text-xs font-mono bg-primary text-primary-foreground px-3 py-1.5 rounded">
                {stat}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
