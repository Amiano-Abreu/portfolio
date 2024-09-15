import Header from '@/components/navigation/header/header'
import CustomButton from '@/components/ui/custom-button'
import LiveClock from '@/components/ui/live-clock'
import ScrollDown from '@/components/ui/scroll-down'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import React, { FC, MouseEventHandler } from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface LandingSectionProps {
  scrollToContact: () => void
};

const LandingSection:FC<LandingSectionProps> = ({ scrollToContact }) => {
  return (
    <div
        className="relative h-screen overflow-hidden p-8"
    >
        <Header scrollToContact={scrollToContact} />
        <div className="absolute bottom-36 left-10 z-20 md:hidden">
            <MagneticWrapper>
                <CustomButton 
                    scrollToContact={scrollToContact}
                    text="Let's talk"
                    icon={<FaArrowRight />}
                />
            </MagneticWrapper>
        </div>
        <div className="absolute right-10 bottom-10">
            <LiveClock 
                timeZone="Europe/London"
            />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-32 md:mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
            <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text[12rem] uppercase">
                <div>
                    <span>Code</span>
                </div>
                <div>
                    <span>Crafting</span>
                </div>
                <div className="relative">
                    <span>Brilliance</span>
                    <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal">
                        <span>Empowering innovation</span>
                        <br />
                        <span>through inspired design</span>
                        <br />
                        <span>where challenges spark creativity</span>
                        <br />
                        <span>and solutions redefine possibilities.</span>
                    </div>
                </div>
            </div>
            {/* <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10">
                <ScrollDown />
            </MagneticWrapper> */}
        </div>
    </div>
  )
}

export default LandingSection