import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Wrench, Video, Box, AlertCircle, Calendar, Download, Search, Play, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  { icon: FileText, title: "Technical Manuals", count: "850+", color: "bg-accent/10" },
  { icon: Wrench, title: "Installation Guides", count: "320+", color: "bg-accent/10" },
  { icon: Video, title: "Video Library", count: "200+", color: "bg-accent/10" },
  { icon: Box, title: "CAD Downloads", count: "1,200+", color: "bg-accent/10" },
  { icon: AlertCircle, title: "Troubleshooting", count: "500+", color: "bg-accent/10" },
  { icon: Calendar, title: "Maintenance Schedules", count: "400+", color: "bg-accent/10" },
];

const documents = [
  { title: "CDP-850 Technical Manual", type: "Product Manual", pages: 64, size: "12.8 MB", downloads: 4247, updated: "Jan 2025" },
  { title: "HPU-5000 Installation Guide", type: "Installation", pages: 32, size: "8.4 MB", downloads: 1823, updated: "Dec 2024" },
  { title: "Ball Valve Series Maintenance Manual", type: "Maintenance", pages: 48, size: "10.2 MB", downloads: 3156, updated: "Nov 2024" },
  { title: "PGB-7200 Gearbox Specification Sheet", type: "Spec Sheet", pages: 8, size: "2.1 MB", downloads: 2890, updated: "Jan 2025" },
  { title: "Hydraulic System Design Guide", type: "Design Guide", pages: 96, size: "18.6 MB", downloads: 5432, updated: "Oct 2024" },
  { title: "Pneumatic Control Valve Catalog", type: "Catalog", pages: 120, size: "24.3 MB", downloads: 3678, updated: "Sep 2024" },
];

const videos = [
  { title: "CDP-850 Complete Product Overview", duration: "5:47", views: "24,500", category: "Product Demo" },
  { title: "HPU-5000 Installation Step-by-Step", duration: "18:32", views: "18,200", category: "Installation" },
  { title: "Mechanical Seal Replacement Guide", duration: "12:15", views: "31,450", category: "Maintenance" },
  { title: "Mining Application Success Story", duration: "7:15", views: "12,800", category: "Customer Story" },
  { title: "Understanding Pump Performance Curves", duration: "11:04", views: "9,400", category: "Training" },
  { title: "Low Flow Troubleshooting Guide", duration: "8:47", views: "15,600", category: "Troubleshooting" },
];

const Resources = () => {
  const [activeSection, setActiveSection] = useState<"all" | "manuals" | "videos" | "cad">("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="relative h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)" }} />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">Technical Resources</h1>
            <p className="text-primary-foreground/60">Everything you need to specify, install, and maintain our products</p>
          </div>
        </section>

        {/* Stats */}
        <div className="bg-primary py-6">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { icon: FileText, value: "850+", label: "Documents" },
              { icon: Video, value: "200+", label: "Videos" },
              { icon: Box, value: "1,200+", label: "CAD Models" },
              { icon: AlertCircle, value: "500+", label: "Troubleshooting Guides" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-accent" />
                <span className="font-heading font-bold text-primary-foreground">{value}</span>
                <span className="text-xs text-primary-foreground/50">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            {/* Category Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {categories.map(({ icon: Icon, title, count }, i) => (
                <motion.button
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-industrial p-5 text-center group hover:border-accent/40 transition-colors"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-xs font-heading font-semibold text-foreground mb-0.5">{title}</p>
                  <p className="text-[10px] font-mono text-muted-foreground">{count}</p>
                </motion.button>
              ))}
            </div>

            {/* Search & Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search resources..."
                  className="w-full h-11 pl-10 pr-4 border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="flex gap-2">
                {([["all", "All"], ["manuals", "Manuals"], ["videos", "Videos"], ["cad", "CAD"]] as const).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === key ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Documents */}
            {(activeSection === "all" || activeSection === "manuals") && (
              <div className="mb-12">
                <h2 className="text-xl font-heading font-bold text-foreground mb-6">Technical Documents</h2>
                <div className="space-y-3">
                  {documents.map((doc, i) => (
                    <motion.div
                      key={doc.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="card-industrial p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">{doc.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {doc.type} · {doc.pages} pages · {doc.size} · Updated {doc.updated}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground font-mono">{doc.downloads.toLocaleString()} downloads</span>
                        <Button variant="accent" size="sm"><Download className="w-3 h-3" /> PDF</Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {(activeSection === "all" || activeSection === "videos") && (
              <div className="mb-12">
                <h2 className="text-xl font-heading font-bold text-foreground mb-6">Video Library</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {videos.map((video, i) => (
                    <motion.div
                      key={video.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="card-industrial overflow-hidden group cursor-pointer"
                    >
                      <div className="aspect-video bg-primary/10 flex items-center justify-center relative">
                        <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-accent-foreground ml-0.5" />
                        </div>
                        <span className="absolute bottom-2 right-2 text-xs font-mono bg-primary/80 text-primary-foreground px-2 py-0.5 rounded">
                          {video.duration}
                        </span>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-accent font-medium mb-1">{video.category}</p>
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{video.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{video.views} views</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* CAD */}
            {(activeSection === "all" || activeSection === "cad") && (
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-6">CAD Downloads</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { title: "CDP-850 Complete Assembly", formats: [".STEP (8.7 MB)", ".DWG (4.2 MB)", ".IGES (6.1 MB)"], downloads: 2847 },
                    { title: "IBV-300 Dimensional Drawing", formats: [".DWG (1.8 MB)", ".PDF (0.6 MB)"], downloads: 4521 },
                    { title: "PGB-7200 Exploded View", formats: [".STEP (24.3 MB)", ".IGES (18.7 MB)"], downloads: 1234 },
                  ].map((model, i) => (
                    <motion.div
                      key={model.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="card-industrial p-5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Box className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">{model.title}</h4>
                      <div className="space-y-2 mb-4">
                        {model.formats.map((f) => (
                          <button key={f} className="flex items-center gap-2 text-xs text-accent hover:text-accent/80 transition-colors">
                            <Download className="w-3 h-3" /> {f}
                          </button>
                        ))}
                      </div>
                      <p className="text-[10px] text-muted-foreground font-mono">{model.downloads.toLocaleString()} downloads</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
              <Link to="/contact">
                <Button variant="accent">Contact Technical Support <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
