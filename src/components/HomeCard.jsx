import React from 'react'
import {AiFillStar} from 'react-icons/ai'


const HomeCard = ({data}) => {
    const {image, title, desc} = data;
  return (
    <div className="cardContainer">
            <img src={image} alt="" />
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>Next available : Tomorrow</p>
            </div>
            <div className="accomodations">
               <div className="iconsContainer">
                        <AiFillStar /> 
                    <p>
                        4.5
                    </p>
               </div>
            </div>
            <div className="cardBtnContainer">
                <button className='checkAvailability'>Book Now</button>
            </div>
        </div>
  )
}

export default HomeCard