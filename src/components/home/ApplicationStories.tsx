import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    title: "Australian Mining Operations",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3632e6?w=800&q=80",
    challenge: "Pumps handling abrasive slurry 24/7 in temperatures exceeding 45°C",
    solution: "CDP-850 series pumps with tungsten carbide impellers",
    results: "18 months continuous operation, zero unplanned downtime, 30% energy savings",
  },
  {
    title: "High-Rise Construction — Dubai",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    challenge: "Concrete pumping to 160 floors requiring 450 bar pressure reliability",
    solution: "Custom HPU-9000 hydraulic power units with redundant safety systems",
    results: "Completed on schedule, 99.7% uptime, exceeded safety certifications",
  },
  {
    title: "Automotive Manufacturing — Detroit",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    challenge: "Press shop valves cycling 200 times/minute with zero leakage tolerance",
    solution: "IBV-300 Fast-Acting Valves with 5 million cycle rating",
    results: "3 years operation, zero failures, 99.99% precision maintained",
  },
];

const ApplicationStories = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-2">
            Application Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            Proven in the Field
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-lg overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/40 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-primary-foreground mb-4">
                  {story.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-primary-foreground/60">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-primary-foreground/60">{story.solution}</p>
                  </div>
                  <div>
                    <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-1">Results</p>
                    <p className="text-primary-foreground/70 font-medium">{story.results}</p>
                  </div>
                </div>
                <button className="mt-5 inline-flex items-center gap-1.5 text-accent text-sm font-medium group-hover:gap-2.5 transition-all">
                  Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationStories;
