import React, { useState } from 'react'
import '../styles/homeVisistPlan.scss'
import { motion } from 'framer-motion'
import { homeVisitPlanData } from '../data';

const Cards = ({data}) => {
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
          <motion.div {...popUpAnimation} className="card">
                <img src={data.image} alt="" />
                <div className="content">
                    <ul>
                    {data.details.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                    </ul>
                </div>
            </motion.div>
    )
}


const HomeVisitPlan = () => {
    const [data, setData] = useState(homeVisitPlanData[0])
  return (
    <section className='homeVisitPlanMainContainer'>
        <h1>Plan your visit to Atmosphere 360</h1>
        <div className="btnContainer">
            {homeVisitPlanData.map((dataBtn, index) => {
                return  <button className={dataBtn.type === data.type ? "active" : ""  } key={dataBtn.id} onClick={() =>{
                    setData(homeVisitPlanData[index])
                }
                    }>{dataBtn.type}</button>
            })}
        </div>
        <Cards data={data} />        
    </section>
  )
}

export default HomeVisitPlan