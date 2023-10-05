import React, { useState } from 'react'
import '../styles/homeFaq.scss';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import { homeFAQ } from '../data';

const QuestionContainer = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return  (
        <div className='questionNanswerContainer' >
            <div className="questionContainer" onClick={() => setIsModalOpen(prev => !prev)}>
                <h2>{data.ques}</h2>
                <div className="icon">
                   {isModalOpen ? <IoIosArrowUp/> : <IoIosArrowDown/ >}
                </div>
            </div>
            {
                isModalOpen && <div className="answer">
                    <p>{data.ans}</p>
                </div>
            }
                

        </div>
    )
}


const HomeFaq = () => {
  return (
    <section className='homeFAQMainContainer'>
        <h1>Frequently Asked Questions About Atmosphere 360</h1>
        <div className="questionMainContainer">
            {
                homeFAQ.map((data) => {
                    return <QuestionContainer key={data.id} data={data} />
                })

            }
        </div>
    </section>
  )
}

export default HomeFaq