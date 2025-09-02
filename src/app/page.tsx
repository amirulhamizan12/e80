import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PreviewBanner from "../components/PreviewBanner";
import SubHero from "../components/SubHero";
import FAQSection from "../components/FAQSection";
import ShapeNextSection from "@/components/ShapeNextSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <PreviewBanner />
        <SubHero />

        <FAQSection />
        <ShapeNextSection />

      </div>
    </div>
  );
}
