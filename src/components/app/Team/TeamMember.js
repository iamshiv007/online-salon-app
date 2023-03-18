import React, { useState } from 'react'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button, InputGroup, Input, InputGroupText, Card, ButtonGroup} from 'reactstrap'
import { ChevronsDown, Search, List, PhoneCall, Mail } from 'react-feather'
import Avatar from 'react-avatar';
import { NavLink } from 'react-router-dom'
import './team-css/TeamMembers.css'

const TeamMembers = () => {
  //For dual button
  const [rSelected, setRSelected] = useState(1)
 
  return (
    <div className='team-member-container-ua'>
        <div className='mb-1'> 
            <span className='fs-5' style={{color:'rgba(0, 0, 0, 0.5)'}}>Settings </span><span className='fs-5' style={{color:'black'}}>Team members</span>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='fs-1' style={{fontWeight:"900"}}>Team members</div>
            <div>
            <UncontrolledButtonDropdown className='me-1 dropdown-ua'>
        <DropdownToggle outline color='dark' caret>
          Options
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Change the order
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Download CSV
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Download Excel
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Create share link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <NavLink to="/addTeamMember"><Button className="btn-ua fs-3 fw-bolder" color='dark'>Add a team member</Button></NavLink>
      <NavLink to='/addTeamMember'><Button className='round btn-ub' color='primary'>
        +Add
      </Button>
      </NavLink>
      </div>
        </div>
        <div className='box-ua'>
          <div className='d-flex'>
        <ButtonGroup className='me-1 toggle-ua'>
          <Button color='success' onClick={() => setRSelected(2)} active={rSelected === 2}>
            <ChevronsDown/>
          </Button>
          <Button color='success' onClick={() => setRSelected(3)} active={rSelected === 3}>
            <List/>
          </Button>
        </ButtonGroup>
        <InputGroup className='input-group-merge'>
        <InputGroupText>
          <Search size={14} />
        </InputGroupText>
        <Input placeholder='Search by name or title' />
      </InputGroup>
      </div>
      {/* Surname filter modal */}
      <UncontrolledButtonDropdown className='dropdown-ua'>
        <DropdownToggle outline color='dark' caret>
          Surname
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Costom order
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Surname (A-Z)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Surname (Z-A)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Started at (oldest first)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Started at (newest first)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Rating (highest first)
          </DropdownItem>
          <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
          Rating (lowest first)
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
        </div>
        <div className="team-member-body-ua row">
          <div className='col-md-4 '>
          <Card style={{border:'1px solid rgba(0, 0, 0, 0.2)'}} className='me-2 mb-4 p-2'>
            <div className='card-body-ua'>
          <Avatar name="Wendy Smith" round={true} color="#1bb70b"/>
          <div className='text-ua'>Wendy Smith</div>
          <div className='text-ub text-center'>+Add team member title</div>
          </div>
          <div className='box-ub mt-4'>
          <span className='me-2'>
              <PhoneCall style={{background:" rgba(27, 183, 11, 0.3)", color:"#1bb70b", padding:"6px", width:'40px', height:"40px"}}/>
          </span>
          <span>
              <Mail style={{background:"rgba(246, 206, 61, 0.3)", color:"#F6CE3D", padding:"6px", width:'40px', height:"40px"}}/>
          </span>
          </div>
          </Card>
          </div>
          <div className="col-md-4">
          <Card style={{border:'1px solid rgba(0, 0, 0, 0.2)'}} className='mb-4 me-2 p-2'>
            <div className='card-body-ua'>
          <Avatar name="Kondeti Anusha" round={true} color="#1bb70b"/>
          <div className='text-ua'>Kondeti Anusha</div>
          <div className='text-ub text-center'>+Add team member title</div>
          </div>
          <div className='box-ub mt-4'>
          <span className='me-2'>
              <PhoneCall style={{background:" rgba(27, 183, 11, 0.3)", color:"#1bb70b", padding:"6px", width:'40px', height:"40px"}}/>
          </span>
          <span>
              <Mail style={{background:"rgba(246, 206, 61, 0.3)", color:"#F6CE3D", padding:"6px", width:'40px', height:"40px"}}/>
          </span>
          </div>
          </Card>
          </div>
        </div>
    </div>
  )
}

export default TeamMembers