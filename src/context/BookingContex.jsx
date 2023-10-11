import React, { createContext, useReducer } from 'react'
import { useContext } from 'react'
const BookingContext = createContext()

export const SET_ADULT_COUNT_INCREASE = 'SET_ADULT_COUNT_INCREASE'
export const SET_CHILD_COUNT_INCREASE = 'SET_CHILD_COUNT_INCREASE'
export const SET_INFANT_COUNT_INCREASE = 'SET_INFANT_COUNT_INCREASE'
export const SET_SENIOR_COUNT_INCREASE = 'SET_SENIOR_COUNT_INCREASE'
export const SET_ADULT_COUNT_DECREASE = 'SET_ADULT_COUNT_DECREASE'
export const SET_CHILD_COUNT_DECREASE = 'SET_CHILD_COUNT_DECREASE'
export const SET_INFANT_COUNT_DECREASE = 'SET_INFANT_COUNT_DECREASE'
export const SET_SENIOR_COUNT_DECREASE = 'SET_SENIOR_COUNT_DECREASE'
export const SET_ADULT_TOTAL = 'SET_ADULT_TOTAL'
export const SET_CHILD_TOTAL = 'SET_CHILD_TOTAL'
export const SET_INFANT_TOTAL = 'SET_INFANT_TOTAL'
export const SET_SENIOR_TOTAL = 'SET_SENIOR_TOTAL'

const initailState = {
    adultCount:0,
    childCount:0,
    infantCount:0,
    seniorCount:0,
    adultTotal: 0,
    childTotal: 0,
    infantTotal: 0,
    seniorTotal: 0,
}

console.log(initailState);

const reducer = (state, action) => {
    switch (action.type) {
        case SET_ADULT_COUNT_INCREASE:
            return {
                ...state,
                adultCount: state.adultCount + 1
            }
        case SET_CHILD_COUNT_INCREASE:
            return {
                ...state,
                childCount: state.childCount + 1
            }
        case SET_INFANT_COUNT_INCREASE:
            return {
                ...state,
                infantCount: state.infantCount + 1
            }
        case SET_SENIOR_COUNT_INCREASE:
            return {
                ...state,
                seniorCount: state.seniorCount + 1
            }
        case SET_ADULT_COUNT_DECREASE:
            return {
                ...state,
                adultCount: state.adultCount - 1
            }
        case SET_CHILD_COUNT_DECREASE:
            return {
                ...state,
                childCount: state.childCount - 1
            }
        case SET_INFANT_COUNT_DECREASE:
            return {
                ...state,
                infantCount: state.infantCount - 1
            }
        case SET_SENIOR_COUNT_DECREASE:
            return {
                ...state,
                seniorCount: state.seniorCount - 1
            }    
        case SET_ADULT_TOTAL:
            return {
                ...state,
                adultTotal: 199 * state.adultCount
            }    
        case SET_CHILD_TOTAL:
            return {
                ...state,
                childTotal: 150 * state.childCount
            }    
        case SET_INFANT_TOTAL:
            return {
                ...state,
                infantTotal: 50 * state.infantCount
            }    
        case SET_SENIOR_TOTAL:
            return {
                ...state,
                seniorTotal: 150 * state.seniorCount
            }    
    
        default:
          return state
    }
}

const BookingContexProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initailState)
  return (
    <BookingContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </BookingContext.Provider>
  )
}

const useBookingContext = () => useContext(BookingContext)

export { BookingContexProvider, useBookingContext}