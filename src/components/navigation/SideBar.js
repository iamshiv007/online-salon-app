import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Settings, Calendar, Mic, BookOpen, Menu } from 'react-feather'
import AppLogo from '../assets/images/images-shiv/AppLogo.svg'
import OutletControl from '../assets/images/images-shiv/OUTLETCONTROL.svg'
import { Offcanvas, OffcanvasBody } from 'reactstrap'

export const SideBar = () => {
  const [canvasOpen, setCanvasOpen] = useState(false)

  const toggleCanvasEnd = () => {
    setCanvasOpen(!canvasOpen)
  }

  return (
       <>
          {/* Top Bar */}
          <div className='my-salon-topbar d-flex justify-content-between align-items-center'>
            <div>
           <img style={{width:'70px'}} src={AppLogo} alt="" />
           <img style={{width:'180px'}} src={OutletControl} alt="" />
           </div>
           <div className='pe-2 mobile-navbar' onClick={toggleCanvasEnd}>
            <Menu size={30}/>
          </div>
          </div>

        <div className='d-flex'>
             {/* Sidebar */}
       <div className='my-salon-navbar'>

        <div>
        <NavLink to='/'><div className="salon-nav-link"><Calendar size={30}/><div className='my-salon-nav-text'>Calendar</div></div></NavLink>
        </div>
          <div>
        <NavLink to='/promote/deals'><div className="salon-nav-link"><Mic size={30}/><div className='my-salon-nav-text'>Promote</div></div></NavLink>
        </div>
          <div>
        <NavLink to='san-reports/dashboard'><div className="salon-nav-link"><BookOpen size={30}/><div className='my-salon-nav-text'>Reports</div></div></NavLink>
        </div>
          <div>
        <NavLink to='/teamMembers'><div className="salon-nav-link"><Settings size={30}/><div className='my-salon-nav-text'>Team</div></div></NavLink>
        </div>

       </div>

       {/* Offcanvas */}
       <Offcanvas style={{width:'70%'}} direction='end' isOpen={canvasOpen} toggle={toggleCanvasEnd}>
        <OffcanvasBody className='p-0'
        >       
         <div className='my-salon-navbar-off-canvas'>

         <div>
        <NavLink  onClick={toggleCanvasEnd}  to='/'><div className="salon-nav-link"><Calendar size={30}/><div className='my-salon-nav-text'>Calendar</div></div></NavLink>
        </div>
          <div>
        <NavLink  onClick={toggleCanvasEnd}  to='/promote/deals'><div className="salon-nav-link"><Mic size={30}/><div className='my-salon-nav-text'>Promote</div></div></NavLink>
        </div>
          <div>
        <NavLink  onClick={toggleCanvasEnd}  to='/san-reports/dashboard'><div className="salon-nav-link"><BookOpen size={30}/><div className='my-salon-nav-text'>Reports</div></div></NavLink>
        </div>
          <div>
        <NavLink  onClick={toggleCanvasEnd}  to='/teamMembers'><div className="salon-nav-link"><Settings size={30}/><div className='my-salon-nav-text'>Team</div></div></NavLink>
        </div>

      </div>

        </OffcanvasBody>
      </Offcanvas>


        <div style={{width:'100%'}}>
        <Outlet />
      </div>

        </div>
    </>
  )
}
