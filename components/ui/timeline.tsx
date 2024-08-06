import { FC, ReactNode } from "react";

interface TimelineProps {
    children: ReactNode
}

export const Timeline: FC<TimelineProps> = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-6">{children}</div>
    )
}

// Timeline Item

interface TimelineItemProps {
    date: string;
    title: string;
    subTitle: string;
    tag?: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({
    date,
    title,
    subTitle,
    tag
}) => {
    return (
        <div className="flex flex-wrap gap-12 min-h justify-start relative max-sm:flex-col max-sm:gap-1 ">
            <div className="h-auto flex-none break-words whitespace-pre">
                <p className="text-secondary-foreground">{date}</p>
            </div>

            <div className="flex gap-x-2">
                <div className="flex flex-col gap-0 5">

                    <div className="text-primary-foreground break-words whitespace-pre">
                        <p className="leading-6 font-medium text-sm">
                            {title}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 w-min">
                        <Body subtitle={subTitle} tag={tag} />
                    </div>
                </div>
            </div>

        </div>
    )
}

// Timeline Item Body

interface BodyProps {
    subtitle: string;
    tag?: string;
}

const Body: FC<BodyProps> = ({ subtitle, tag }) => {
    return (
        <div className="text-secondary-foreground flex items center">
            <p className="text-sm font-normal leading-6 mt-1" style={{width: "max-content"}}>
                {subtitle}
            </p>
            {
                tag ? (
                    <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
                        <p className="text-[10px] font-normal text-secondary-foreground">
                            {tag}
                        </p>
                    </div>
                ) : null
            }
        </div>
    )
}