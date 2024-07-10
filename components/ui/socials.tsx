import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "./button";

export default function Socials() {
    return (
        <div className="flex items-center flex-wrap gap-3">
            {socials.map((social, i) => {
                return (
                    <Button key={i} link={social.link} isIcon>
                        <span className="w-7 h-7 grid place-items-center">
                            {social.icon}
                        </span>
                    </Button>
                )
            })}
        </div>
    )
}


const socials = [
    {
        icon: <FaLinkedinIn className="w-5 h-5" />,
        link: "https://www.linkedin.com/in/amiano-abreu/",
        username: "Amiano Abreu"
    },
    {
        icon: <FaGithub className="w-5 h-5" />,
        link: "https://github.com/Amiano-Abreu",
        username: "Amiano Abreu"
    }
]