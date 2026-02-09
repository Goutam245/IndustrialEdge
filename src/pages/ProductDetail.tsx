import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Download, Phone, MessageCircle, ArrowLeft, Zap, Gauge, Wrench, Thermometer, Settings, Box } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const productData = {
  "cdp-850": {
    name: "CDP-850 Heavy Duty Centrifugal Pump",
    model: "CDP-850-SS316-2900",
    rating: 5,
    reviews: 247,
    price: "$8,450.00",
    description: "The CDP-850 represents three decades of centrifugal pump engineering excellence. Designed for continuous-duty applications in the most demanding environments, this pump delivers exceptional performance in chemical processing, mining slurry transfer, and high-temperature industrial processes.",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    ],
    quickSpecs: [
      { icon: Zap, label: "Flow Rate", value: "850 LPM @ 2900 RPM" },
      { icon: Gauge, label: "Max Head", value: "85 meters (278 ft)" },
      { icon: Wrench, label: "Pressure", value: "250 bar (3625 PSI)" },
      { icon: Thermometer, label: "Temperature", value: "-20°C to +180°C" },
      { icon: Settings, label: "Motor", value: "37 kW (50 HP)" },
      { icon: Box, label: "Material", value: "316 Stainless Steel" },
    ],
    specs: [
      { category: "HYDRAULIC", rows: [["Flow Rate (Nominal)", "850 LPM (224 GPM)"], ["Flow Range", "400-1100 LPM"], ["Total Head (Max)", "85 meters (278 ft)"], ["Efficiency Peak", "82% @ 850 LPM"]] },
      { category: "MECHANICAL", rows: [["Pump Type", "End-suction centrifugal"], ["Impeller Design", "Enclosed, precision-balanced"], ["Seal Type", "Mechanical seal, SiC faces"], ["Bearings", "Deep-groove ball, L10 50,000 hrs"]] },
      { category: "MOTOR", rows: [["Power Rating", "37 kW (50 HP)"], ["Voltage", "380V / 50Hz"], ["Efficiency", "IE3 Premium"], ["Enclosure", "IP55 weatherproof"]] },
      { category: "PHYSICAL", rows: [["Dimensions", "865 × 420 × 520 mm"], ["Dry Weight", "285 kg (628 lbs)"], ["Inlet", "DN150 (6\" flange)"], ["Outlet", "DN125 (5\" flange)"]] },
    ],
    features: [
      { title: "Precision-Balanced Impeller", desc: "Dynamically balanced to ISO G2.5 standard. Eliminates vibration-related wear, extends bearing life by 300%." },
      { title: "Advanced Mechanical Seal", desc: "Silicon carbide vs. carbon face design. Temperature rated to 180°C. Average MTBF exceeds 15,000 operating hours." },
      { title: "Back Pull-Out Design", desc: "Service impeller and seal without disconnecting piping. Reduces maintenance downtime from 8 hours to 2 hours." },
      { title: "Premium Efficiency Motor", desc: "IE3 efficiency class saves 4,200 kWh annually vs. standard motors. ROI payback in motor premium: 18 months." },
      { title: "Corrosion-Resistant Construction", desc: "316 stainless steel throughout. Salt spray tested 2000+ hours. 20-year design life." },
      { title: "Vibration Monitoring Ready", desc: "Pre-drilled sensor mounting points. Compatible with accelerometer and proximity probes." },
    ],
  },
};

