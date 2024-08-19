import CustomButton from '@/components/ui/custom-button'
import Profile from '@/components/ui/profile'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import React, { FC, MouseEventHandler } from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface HeaderProps {
    scrollToContact: () => void
  };

const Header:FC<HeaderProps> = ({scrollToContact}) => {
  return (
    <div
        className="w-full flex items-center justify-center md:justify-between"
    >
        <Profile />
        <div className="hidden md:inline">
            <MagneticWrapper>
                <CustomButton
                    scrollToContact={scrollToContact}
                    text="Let's talk"
                    icon={<FaArrowRight />}
                />
            </MagneticWrapper>
        </div>
    </div>
  )
}

export default Header