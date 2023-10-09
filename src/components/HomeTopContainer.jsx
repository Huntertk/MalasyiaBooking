import React from 'react'
import '../styles/homeTopContainer.scss'
import image from '../assets/images/hometopimg.avif'
import {motion} from 'framer-motion'

const HomeTopContainer = () => {

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
          duration: 0.5
        }
    }

    const easingItemFromRight = {
        initial:{
            x:"100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        },
        transition:{
          duration: 0.5
        }
    }
  return (
    <section className='HomeTopContainer'>
        <motion.div {...easingItemFromLeft} className="content">
            <h1>Reserve a fantastic dining experience at atmosphere 360 restaurant</h1> 
        </motion.div>
        <motion.div {...easingItemFromRight} className="homeTopImgContainer">
            <img src={image} alt="" />
        </motion.div>
    </section>
  )
}

export default HomeTopContainer