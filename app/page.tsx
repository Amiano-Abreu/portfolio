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

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="Ui Components">
              <div className="grid grid-cols-4">
                <Button>Basic Button</Button>
                <Button>
                  <GoHomeFill />
                  icon
                </Button>
                <Button isIcon>
                  <GoHomeFill />
                </Button>
                <Button link="https://www.google.com">
                  Google
                </Button>
              </div>
              <Input 
                type="text"
                placeholder="Name full"
                icon={<GoHomeFill />}
              />
              <TextArea 
                placeholder="Coments"
                icon={<GoHomeFill />}
              />
              <Profile />
              <MagneticWrapper className="w-[300px]">
                <CustomButton 
                  text="Contact us"
                  icon={<FaArrowRight />}
                />
              </MagneticWrapper>
              <MagneticWrapper>
                <ScrollDown />
              </MagneticWrapper>

              <LiveClock timeZone="America/Los_Angeles" />
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
