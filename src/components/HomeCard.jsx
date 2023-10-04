import React from 'react'
import imgOne from '../assets/images/cardOne.avif'
import {AiOutlineSafety, AiOutlineMobile} from 'react-icons/ai'
import {MdOutlineWatchLater} from 'react-icons/md'
import {GiHotMeal} from 'react-icons/gi'

const HomeCard = ({data}) => {
    const {image, title, price} = data;
  return (
    <div className="cardContainer">
            <img src={image} alt="" />
            <div className="content">
                <h3>{title}</h3>
                <p className='from'>from</p>
                <p className='price'>{price}</p>
                <p>Next available : Tomorrow</p>
            </div>
            <div className="accomodations">
                <div className="iconsContainer">
                    <AiOutlineSafety />
                    <p>Free Cancellation</p>
                </div>
                <div className="iconsContainer">
                    <AiOutlineMobile />
                    <p>Mobile Ticket</p>
                </div>
                <div className="iconsContainer">
                    <MdOutlineWatchLater />
                    <p>Flexible Duration</p>
                </div>
                <div className="iconsContainer">
                    <GiHotMeal />
                    <p>Meals Included</p>
                </div>
            </div>
            <div className="cardBtnContainer">
                <button className='checkAvailability'>Check Availibility</button>
                <button className='moreDetails'>More Details</button>
            </div>
        </div>
  )
}

export default HomeCard