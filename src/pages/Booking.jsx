import React from 'react'
import '../styles/booking.scss'
import image from '../assets/images/IMGNINE.jpg'
import { useBookingContext } from '../context/BookingContex'
import { format } from 'date-fns';
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
                 {bookingDate && format(bookingDate, 'PPP')}
                <div className="guestQuantity">
                    <div className="guest">
                        <p>1 Adult <span> X {adultCount}</span>
                        </p>
                        <span>MYR {adultTotal}</span>
                    </div>
                    <div className="guest">
                        <p>2 Child <span> X {childCount}</span></p>
                        <span>MYR {childTotal}</span>
                    </div>
                    <div className="guest">
                        <p>3 Infant <span> X {infantCount}</span></p>
                        <span>MYR {infantTotal}</span>
                    </div>
                    <div className="guest">
                        <p>4 Senior <span> X {seniorCount}</span></p>
                        <span>MYR {seniorTotal}</span>
                    </div>
                    <div className="guest">
                        <p>Total Payable</p>
                        <span>MYR {seniorTotal + infantTotal + childTotal + adultTotal}</span>
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