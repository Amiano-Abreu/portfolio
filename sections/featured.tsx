import Heading from '@/components/heading/heading'
import React, { useState } from 'react'
import { featuredData } from "@/data"; 
import FeaturedCard from '@/components/cards/featured/featured-cards';
import ExpandableFeatured from '@/components/expandables/expandable-featured';
import Modal from '@/components/ui/modal';;
import { FaTriangleExclamation } from 'react-icons/fa6';

const MainFeatured = featuredData[0]

function Featured() {
  const [open, setOpen] = useState<boolean>(false)
  const [link, setLink] = useState<string>("")

  const setOpenHandler= (link: string) => {
    setLink(link)
    setOpen(true)
  }

  return (
    <div
        className="pt-24 px-3 lg:px-8"
    >
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-56">
            <FaTriangleExclamation size={56} className="mx-auto text-yellow-500" />
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">Continue to Website</h3>
              <p className="text-sm text-gray-500">
                You are about to visit the live website.{ link?.includes("https://hyper-bikes.onrender.com/") && <span style={{ fontWeight: "700", color: "black"}}> This may take about 1 minute 30 secs aprox to load as I have used the free tier on render for deployment. </span>} Would you like to continue ?
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                className="w-full rounded-md"
                style={{
                  backgroundColor: "lightblue"
                }}
                onClick={() => {
                  window.open(link, "_blank")
                  setOpen(false)
                }}
              >Continue</button>
              <button
                className="w-full rounded-md"
                style={{
                  backgroundColor: "rgb(239 68 68)"
                }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>

        <Heading 
            number="01"
            title_1="Featured"
            title_2="Work"
        />

        <FeaturedCard 
          active
          title={MainFeatured.title}
          tag={MainFeatured.tag}
          video={MainFeatured.video}
          link={MainFeatured.link}
          setOpenHandler={setOpenHandler}
        />

        <div className="mt-24">
          <ExpandableFeatured setOpenHandler={setOpenHandler} />
        </div>
    </div>
  )
}

export default Featured