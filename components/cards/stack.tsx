import { stackData } from "@/data/stack";
import Card from "../ui/card";
import { Tooltip } from "../ui/tooltip";

export default function StackCard() {
  return (
    <Card title="My Tech Stack">
        <div className="flex flex-col gap-6 mt-2">
            {
                stackData.map((tech, i) => {
                    return (
                        <div 
                            className="grid items-center gap-[90px]"
                            key={i}
                            style={{
                                gridTemplateColumns: "50px 1fr"
                            }}    
                        >
                            <div className="h-auto flex-none break-words whitespace-pre">
                                <p className="text-secondary-foreground">
                                    {tech.title}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                {tech.stack.map((t, i) => {
                                    return (
                                        <Tooltip
                                            key={t.id}
                                            title={t.title}
                                            image={t.image}
                                            bgColor={t.bgColor}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Card>
  )
}
