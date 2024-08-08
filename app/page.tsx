"use client"

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Profile from "@/components/ui/profile"
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

import { GoHomeFill } from "react-icons/go";
import CustomButton from "@/components/ui/custom-button";
import { FaArrowRight } from "react-icons/fa";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";
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
          {/* <LandingSection /> */}
          {/* <AboutSection /> */}
          <ContactSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
