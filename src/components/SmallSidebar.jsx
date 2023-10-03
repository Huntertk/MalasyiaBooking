import React, { useState } from 'react'
import '../styles/sidebar.scss'

import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io'

import { navData } from '../data'
import SidebarNavlinks from './SidebarNavlinks'

const SmallSidebar = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = (id) => {
    setModalOpen((prev) => {
      return prev ? false : true
    })
  } 

  return (
    <div className='sideNavLinksContainer'>
      {
        navData.map((data) => {
          return (
            <div className="linksContainer" key={data.id}>
              <div className="contentContainer" onClick={handleModalOpen}>
                  <p>{data.title}</p>
                  {
                    modalOpen ? <IoIosArrowDown /> : <IoIosArrowForward />
                  }
                  
                </div>
                <SidebarNavlinks data={data.links} modalOpen={modalOpen} />
            </div>
          )
        })
      }
    </div>
  )
}

export default SmallSidebar