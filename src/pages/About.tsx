import { motion } from "framer-motion";
import { Award, Users, Lightbulb, Leaf, MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline = [
  { year: "1985", title: "Founded", desc: "Started in a 5,000 sq ft workshop in Cleveland, Ohio. First product: HPU-100 hydraulic power unit." },
  { year: "1992", title: "ISO Certification", desc: "Achieved ISO 9001 certification. Expanded to 50,000 sq ft facility. Launched centrifugal pump line." },
  { year: "2005", title: "Innovation Center", desc: "Built dedicated 15,000 sq ft R&D facility. 20+ engineers. Launched IoT-enabled products." },
  { year: "2012", title: "Industry Awards", desc: "Received 'Manufacturer of the Year' from Industrial Equipment Association. Patent portfolio: 50+." },
  { year: "2018", title: "Carbon Neutral", desc: "Installed 2 MW solar array. Achieved carbon-neutral manufacturing. Zero waste to landfill certification." },
  { year: "2025", title: "Present Day", desc: "300+ employees. 250,000 sq ft manufacturing. $180M annual revenue. 5,000+ installations globally." },
];

const values = [
  { icon: Award, title: "Engineering Excellence", desc: "Every product undergoes 5,000+ hours of testing. Our engineering team holds 150+ patents." },
  { icon: Users, title: "Customer-First", desc: "24/7 technical support in 35 languages. 4-hour average response time. 98.7% customer satisfaction." },
  { icon: Lightbulb, title: "Continuous Innovation", desc: "15% of revenue invested in R&D annually. Partnership with 12 universities worldwide." },
  { icon: Leaf, title: "Sustainability", desc: "Carbon-neutral manufacturing since 2018. Products designed for 20+ year life. 95% recyclable materials." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)" }} />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">
              Engineering Excellence Since 1985
            </motion.h1>
            <p className="text-primary-foreground/60 text-lg">Four decades of innovation in heavy-duty industrial equipment</p>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</p>
            <p className="text-xl md:text-2xl text-foreground font-heading leading-relaxed">
              "To engineer industrial equipment that performs flawlessly in the harshest environments, backed by uncompromising customer support and continuous innovation."
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-14">Our Journey</h2>
            <div className="max-w-3xl mx-auto space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 pb-10 relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading font-bold text-xs shrink-0">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-14">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "300+", label: "Employees" },
                { value: "150+", label: "Patents" },
                { value: "$180M", label: "Annual Revenue" },
                { value: "5,000+", label: "Installations" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Connect with our engineering team to discuss your application requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"><Button variant="accent" size="lg">Contact Us</Button></Link>
              <Link to="/dealers"><Button variant="outline" size="lg">Find a Dealer</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
