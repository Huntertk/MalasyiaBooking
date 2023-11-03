import React, { useState } from 'react'
import '../../styles/adminSmallSidebar.scss'
import { NavLink } from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { adminSidebarClose } from '../../features/admin/adminSlice'


const AdminSmallSidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className='smallSidebarWrapper'>
      <div className="smallSidebarContainer">
        <h1>Dashboard</h1>
        <ImCross className='crossIcon' onClick={() => dispatch(adminSidebarClose())} />
          <NavLink 
          to="/admin/all-booking"
          onClick={() => dispatch(adminSidebarClose())}
          >All Booking</NavLink>
          <NavLink 
          to="/admin/completed-booking"
          onClick={() => dispatch(adminSidebarClose())}
          >Completed Booking</NavLink>
          <NavLink 
          to="/admin/pending-booking"
          onClick={() => dispatch(adminSidebarClose())}
          >Pending Booking</NavLink>
      </div>
    </div>
  )
}

export default AdminSmallSidebar