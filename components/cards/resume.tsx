import Image from "next/image"
import Card from "../ui/card"

import signature from "@/public/assets/images/me/signature.png"
import Button from "../ui/button"
import { FaDownload } from "react-icons/fa"
import Socials from "../ui/socials"

function ResumeCard() {
  return (
    <Card
        className="md:h-full 2xl:h-fit"
    >
        <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
            Passionate Software Developer with a strong foundation in building responsive and user-friendly web applications. Proficient in React.js/Next.js and Vue.js, I specialize in creating intuitive and visually appealing user interfaces that enhance user experiences. My expertise extends beyond the frontend, as I also possess a solid understanding of backend technologies such as Node.js and NoSQL as well as SQL databases, allowing me to develop end-to-end solutions. Let&apos;s connect and discuss how we can work together to bring your web applications to life.
        </p>

        <div>
            <Image 
                src={signature}
                alt="Amiano Abreu"
                className="mb-10 mx-auto"
            />
        </div>

        <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
            <Socials />
            
            <Button link="/assets/cv/Amiano Abreu.pdf">
                <FaDownload />
                CV
            </Button>
        </div>
    </Card>
  )
}

export default ResumeCard