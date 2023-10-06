import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillCalendar2MinusFill} from 'react-icons/bs'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const Calender = ({id}) =>{
    const [selectedDate, setSelectedDate] = useState(false)
    return(
        <div className="calender">
            <label htmlFor={id}>
                <BsFillCalendar2MinusFill />
            </label>
            <DatePicker id={id} selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
        </div>
    )
}


const HomeCard = ({data}) => {
    console.log(data);
    const {image, id, title, desc} = data;
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
                <Calender id={id} />
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