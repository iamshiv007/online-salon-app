import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { ChevronRight } from 'react-feather'
import './team-css/BusinessSettings.css'

 const BusinessSettings = () => {
  return (
    <div className="bussiness-settings-container-xa">
        <div>
        <div className="top-xa mb-3">
            <div style={{fontSize:"35px", fontWeight:"800"}}>Business settings</div>
            <div className='fs-4'>Manage all your Outlet Control settings in one place.</div>
        </div>
        <div className="bussiness-settings-body-xa">
            <div className="bussiness-settings-body-box-xa">
            <Card>
            <CardHeader className='text-xa'>
             Teams
             </CardHeader>
             <CardBody>
             <div className='box-xa'>
                <NavLink to="/teamMembers">
                    <div>
                    <div className="text-xc">Team members</div>
                    <div className="text-xd">Add, edit and delete your team members</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="/anuteam/workingHours">
                    <div>
                    <div className="text-xc">Working hours</div>
                    <div className="text-xd">Manage working hours of your team members</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="/anuteam/permissions">
                    <div>
                    <div className="text-xc">Permissions</div>
                    <div className="text-xd">Configure level of access to Fresha for each of your
team members</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
                <div className='box-xa'>
                <NavLink to="/anuteam/commission">
                    <div>
                    <div className="text-xc">Commisions</div>
                    <div className="text-xd">Set up the calculation of commissions for  team
members</div>
                </div>
                <span><ChevronRight/></span>
                </NavLink>
                </div>
             </CardBody>
            </Card>
            </div>

        </div>
        </div>
    </div>
  )
}

export default BusinessSettings
