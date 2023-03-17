import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Settings, Calendar, Mic, BookOpen } from 'react-feather'
import AppLogo from '../assets/images/images-shiv/AppLogo.svg'
import OutletControl from '../assets/images/images-shiv/OUTLETCONTROL.svg'

export const SideBar = () => {
  return (
    <>

          {/* Top Bar */}
          <div className='my-salon-topbar'>
           <img style={{width:'70px'}} src={AppLogo} alt="" />
           <img style={{width:'180px'}} src={OutletControl} alt="" />
          </div>

        <div className='d-flex'>
             {/* Sidebar */}
       <div className='my-salon-navbar'>

        <div>
        <NavLink to='/calendar'><div className="salon-nav-link"><Calendar size={30}/><div className='my-salon-nav-text'>Calendar</div></div></NavLink>
        </div>
          <div>
        <NavLink to='/promote/deals'><div className="salon-nav-link"><Mic size={30}/><div className='my-salon-nav-text'>Promote</div></div></NavLink>
        </div>
          <div>
        <NavLink to='/report'><div className="salon-nav-link"><BookOpen size={30}/><div className='my-salon-nav-text'>Reports</div></div></NavLink>
        </div>
          <div>
        <NavLink to='team-settings'><div className="salon-nav-link"><Settings size={30}/><div className='my-salon-nav-text'>Settings</div></div></NavLink>
        </div>

       </div>

        <div style={{width:'100%'}}>
        <Outlet />
      </div>

        </div>
    </>
  )
}
