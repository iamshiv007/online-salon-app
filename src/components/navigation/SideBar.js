import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Settings, Calendar, Mic, BookOpen } from 'react-feather'

export const SideBar = () => {
  return (
    <>
        <div className='d-flex'>
             {/* Sidebar */}
       <div className='my-salon-sidebar'>
        <div>
        <NavLink to='/calender'><div className='my-salon-link'><span><Calendar/>&nbsp;</span> Calender</div></NavLink>
        </div>
        <div>
        <NavLink to='/promote'><div className='my-salon-link'><span><Mic/>&nbsp;</span>Promote</div></NavLink>
        </div>
        <div>
        <NavLink to='/report'><div className='my-salon-link'><span><BookOpen/>&nbsp;</span>Report</div></NavLink>
        </div>
        <div>
        <NavLink to='/team'><div className='my-salon-link'><span><Settings/>&nbsp;</span>Team Setting</div></NavLink>
        </div>
        </div>

        <div id="detail">
        <Outlet />
      </div>

        </div>
    </>
  )
}