const tabs = ["Specifications", "Features", "Applications", "Support"];

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Specifications");
  const [activeImage, setActiveImage] = useState(0);

  const product = productData[id as keyof typeof productData] || productData["cdp-850"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-0">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-accent">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-accent font-medium mb-6 hover:gap-2.5 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>

          {/* Main product section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-4">
                <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${i === activeImage ? "border-accent" : "border-border"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">{product.name}</h1>
              <p className="font-mono text-sm text-muted-foreground mb-3">Model: {product.model}</p>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < product.rating ? "fill-accent text-accent" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.quickSpecs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/60">
                    <Icon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-heading font-bold text-foreground">{product.price}</span>
                <span className="text-sm text-accent font-medium">✓ In Stock</span>
              </div>

              <p className="text-xs text-muted-foreground mb-6">10-year comprehensive warranty included. Ships within 5 business days.</p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link to="/dealers">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto">Find Authorized Dealer</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4" /> Request Quote
                  </Button>
                </Link>
              </div>

              <div className="border-t pt-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Downloads</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Spec Sheet (PDF)", "CAD Models (.STEP)", "Install Manual (PDF)", "Certificates (ZIP)"].map((doc) => (
                    <button key={doc} className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/60 hover:bg-muted text-sm text-foreground transition-colors">
                      <Download className="w-3.5 h-3.5 text-accent" /> {doc}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="border-b mb-8">
            <div className="flex gap-0 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-16">
            {activeTab === "Specifications" && (
              <div className="space-y-8">
                {product.specs.map((section) => (
                  <div key={section.category}>
                    <h3 className="font-heading font-bold text-sm text-accent uppercase tracking-wider mb-3">{section.category}</h3>
                    <div className="border rounded-lg overflow-hidden">
                      {section.rows.map(([label, value], i) => (
                        <div key={label} className={`flex justify-between p-3.5 text-sm ${i % 2 === 0 ? "bg-muted/40" : "bg-card"}`}>
                          <span className="text-muted-foreground">{label}</span>
                          <span className="font-medium text-foreground font-mono text-xs">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "Features" && (
              <div className="grid md:grid-cols-2 gap-6">
                {product.features.map((f) => (
                  <div key={f.title} className="p-6 rounded-lg bg-muted/40 border">
                    <h4 className="font-heading font-semibold text-foreground mb-2">✓ {f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "Applications" && (
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Chemical Processing", desc: "Handles corrosive chemicals including sulfuric acid. 1,200+ units installed globally.", icon: "🏭" },
                  { title: "Mining & Minerals", desc: "Processes abrasive slurries with up to 2% solids. 850+ units deployed.", icon: "⛏️" },
                  { title: "Oil & Gas", desc: "Refinery applications including crude transfer. ATEX Zone 2 certified.", icon: "🛢️" },
                  { title: "Construction", desc: "Dewatering excavations, tunnels, and cofferdams. Rapid deployment.", icon: "🏗️" },
                  { title: "Marine & Offshore", desc: "Ballast and cargo transfer. IMO MARPOL compliant. Seawater rated.", icon: "🚢" },
                  { title: "HVAC & Building", desc: "Chilled water circulation. Quiet operation <68 dB. 2,100+ installations.", icon: "🏢" },
                ].map((app) => (
                  <div key={app.title} className="p-6 rounded-lg bg-muted/40 border">
                    <span className="text-2xl mb-3 block">{app.icon}</span>
                    <h4 className="font-heading font-semibold text-foreground mb-2">{app.title}</h4>
                    <p className="text-sm text-muted-foreground">{app.desc}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "Support" && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-4">Maintenance Schedule</h3>
                  <div className="border rounded-lg overflow-hidden">
                    {[
                      ["Daily", "Visual inspection for leaks", "2 min"],
                      ["Weekly", "Check bearing temperature", "5 min"],
                      ["Monthly", "Verify motor current draw", "10 min"],
                      ["Quarterly", "Lubricate motor bearings", "15 min"],
                      ["Annual", "Replace seal faces", "2 hrs"],
                      ["2 Years", "Bearing replacement", "4 hrs"],
                    ].map(([interval, task, time], i) => (
                      <div key={interval} className={`grid grid-cols-3 p-3.5 text-sm ${i % 2 === 0 ? "bg-muted/40" : "bg-card"}`}>
                        <span className="font-medium text-accent">{interval}</span>
                        <span className="text-foreground">{task}</span>
                        <span className="text-muted-foreground font-mono text-xs text-right">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="accent"><MessageCircle className="w-4 h-4" /> Chat with Engineer</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline"><Phone className="w-4 h-4" /> Schedule Service</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
