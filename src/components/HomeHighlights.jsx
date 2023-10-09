import React from 'react'
import '../styles/homeHighlights.scss';
import { cardHighLightsDetails } from '../data';
import { motion } from 'framer-motion';
const Cards = () => {
    const popUpAnimation = {
     initial:{
            scale:0,
            opacity:0
        },
        whileInView:{
            scale:1,
            opacity:1
        },
        transition:{
            duration:0.3
        }
  }

  
    return  (
        cardHighLightsDetails.map((data) => {
            return <motion.div {...popUpAnimation} className="card" key={data.id}>
                <img src={data.image} alt="" />
                <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </motion.div>
        })
    )
} 

const HomeHighlights = () => {
  return (
    <section className='HomeHighlightsMainContainer'>
        <h1>Atmosphere 360 highlights</h1>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default HomeHighlights