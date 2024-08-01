import Card from "../ui/card"
import { Timeline, TimelineItem } from "../ui/timeline"

function ExperienceCard() {
  return (
    <Card title="My Experience" className="h-full">
        <Timeline>
          {
            experienceData.map((ex, i) => {
              return (
                <TimelineItem 
                  key={i}
                  date={ex.date}
                  title={ex.title}
                  subTitle={ex.subTitle}
                />
              )
            })
          }
        </Timeline>
    </Card>
  )
}

export default ExperienceCard

const experienceData = [
  {
    date: "2023 - 2023",
    title: "Software Engineer",
    subTitle: "Freethink",
  },
  {
    date: "2021 - 2022",
    title: "Web Developer",
    subTitle: "Artbox Global",
  },
]