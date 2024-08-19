"use client"

import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

import LandingSection from "@/sections/landing";
import Featured from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          <LandingSection scrollToContact={scrollToContact} />
          <Featured />
          <AboutSection />
          <ContactSection ref={contactRef} />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
