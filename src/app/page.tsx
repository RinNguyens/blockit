import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/animated-hero";
import { BentoGridThird } from "@/components/blocks/bento-gird-thirt";
import { FeaturesSection } from "@/components/blocks/feature-section";
import { FeaturesSectionHover } from "@/components/blocks/feature-section-hover";
import { AnimatedTestimonialsPeople } from "@/components/blocks/AnimatedTestimonials";
import SendMessage from "@/components/blocks/send-message";
export default function Home() {
  return (
    <div className="grid  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <BentoGridThird />
        <FeaturesSection />
        <FeaturesSectionHover />
        <AnimatedTestimonialsPeople />
        <SendMessage />
      </main>
    </div>
  );
}
