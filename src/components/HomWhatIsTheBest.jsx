import React from 'react'
import '../styles/homeWhatIsTheBest.scss'
import {motion} from 'framer-motion'

const HomWhatIsTheBest = () => {
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
    <motion.section {...easingItemFromLeft} className='HomWhatIsTheBestMainContainer'>
        <h1>What Is The Best Way To Buy Atmosphere 360 Tickets? Book Online</h1>
        <p>For a seamless and hassle-free experience, the best way to buy Atmosphere 360 tickets is through online booking. Embrace the convenience and benefits of securing your reservation in advance.</p>
        <ul>
            <li>
                <span>Discounts : </span>
                Avail special discounts and promotional offers exclusively available for online bookings, making your experience even more economical.
            </li>
            <li>
                <span>Advance Booking : </span>
                Reserve your preferred dining time in advance, ensuring availability on your desired date.
            </li>
            <li>
                <span>Convenience : </span>
                Save time and effort by avoiding long queues at the ticket counter, making your visit smoother.
            </li>
            
        </ul>
    </motion.section>
  )
}

export default HomWhatIsTheBest