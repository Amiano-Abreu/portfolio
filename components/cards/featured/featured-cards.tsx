import { FC, MouseEventHandler, ReactNode } from "react";
import Header from "./header";
import Video from "./video";

interface FeaturedCardProps {
    link: string;
    title: string;
    tag: string;
    video: string;
    active: boolean;
    setOpenHandler: (link: string) => void;
}


const FeaturedCard: FC<FeaturedCardProps> = ({ link, title, active, tag, video, setOpenHandler }) => {
    return (
        <div className="link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
            
            <Header title={title} tag={tag} />
            
            <div 
                onClick={() => setOpenHandler(link)}
                className="relative flex float-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl"
            >
                <Video video={video} active={active} />
            </div>
        </div>
    )
}

export default FeaturedCard