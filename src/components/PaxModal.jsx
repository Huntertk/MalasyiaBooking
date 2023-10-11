import React, { useState } from 'react'
import '../styles/paxModal.scss'
import { format } from 'date-fns';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { 
    SET_ADULT_COUNT_INCREASE, 
    SET_ADULT_COUNT_DECREASE ,
    SET_CHILD_COUNT_DECREASE,
    SET_CHILD_COUNT_INCREASE,
    SET_INFANT_COUNT_DECREASE,
    SET_INFANT_COUNT_INCREASE,
    SET_SENIOR_COUNT_DECREASE,
    SET_SENIOR_COUNT_INCREASE,
    SET_ADULT_TOTAL,
    SET_CHILD_TOTAL,
    SET_SENIOR_TOTAL,
    SET_INFANT_TOTAL,
    useBookingContext 
} from '../context/BookingContex';


const Pax = ({category, ageText, price,count, dispatch, actionType}) => {
    console.log(count);
    const handleIncrese = () => {
        dispatch({type: actionType.increase})
        dispatch({type: actionType.totalAmt})
    }
    
    const handleDecrease = () => {
        dispatch({type: actionType.decrease})
        dispatch({type: actionType.totalAmt})
    }    
    return (
         <div className="pax">
                <p>
                    <span>{category}</span>
                    <span>{ageText}</span>
                </p>
                <div className="btnContainer">
                    <AiOutlineMinusCircle onClick={handleDecrease} />
                    <span>{count}</span>
                    <AiOutlinePlusCircle onClick={handleIncrese} />
                </div>
                <div className="price">
                    <span>MYR {count * price}</span>
                </div>
            </div>
    )
}

const PaxModal = ({selectedDate, setModalOpen}) => {
    const {
        adultCount, 
        childCount, 
        infantCount, 
        seniorCount,
        adultTotal,
        childTotal,
        infantTotal,
        seniorTotal,
        dispatch
    } = useBookingContext()
  return (
    <div className='paxSelectorContainer'>
        <button  className='crossIcon' onClick={() => setModalOpen(false)}>Cancel</button>
        <h1>Select number of tickets</h1>
        <div className="paxSelector">
            <Pax  
            category ={"Adult"} 
            ageText={"13 to 59 yrs"} 
            price={199}
            count={adultCount}
            dispatch={dispatch}
            actionType={{
                increase: SET_ADULT_COUNT_INCREASE, 
                decrease: SET_ADULT_COUNT_DECREASE,
                totalAmt: SET_ADULT_TOTAL
            }}
             />
            <Pax  
            category ={"Child"} 
            ageText={"6 to 12 yrs"} 
            price={150} 
            count={childCount}
            dispatch={dispatch}
            actionType={{
               increase: SET_CHILD_COUNT_INCREASE,
               decrease: SET_CHILD_COUNT_DECREASE, 
               totalAmt: SET_CHILD_TOTAL
            }}
            />
            <Pax  
            category ={"Infant"} 
            ageText={"2 to 5 yrs"} 
            price={50} 
            count={infantCount}
            dispatch={dispatch}
            actionType={{
                increase: SET_INFANT_COUNT_INCREASE,
                decrease: SET_INFANT_COUNT_DECREASE, 
                totalAmt: SET_INFANT_TOTAL
            }}
            />
            <Pax  
            category ={"Senior"} 
            ageText={"Above 59 yrs"} 
            price={150} 
            count={seniorCount}
            dispatch={dispatch}
            actionType={{
               increase: SET_SENIOR_COUNT_INCREASE,
               decrease: SET_SENIOR_COUNT_DECREASE, 
               totalAmt: SET_SENIOR_TOTAL
            }}
            />
        </div>
            <div className="totalPayable">
                <span>Total</span>
               <span>MYR {adultTotal + childTotal + infantTotal + seniorTotal}</span>
            </div>
               
        <div className="dateContainer">
            {
                selectedDate && <>
                <p>{format(selectedDate, 'PPP')}  </p> 
                <Link to="/booking"><button>Next</button></Link>
                </>
            }
        </div>
    </div>
  )
}

export default PaxModal