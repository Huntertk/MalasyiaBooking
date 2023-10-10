import React from 'react'
import '../styles/booking.scss'

const Booking = () => {
  return (
    <section className='bookingMainContainer'>
        <div className="bookingWrapper">
            <h1>Confirm and Pay</h1>
            <div className="detailsWrapper">
                <p>Date Tue, Oct 10, 2023</p>
                <div className="guestQuantity">
                    <div className="guest">
                        <p>1 Adult</p>
                        <span>MYR 199</span>
                    </div>
                    <div className="total">
                        <p>Total Payable</p>
                        <span>MYR 199</span>
                    </div>
                </div>
                <form >
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id='name' />
                    <label htmlFor="phone">Mobile Number</label>
                    <input type="number" id="phone" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' />
                    <label htmlFor="cemail">Confirm Email</label>
                    <input type="email" id='cemail' />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Booking