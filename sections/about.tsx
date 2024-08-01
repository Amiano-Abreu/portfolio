import EducationCard from "@/components/cards/education";
import ExperienceCard from "@/components/cards/experience";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import StackCard from "@/components/cards/stack";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";

export default function AboutSection() {
    return (
        <div className="pt-24 px-3 lg:px-8">
            <Heading
                number="02"
                title_1="About"
                title_2="Me"
            />
            <div className="space-y-4 py-8">
                <div className="space-y-4 grid md:grid-cols-2 md:gap-4 md:space-y-0">
                    <MeCard />
                    <ResumeCard />
                    {/* <Card
                        title="Background"
                    >
                        Background
                    </Card>
                    <Card
                        title="Gallery"
                        className="2xl:hidden"
                    >
                        Gallery
                    </Card> */}
                </div>
                <div className="space-y-4 grid md:grid-cols-2 md:gap-4 md:space-y-0">
                    <ExperienceCard />
                    <EducationCard />
                </div>
                <div className="space-y-4 grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                    {/* <div className="space-y-4">
                        <Card title="Instructor">Instructor</Card>
                        <Card title="Certifications">Certifications</Card>
                    </div> */}
                    <div className="space-y-4">
                        <StackCard />
                        {/* <ExperienceCard />
                        <EducationCard /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}