import React, { useState } from 'react'
import {BsFillCalendar2MinusFill} from 'react-icons/bs'
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { DayPicker } from 'react-day-picker';
import {BiSolidDollarCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Calender = ({id}) =>{
    const [selectedDate, setSelectedDate] = useState(false)
    const [calenderOpen, setCalenderOpen] = useState(false)

     const footer = selectedDate ? (
    <p>You selected {format(selectedDate, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );


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
                <p onClick={() => setCalenderOpen(prev => !prev)}>
                    <BsFillCalendar2MinusFill />
                    <span>More Dates</span>
                </p>
            </div>
            <DayPicker
            style={calenderOpen === false && {display:'none'}}
            mode="single"
            selected={selectedDate} 
            showOutsideDays
            onSelect={setSelectedDate} 
            footer={footer}
            />
        </div>
    )
}


const HomeCard = ({data}) => {
    const {image, id, title, desc} = data;
  return (
    <div className="cardContainer">
        <div className="imageContainer">
            {data.image.map((ima) =>  <img key={ima} src={ima} alt="" />)}
        </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>Next available : Tomorrow</p>
                {/* <Calender id={id} /> */}
            </div>
            <div className="cardBtnContainer">
                <Link to="/date-confirm" className='checkAvailability'> Book Now</Link>
            <div className="cancelPolicy">
                <BiSolidDollarCircle />
                <div className="cancelPolicyContent">
                    <p>Cancellation policy</p>
                    <span>Cancellation is possible until 24 hours before your visit.</span>
                </div>
            </div>
            </div>
        </div>
  )
}

export default HomeCard