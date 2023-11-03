import React, { useState } from 'react'
import '../../styles/adminHeader.scss' 
import { useDispatch, useSelector } from 'react-redux'
import {FaUserCircle} from 'react-icons/fa'
import {BiAlignLeft} from 'react-icons/bi'
import { adminSidebarOpen } from '../../features/admin/adminSlice'

const AdminHeader = () => {
    const {adminEmail} = useSelector(state => state.admin)
    console.log(adminEmail);
    const dispatch = useDispatch()
  return (
    <div id='adminHeaderMainContainer'>
        <div className="adminHeaderWrapper">
            <BiAlignLeft className='alignLeft' onClick={() => dispatch(adminSidebarOpen())} />
            <h1>Dashboard</h1>
            <ul>
                <li className='adminEmail'>{adminEmail} </li>
                <li><FaUserCircle /></li>
            </ul>
        </div>
    </div>
  )
}

export default AdminHeader