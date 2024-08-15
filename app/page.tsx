"use client"

import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

import LandingSection from "@/sections/landing";
import Featured from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          <LandingSection />
          <Featured />
          <AboutSection />
          <ContactSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
