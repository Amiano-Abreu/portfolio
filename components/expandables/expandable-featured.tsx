import { featuredData } from "@/data";
import FeaturedCard from "../cards/featured/featured-cards";
import { cn } from "@/lib/utils";
import { FC, MouseEventHandler, useState } from "react";

interface expandableProps {
  setOpenHandler: (link: string) => void
}

const ExpandableFeatured:FC<expandableProps> = ({setOpenHandler}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
        {
            featuredData.slice(1).map((featured, i) => {
                return (
                    <div 
                        key={i} 
                        className={cn(
                            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out",
                            i === hoveredIndex ? "lg:w-[65%]" : "lg:w-[50%]"
                        )}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        <FeaturedCard
                            setOpenHandler={setOpenHandler}
                            active={i === hoveredIndex}
                            link={featured.link}
                            title={featured.title}
                            tag={featured.tag}
                            video={featured.video}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ExpandableFeatured