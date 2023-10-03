import React, { useState } from 'react'
import '../styles/header.scss'
import logo from '../assets/images/malaysia-tickets_b-logo.svg'
import {GoGlobe} from 'react-icons/go'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {RxCross1} from 'react-icons/rx'
import SmallSidebar from './SmallSidebar'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNavbar = () => {
        setIsNavOpen((prev => !prev))
    }
  return (
    <header>
        <nav>
            <div className="logoContainer">
                <img src={logo} alt="" />
            </div>
            <div className='headerSideContainer'>
                <p>Buy tickets</p>
                    <GoGlobe />
                <div className="iconsContainer" onClick={handleNavbar}>
                    {
                        isNavOpen ? <RxCross1 /> : <IoReorderThreeOutline className='hamburger' />
                    }
                </div>
            </div>
        </nav>
        {
        isNavOpen && <SmallSidebar />
        }
    </header>
  )
}

export default Header