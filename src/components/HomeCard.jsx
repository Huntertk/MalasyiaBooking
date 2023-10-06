import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillCalendar2MinusFill} from 'react-icons/bs'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const Calender = ({id}) =>{
    const [selectedDate, setSelectedDate] = useState(false)
    return(
        <div className="calender">
            
            <div className="recentDateContainer">
                <button onClick={() => setSelectedDate(new Date(Date.now()))}>
                        Today
                    <span>
                        {new Date().getDate()}
                    </span>
                </button>
                <button onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24))}>
                        Tomorrow
                    <span>
                        {new Date().getDate() + 1}
                    </span>
                </button>
                <label htmlFor={id}>
                <p>
                    <BsFillCalendar2MinusFill />
                    <span>More Dates</span>
                </p>
            </label>
            </div>
            
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
                <p>Select Date</p>
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