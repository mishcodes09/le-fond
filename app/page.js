import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SolutionBridge } from "@/components/sections/SolutionBridge";
import { Services } from "@/components/sections/Services";
import { Investment } from "@/components/sections/Investment";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { WhyLeFond } from "@/components/sections/WhyLeFond";
import { OutcomePreview } from "@/components/sections/OutcomePreview";
import { Stakes } from "@/components/sections/Stakes";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <SolutionBridge />
      <Services />
      <Investment />
      <CaseStudy />
      <WhyLeFond />
      <OutcomePreview />
      <Stakes />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
