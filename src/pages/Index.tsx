import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ApplicationStories from "@/components/home/ApplicationStories";
import ResourcesHub from "@/components/home/ResourcesHub";
import DealerLocatorPreview from "@/components/home/DealerLocatorPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <ProductCategories />
        <WhyChooseUs />
        <ApplicationStories />
        <DealerLocatorPreview />
        <ResourcesHub />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
