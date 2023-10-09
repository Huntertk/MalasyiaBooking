import React from 'react'
import '../styles/homeBuffetOption.scss'
import { motion } from 'framer-motion'
import { homeBuffetOptions } from '../data'

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
        homeBuffetOptions.map((data) => {
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

const HomeBuffetOption = () => {
  return (
    <section className='HomeBuffetOptionMainContainer'>
        <h1>Buffet Options at Atmosphere 360</h1>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default HomeBuffetOption