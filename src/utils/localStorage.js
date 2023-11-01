export const setBookingDetailsFromLocalStorage = (booking) => {
    return localStorage.setItem('booking-details', JSON.stringify(booking))
}


export const getBookingDetailsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('booking-details'))
}