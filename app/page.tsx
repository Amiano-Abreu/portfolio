"use client"

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

import { GoHomeFill } from "react-icons/go";

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
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
