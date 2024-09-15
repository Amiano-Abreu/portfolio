"use client"

import LandingSection from "@/sections/landing";
import Featured from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave-wrapper"),
  { ssr: false }
);

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isWebGLSupported, setWebGLSupported] = useState(false);

  useEffect(() => {
    setWebGLSupported(isWebGLExtensionAvailable());
  }, []);

  return (
    isWebGLSupported ? 
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="3"
        perturbance="3"
        resolution="2048"
      >
        {() => (
          <div className="pb-8">
            {/* {isWebGLSupported.toString()} */}
            <LandingSection scrollToContact={scrollToContact} />
            <Featured />
            <AboutSection />
            <ContactSection ref={contactRef} />
          </div>
        )}
      </WaterWaveWrapper>

      :

      <div className="pb-8">
        <LandingSection scrollToContact={scrollToContact} />
        <Featured />
        <AboutSection />
        <ContactSection ref={contactRef} />
      </div>
  );
}

const isWebGLExtensionAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl && !!gl.getExtension('OES_texture_float');
  } catch (e) {
    return false;
  }
};