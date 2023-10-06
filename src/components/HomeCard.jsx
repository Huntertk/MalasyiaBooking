import React from 'react'
import {AiFillStar} from 'react-icons/ai'


const HomeCard = ({data}) => {
    const {image, title, desc} = data;
  return (
    <div className="cardContainer">
        <div className="imageContainer">
            <img src={image[0]} alt="" />
            <img src={image[1]} alt="" />
            <img src={image[2]} alt="" />
        </div>
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