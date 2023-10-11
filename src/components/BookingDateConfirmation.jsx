import React, { useState } from 'react'
import '../styles/bookingDateConfirmation.scss'
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import PaxModal from './PaxModal';
import { SET_BOOKING_DATE, useBookingContext } from '../context/BookingContex';

const DateBtn = ({setSelectedDate, setCalenderOpen,selectedDate, calenderOpen}) => {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

    const day = new Date().getDay()
    const date = new Date(Date.now()).getDate()
    return (
        <div className="dateBtnContainer">
           <button className={selectedDate.toString() == new Date(Date.now())  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now()))}
           >
            <span>
                {date}
            </span>
            <span>
                {days[day]}
            </span>
           </button>
           <button 
           className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24))}>
            <span>
                {date + 1}
            </span>
            <span>
                {days[day + 1]}
            </span>
            </button>
           <button  
            className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24 * 2)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 2))}
           >
            <span>
                {date + 2}
            </span>
            <span>
                {days[day + 2]}
            </span>
            </button>
           <button 
            className={selectedDate.toString() == new Date(Date.now() + 1000*60*60*24 *3)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 3))}
           >
            <span>
                {date + 3}
            </span>
            <span>
                {days[day + 3]}
            </span>
            </button>
           <button className={calenderOpen ? "moreDates active" : "moreDates"} onClick={() => setCalenderOpen(prev => !prev)}>More Dates</button>
        </div>
    )
}

const BookingDateConfirmation = () => {
        const [selectedDate, setSelectedDate] = useState("")
        const [calenderOpen, setCalenderOpen] = useState(false)
        const [modalOpen, setModalOpen] = useState(false)
        const {bookingDate, dispatch} = useBookingContext()
        console.log(bookingDate);
  return (
    <section className='bookingDateConfirmationMainContainer'>
        <div className="bookingDateWrapper">
            <h1>select date</h1>
            <DateBtn 
            setSelectedDate={setSelectedDate} 
            setCalenderOpen={setCalenderOpen} 
            selectedDate={selectedDate}
            calenderOpen={calenderOpen}
            />
            <div className="moreDatesContainer">
                <DayPicker
            style={calenderOpen === false && {display:'none'}}
            mode="single"
            selected={selectedDate} 
            showOutsideDays
            onSelect={setSelectedDate}
            />
            </div>
            <div className="selectedDate">
                {
                    selectedDate ? <>
                    <p>You selected {format(selectedDate, 'PPP')}.</p>
                    <button onClick={() => {
                        dispatch({type: SET_BOOKING_DATE, payload: selectedDate})
                        setModalOpen(true)
                    }}>Next</button>
                    </> : <p>Select One Date</p>
                }
            </div>
        </div>
        {
            modalOpen && <PaxModal setModalOpen={setModalOpen} selectedDate={selectedDate} />
        }
        
    </section>
  )
}

export default BookingDateConfirmation