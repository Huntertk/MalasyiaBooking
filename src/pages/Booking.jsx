import React from 'react'
import '../styles/booking.scss'
import image from '../assets/images/IMGNINE.jpg'
import { useBookingContext } from '../context/BookingContex'
import { format } from 'date-fns';
import {BiEditAlt} from 'react-icons/bi'
const Booking = () => {
    const {
        adultCount,
        childCount,
        infantCount,
        seniorCount,
        adultTotal, 
        childTotal, 
        infantTotal, 
        seniorTotal,
        bookingDate
    } = useBookingContext()
  return (
    <section className='bookingMainContainer'>
        <div className="bookingWrapper">
            <img src={image} alt="" />
            <h1>Confirm and Pay</h1>
            <div className="detailsWrapper">
                <div className="topContainer">
                    <p>{bookingDate && format(bookingDate, 'PPP')}</p>
                    <BiEditAlt />
                </div>
                 
                <div className="guestQuantity">
                    {
                        adultCount === 0 ? "" :
                        <div className="guest">
                            <p> Adult <span> X {adultCount}</span>
                            </p>
                            <span>MYR {adultTotal}</span>
                        </div>
                    }
                    {
                        childCount === 0 ? "" : <div className="guest">
                        <p> Child <span> X {childCount}</span></p>
                        <span>MYR {childTotal}</span>
                    </div>
                    }

                    {
                        infantCount === 0 ? "" : <div className="guest">
                        <p> Infant <span> X {infantCount}</span></p>
                        <span>MYR {infantTotal}</span>
                    </div>
                    }
                    
                    {
                        seniorCount === 0 ? "" : <div className="guest">
                        <p> Senior <span> X {seniorCount}</span></p>
                        <span>MYR {seniorTotal}</span>
                    </div>
                    }
                    
                    
                    <div className="guest">
                        <p className='totalPayable'>Total Payable</p>
                        <span className='totalPayable'>MYR {seniorTotal + infantTotal + childTotal + adultTotal}</span>
                    </div>
                </div>
                <form >
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id='name'   autoComplete="off" required/>
                    <label htmlFor="phone">Mobile Number</label>
                    <input type="number" id="phone" placeholder='+60XXXXXXXX'  autoComplete="off" required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' autoComplete="off" required />
                    <label htmlFor="cemail">Confirm Email</label>
                    <input type="email" id='cemail' autoComplete="off" required />
                    <button>Pay Now</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Booking