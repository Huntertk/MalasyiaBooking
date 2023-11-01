import { createSlice } from "@reduxjs/toolkit";
import { setBookingDetailsFromLocalStorage, getBookingDetailsFromLocalStorage } from "../../utils/localStorage";

const initialState = {
    adultCount:0,
    childCount:0,
    infantCount:0,
    seniorCount:0,
    adultTotal: 0,
    childTotal: 0,
    infantTotal: 0,
    seniorTotal: 0,
    totalAmount: 0,
    bookingDate: "",
    isPaxModal: false
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        infantCountIncrease : (state, action) => {
            state.infantCount = state.infantCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        infantCountDecrease : (state, action) => {
            state.infantCount = state.infantCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        adultTotalAmount: (state) => {
            state.adultTotal = state.adultCount * 199
            setBookingDetailsFromLocalStorage(state)
        },
        childTotalAmount: (state) => {
            state.childTotal = state.childCount * 150
            setBookingDetailsFromLocalStorage(state)
        },
        infantTotalAmount: (state) => {
            state.infantTotal = state.infantCount * 50
            setBookingDetailsFromLocalStorage(state)
        },
        seniorTotalAmount: (state) => {
            state.seniorTotal = state.seniorCount * 150
            setBookingDetailsFromLocalStorage(state)
        },
        countTotalBookingAmount: (state) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.infantTotal + state.seniorTotal
            setBookingDetailsFromLocalStorage(state)
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload
            setBookingDetailsFromLocalStorage(state)
        },
        openPaxModel: (state) => {
            state.isPaxModal = true
        },
        closePaxModel: (state) => {
            state.isPaxModal = false
        }, 
        cancelBooking: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        }, 
    }
})


console.log(bookingSlice);
export const {
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    infantCountDecrease,
    infantCountIncrease,
    seniorCountDecrease,
    seniorCountIncrease,
    adultTotalAmount,
    childTotalAmount,
    infantTotalAmount,
    seniorTotalAmount,
    countTotalBookingAmount, 
    setBookingDate,
    openPaxModel,
    closePaxModel,
    cancelBooking
} = bookingSlice.actions

export default bookingSlice.reducer