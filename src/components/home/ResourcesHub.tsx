import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Wrench, Video, Box, AlertCircle, Calendar, ArrowRight } from "lucide-react";

const resources = [
  { icon: FileText, title: "Technical Manuals", desc: "850+ product manuals available for instant download", count: "850+" },
  { icon: Wrench, title: "Installation Guides", desc: "Step-by-step guides with photos and safety protocols", count: "320+" },
  { icon: Video, title: "Video Library", desc: "200+ instructional videos and product demonstrations", count: "200+" },
  { icon: Box, title: "CAD Downloads", desc: ".STEP, .DWG, .IGES formats for all products", count: "1,200+" },
  { icon: AlertCircle, title: "Troubleshooting", desc: "Interactive problem-solving tools and FAQ database", count: "500+" },
  { icon: Calendar, title: "Maintenance Schedules", desc: "Preventive maintenance calendars and service reminders", count: "400+" },
];

const ResourcesHub = () => {
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
            Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Everything You Need
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map(({ icon: Icon, title, desc, count }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to="/resources"
                className="group card-industrial p-6 flex gap-4 items-start h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-accent transition-colors">
                      {title}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                      {count}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-accent text-xs font-medium">
                    Browse <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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

export default ResourcesHub;
