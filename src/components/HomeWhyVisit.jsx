import React from 'react'
import '../styles/homeWhyVisit.scss'
import {motion} from 'framer-motion'

const HomeWhyVisit = () => {
    const easingItemFromLeft = {
     initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        },
        transition:{
            delay:0.5
        }
  }
  return (
    <motion.section {...easingItemFromLeft} className='whyVisitMainComponents'>
        
        <h1>Why Visit Atmosphere 360?</h1>
        <div className="whyVisitCardContainer">
            <div className="listData">

                    <p>
                        <span>Exceptional Dining Experience : </span>
                        Delight in a one-of-a-kind culinary journey as the restaurant gracefully revolves, presenting a captivating 360-degree panorama of Kuala Lumpur's cityscape.
                    </p>
                    <p>
                        <span>Enchanting Atmosphere : </span>
                        Immerse yourself in an interior design reminiscent of a futuristic spaceship, crafting a mesmerizing and unforgettable ambiance akin to dining amidst the celestial stars.
                    </p>
                    <p>
                        <span>Gastronomic Delights : </span>
                        Indulge in a sumptuous Hi-Tea Buffet prepared by culinary experts, showcasing the best of Malay cuisine with premium ingredients.
                    </p>
                    <p>
                        <span>Culinary Excellence : </span>
                        Savor a delectable Hi-Tea Buffet meticulously crafted by skilled culinary artisans, showcasing the finest elements of Malay cuisine with premium, handpicked ingredients.
                    </p>
            </div>
        </div>
    </motion.section>
  )
}

export default HomeWhyVisit