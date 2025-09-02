import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PreviewBanner from "../components/PreviewBanner";
import SuperwizardSection from "../components/SuperwizardSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <PreviewBanner />
        <SuperwizardSection />
        <FAQSection />
      </div>
    </div>
  );
}
