import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Ticket, Clock, Globe, AlertTriangle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const contactMethods = [
  { icon: Phone, title: "Phone Support", desc: "24/7 Technical Support", detail: "+1-800-INDUSTRY (463-8787)", sub: "Average wait: <2 minutes" },
  { icon: MessageCircle, title: "Live Chat", desc: "Instant Messaging", detail: "Connect with technical expert", sub: "Response: <30 seconds" },
  { icon: Mail, title: "Email Support", desc: "Response within 4 hours", detail: "support@industrialedge.com", sub: "Sales: sales@industrialedge.com" },
  { icon: Ticket, title: "Support Ticket", desc: "Track Your Request", detail: "Submit detailed inquiry", sub: "Priority routing available" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80)" }} />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">We're Here to Help</h1>
            <p className="text-primary-foreground/60">Expert support when you need it most</p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {contactMethods.map(({ icon: Icon, title, desc, detail, sub }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-industrial p-6 text-center group hover:border-accent/40 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-xs text-accent font-medium mb-3">{desc}</p>
                  <p className="text-sm text-foreground font-medium mb-1">{detail}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Emergency */}
            <div className="bg-primary rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-primary-foreground text-lg">Emergency Breakdown Support</h3>
                  <p className="text-primary-foreground/60 text-sm">24/7 Emergency Hotline for critical equipment failures</p>
                </div>
              </div>
              <a href="tel:+18009111234">
                <Button variant="accent" size="lg" className="whitespace-nowrap">
                  <Phone className="w-4 h-4" /> 1-800-911-PUMP
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} className="w-full h-11 px-4 border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                      <input name="company" value={formData.company} onChange={handleChange} className="w-full h-11 px-4 border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full h-11 px-4 border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full h-11 px-4 border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">I need help with</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full h-11 px-4 border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Select an option...</option>
                      <option>Product Technical Support</option>
                      <option>Sales Inquiry</option>
                      <option>Parts & Service</option>
                      <option>Dealer Information</option>
                      <option>Custom Engineering</option>
                      <option>Warranty Claim</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                  </div>
                  <Button variant="accent" size="lg" type="submit">Submit Request</Button>
                  <p className="text-xs text-muted-foreground">We typically respond within 4 hours during business hours.</p>
                </form>
              </div>

              <div className="lg:col-span-2">
                <h3 className="font-heading font-bold text-foreground mb-6">Offices</h3>
                <div className="space-y-6">
                  {[
                    { name: "North America HQ", address: "4500 Industrial Parkway\nCleveland, OH 44135 USA", phone: "+1-216-555-0100", hours: "Mon-Fri 7AM-6PM EST" },
                    { name: "European Office", address: "Industrieweg 125\n3044 AS Rotterdam, Netherlands", phone: "+31-10-555-0200", hours: "Mon-Fri 8AM-5PM CET" },
                    { name: "Asia-Pacific Office", address: "21 Jurong Port Road\nSingapore 619101", phone: "+65-6555-0300", hours: "Mon-Fri 9AM-6PM SGT" },
                  ].map((office) => (
                    <div key={office.name} className="p-5 rounded-lg bg-muted/60 border">
                      <h4 className="font-heading font-semibold text-foreground text-sm mb-2">{office.name}</h4>
                      <p className="text-xs text-muted-foreground whitespace-pre-line mb-2">{office.address}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5 mb-1"><Phone className="w-3 h-3 text-accent" />{office.phone}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5"><Clock className="w-3 h-3 text-accent" />{office.hours}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-lg bg-primary text-primary-foreground">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-accent" />
                    <h4 className="font-heading font-semibold text-sm">Global Coverage</h4>
                  </div>
                  <p className="text-xs text-primary-foreground/60 leading-relaxed">
                    200+ authorized dealers and service centers across 45 countries. 24/7 emergency support in 35 languages.
                  </p>
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

export default Contact;
