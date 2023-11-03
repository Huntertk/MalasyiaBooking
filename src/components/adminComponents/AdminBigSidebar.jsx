import React from 'react'
import '../../styles/adminBigSidebar.scss'
import { NavLink } from 'react-router-dom'

const AdminBigSidebar = () => {
  return (
    <aside className='bigSidebarWrapper'>
      <div className="bigSidebarContainer">
        <h1>Admin</h1>
          <NavLink to="/admin/all-booking">All Booking</NavLink>
          <NavLink to="/admin/completed-booking">Completed Booking</NavLink>
          <NavLink to="/admin/pending-booking">Pending Booking</NavLink>
      </div>
    </aside>
  )
}

export default AdminBigSidebar