import Heading from '@/components/heading/heading'
import React from 'react'
import { featuredData } from "@/data"; 
import FeaturedCard from '@/components/cards/featured/featured-cards';
import ExpandableFeatured from '@/components/expandables/expandable-featured';

const MainFeatured = featuredData[0]

function Featured() {
  return (
    <div
        className="pt-24 px-3 lg:px-8"
    >
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
        />

        <div className="mt-24">
          <ExpandableFeatured />
        </div>
    </div>
  )
}

export default Featured