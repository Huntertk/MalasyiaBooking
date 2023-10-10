import React, { useState } from 'react'
import '../styles/paxModal.scss'
import { format } from 'date-fns';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom';

const Pax = ({category, ageText, price}) => {
    const [count, setCount] = useState(0)

    return (
         <div className="pax">
                <p>
                    <span>{category}</span>
                    <span>{ageText}</span>
                </p>
                <div className="btnContainer">
                    <AiOutlineMinusCircle onClick={() => setCount(prev => prev - 1)} />
                    <span>{count}</span>
                    <AiOutlinePlusCircle onClick={() => setCount(prev => prev + 1)} />
                </div>
                <div className="price">
                    <span>{price}</span>
                </div>
            </div>
    )
}

const PaxModal = ({selectedDate, setModalOpen}) => {
  return (
    <div className='paxSelectorContainer'>
        <RxCross2  className='crossIcon' onClick={() => setModalOpen(false)}/>
        <h1>Select number of tickets</h1>
        <div className="paxSelector">
            <Pax  
            category ={"Adult"} 
            ageText={"13 to 59 yrs"} 
            price={"MYR 199"}
             />
            <Pax  
            category ={"Child"} 
            ageText={"6 to 12 yrs"} 
            price={"MYR 150"} 
            />
            <Pax  
            category ={"Infant"} 
            ageText={"2 to 5 yrs"} 
            price={"MYR 50"} 
            />
            <Pax  
            category ={"Senior"} 
            ageText={"Above 59 yrs"} 
            price={"MYR 150"} 
            />
        </div>
        <div className="dateContainer">
            {
                selectedDate && <>
                <p>{format(selectedDate, 'PPP')}</p> 
                <Link to="/booking"><button>Next</button></Link>
                </>
            }
        </div>
    </div>
  )
}

export default PaxModal