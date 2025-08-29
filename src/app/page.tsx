import Header from "../components/Header";
import HeroSection from "../components/Section1";
import ResearchPreviewBanner from "../components/Section2";
import JoinPreviewSection from "../components/Section3";
import ImageShowcase from "../components/Section4";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ResearchPreviewBanner />
        <JoinPreviewSection />
        <ImageShowcase />
      </div>
    </div>
  );
}
