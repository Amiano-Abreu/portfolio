import Card from "../ui/card"
import { Timeline, TimelineItem } from "../ui/timeline"

function EducationCard() {
  return (
    <Card title="My Education">
        <Timeline>
          {
            educationData.map((ex, i) => {
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

export default EducationCard

const educationData = [
  {
    date: "2017 - 2021",
    title: "Bachelors in Computer Engineering",
    subTitle: "Goa Engineering College",
  },
  {
    date: "2015 - 2017",
    title: "HSSC, Science",
    subTitle: "St. Xavier's HSS",
  },
  {
    date: "2014 - 2015",
    title: "SSC",
    subTitle: "St. Britto High School",
  }
]