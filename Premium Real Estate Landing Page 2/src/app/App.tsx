import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrandIntro } from "./components/BrandIntro";
import { AIFeatures } from "./components/AIFeatures";
import { FeaturedProperties } from "./components/FeaturedProperties";
import { Recommendations } from "./components/Recommendations";
import { Neighborhoods } from "./components/Neighborhoods";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Spotlight } from "./components/Spotlight";
import { Testimonials } from "./components/Testimonials";
import { AITools } from "./components/AITools";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { MarketInsights } from "./components/MarketInsights";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <AIFeatures />
        <FeaturedProperties />
        <Recommendations />
        <Neighborhoods />
        <WhyChooseUs />
        <Spotlight />
        <Testimonials />
        <AITools />
        <HowItWorks />
        <FAQ />
        <Contact />
        <MarketInsights />
      </main>
      <Footer />
    </div>
  );
}
