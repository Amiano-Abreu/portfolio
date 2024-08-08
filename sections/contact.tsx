import ContactCard from "@/components/cards/contact";
import Heading from "@/components/heading/heading";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import SelectInput from "@/components/ui/select-input";
import TextArea from "@/components/ui/text-area";
import { useState } from "react";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

export default function ContactSection() {

    const [ services, setServices ] = useState<string[]>([])

    const [ budget, setbudget ] = useState<string[]>([])

    console.log({services})
    console.log({budget})

    return (
        <div className="pt-24 px-3 lg:px-8">
            <Heading 
                number="03"
                title_1="Contact"
                title_2="Me"
            />

            <Card>
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                    
                    <div className="flex flex-col gap-8">
                        <ContactCard 
                            title="Call us directly at"
                            icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
                            text="+44 7901148991"
                            btnText="Call us"
                        />
                        <ContactCard 
                            title="Chat with us"
                            icon={<MdEmail className="fill-[#333] text-lg" />}
                            text="amianoabreu@gmail.com"
                            btnText="Email us"
                        />
                    </div>

                    <div className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
                        <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
                            <Input 
                                type="text"
                                placeholder="Full Name"
                                icon={<FaUser />}
                            />
                            <Input 
                                type="email"
                                placeholder="Email Address"
                                icon={<MdEmail />}
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4 gap-8">
                            <Input 
                                type="email"
                                placeholder="Subject"
                                icon={<MdSubject />}
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="space-y-6">
                                <h1 className="font-bold text-lg">
                                    What services are you in need for ?
                                </h1>
                                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                                    {
                                        servicesOptions.map(( service ) => {
                                            return (
                                                <SelectInput
                                                    key={service.id}
                                                    type="checkbox"
                                                    id={service.id}
                                                    text={service.text}
                                                    selectedOptions={services}
                                                    setSelectedOptions={setServices}
                                                    allowMultiple
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="space-y-6">
                                <h1 className="font-bold text-lg">
                                    What is your budget ?
                                </h1>
                                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                                {
                                        budgetOptions.map(( budgetObj ) => {
                                            return (
                                                <SelectInput
                                                    key={budgetObj.id}
                                                    type="radio"
                                                    id={budgetObj.id}
                                                    text={budgetObj.text}
                                                    selectedOptions={budget}
                                                    setSelectedOptions={setbudget}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <TextArea placeholder="Tell us about your project" icon={<FaProjectDiagram />} />
                        <div className="w-full flex justify-end">
                            <Button className="!w-44 !py-3 !text-xl">
                                Send <SiMinutemailer />
                            </Button>
                        </div>


                    </div>


                </div>
            </Card>
        </div>
    )
}

const servicesOptions = [
    {
        id: "Web Development",
        text: "Web Development"
    },
    {
        id: "Frontend Development",
        text: "Frontend Development"
    },
    {
        id: "Backend Development",
        text: "Backend Development"
    },
    {
        id: "Full Stack Development",
        text: "Full Stack Development"
    },
]

const budgetOptions = [
    {
        id: "less than £500",
        text: "< £500"
    },
    {
        id: "between £500 and £2000",
        text: "£500 - £2000"
    },
    {
        id: "between £2000 and £5000",
        text: "£2000 - £5000"
    },
    {
        id: "more than £5000",
        text: "> £5000"
    },
]