import React, { useState } from 'react'
import { Camera, X, Home, Search } from 'react-feather'
import { Alert, Label, Input, InputGroup, InputGroupText, Button, Modal, ModalFooter, ModalBody, ButtonGroup, DropdownMenu, Dropdown, DropdownToggle, DropdownItem } from 'reactstrap'
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { NavLink, useNavigate } from 'react-router-dom'
import './team-css/AddTeamMemberForm.css'

const AddTeamMemberForm = () => {

  //for date pickr
  const [picker1, setPicker1] = useState(new Date())
  const [picker2, setPicker2] = useState('')
  const [picker3, setPicker3] = useState(new Date())

  //for alert box
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  //For mobile number input field
  const [dropdownOpen, setDropdownOpen] = useState(false)

  //for required fields
  const [style1, setStyle1] = useState({display:'none'})
  const [style2, setStyle2] = useState({display:'none'})
  const [border1, setBorder1] = useState()
  const [border2, setBorder2] = useState()

  //For buttonGroup
  const [rSelected1, setRSelected1] = useState("%")
  const [rSelected2, setRSelected2] = useState("%")
  const [rSelected3, setRSelected3] = useState("%")
  const [rSelected4, setRSelected4] = useState("%")

  //For modals 
  const [centeredModal, setCenteredModal] = useState(false)
  const [centeredModal1, setCenteredModal1] = useState(false)
  //For allow booking from calendar 
  const [switch1, setswitch1] = useState(true)
  //For select services from modal
  const [service, setService] = useState(["Haircut", "Beard Trim", "Classic Fill"])
  //For Collect data from input fields
  const [formData, setFormData] = useState({profile_image:'', first_name:'', last_name:'', team_member_title:'', notes:'', email:'', number:"", allow_calendar_bookings:switch1, services:service, color:'#FF6A8D', commission:"", team_member_permission:"Low", location:''})
  //for service section
  const [block1, setBlock1] = useState()


  //For collect commission modal data
  const [commissionData, setCommissionData] = useState({effective_date:picker3, commission_cycle:"Every day", product_commission:'', service_commission:"", voucher_commission:"", membership_commission:""})

  // For commission boxes
  const [display1, setDisplay1] = useState('none')
  const [display2, setDisplay2] = useState('none')
  const [display3, setDisplay3] = useState('none')
  const [display4, setDisplay4] = useState('none')

  //For mobile number input field
  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  //For select services from modal
  const addService = (event) => {
    if (event.target.name === "all_services") {
      if (service.length === 3) {
          setService([])
      } else {
        setService(["Haircut", "Beard Trim", "Classic Fill"])
      }
  } else if (event.target.name === "Hair") {
    if (service.includes("Haircut", "Beard Trim")) {
      setService(service.filter(service => service !== "Haircut" && service !== "Beard Trim"))
    } else {
      if (service.includes("Haircut")) {
      setService([...service, "Beard Trim"])
    } else if (service.includes("Beard Trim")) {
      setService([...service, "Haircut"])
    } else {
      setService([...service, "Haircut", "Beard Trim"])
    }
    } 
  } else { 
    if (service.includes(event.target.value)) {
      const deselect = service.filter(
        (myservice) => myservice !== event.target.value
        )
        setService(deselect)
      } else {
      setService([...service, event.target.value])
    }
  }
  }

  //For Collect data from input fields
  const collectData = (e) => {
    if (e.target.name === 'team_member_permission') {
        if (e.target.value === "0") {
          setFormData({...formData, [e.target.name]:'No access'})
      } else if (e.target.value === "1") {
        setFormData({...formData, [e.target.name]:'Basic'})
      } else if (e.target.value === "2") {
        setFormData({...formData, [e.target.name]:'Low'})
      } else if (e.target.value === "3") {
        setFormData({...formData, [e.target.name]:'Medium'})
      } else if (e.target.value === "4") {
        setFormData({...formData, [e.target.name]:'High'})
      }
    } else {
    setFormData({...formData, [e.target.name]:e.target.value})
      if (e.target.name === 'first_name') {
        setStyle1({display:'none'})
        setBorder1()
       }
      if (e.target.name === 'email') {
        setStyle2({display:'none'})
        setBorder2()
       }
      }
  }


  //For collect image data
  const collectImage = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  //For allow booking from calendar
  const switch1Fun = (e) => {
    setswitch1(!switch1)
    setFormData({...formData, [e.target.name]:!switch1})
    if (switch1) {
      setBlock1({display:'none'})
      setService([])
    } else {
      setBlock1()
      setService(["Haircut", "Beard Trim", "Classic Fill"])
    }
  }

  //For collect commision modal info
  const CollectCommissionData = (e) => {
       setCommissionData({...commissionData, [e.target.name]:e.target.value})
  }

  //For redirect
  const navigate = useNavigate()

   //On click of add new member
   const submitForm = () => {
    if (formData.first_name === "") {
      setStyle1({display:'block'})
      setBorder1({border:'1px solid red'})
      setVisible1(true)
        setTimeout(() => {
          setVisible1(false)
        }, 3000)
    } else if (formData.email === "" || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setStyle2({display:'block'})
      setBorder2({border:'1px solid red'})
      setVisible1(true)
        setTimeout(() => {
          setVisible1(false)
        }, 3000)
    } else {

    //Post a team member to backend database
    const myCommission = [{ effective_date:picker3, commission_cycle:commissionData.commission_cycle, service_commission:commissionData.service_commission, service_commission_type:rSelected1, product_commission:commissionData.product_commission, product_commission_type:rSelected2, voucher_commission:commissionData.voucher_commission, voucher_commission_type:rSelected3, membership_commission:commissionData.membership_commission, membership_commission_type:rSelected4}]
      console.log({...formData, services:service, start_date:picker1, end_date:picker2, commission:myCommission })
      setVisible2(true)
      setTimeout(() => {
        setVisible2(false)
        navigate('/teamMembers')
      }, 5000)
  }
}

    return (
        <div className="add-team-member-form-container-va" style={{marginBottom:"70px"}}>
          {/* For alerts */}
          <div className="my-alert-comp">
      <Alert color='danger' isOpen={visible1}>
        <div className='text-center'>
        Please fill all required fields
        </div>
      </Alert>
      </div>
          <div className="my-alert-data">
      <Alert color='primary' isOpen={visible2}>
        <div>
        <div>{`{`}</div>
        <div>{` Profile Image : "${formData.profile_image}"`}</div>
        <div>{` First Name : "${formData.first_name}"`}</div>
        <div>{` Last Name : "${formData.last_name}"`}</div>
        <div>{` Title : "${formData.team_member_title}"`}</div>
        <div>{` Notes : "${formData.notes}"`}</div>
        <div>{` Email : "${formData.email}"`}</div>
        <div>{` Mobile Number : "${formData.number}"`}</div>
        <div>{` Start Date : "${picker1}"`}</div>
        <div>{` End Date : "${picker2}"`}</div>
        <div>{` Allow Calendar Booking : "${formData.allow_calendar_bookings}"`}</div>
        <div>{` Color : "${formData.color}"`}</div>
        <div>{` Services : "${service}"`}</div>
        <div>{` Commission : "${{ effective_date:picker3, commission_cycle:commissionData.commission_cycle, service_commission:commissionData.service_commission, service_commission_type:rSelected1, product_commission:commissionData.product_commission, product_commission_type:rSelected2, voucher_commission:commissionData.voucher_commission, voucher_commission_type:rSelected3, membership_commission:commissionData.membership_commission, membership_commission_type:rSelected4}}"`}</div>
        <div>{` Permission : "${formData.team_member_permission}"`}</div>
        <div>{`{`}</div>
        <div className='text-primary'>Wait...</div>
        </div>
      </Alert>
      </div>
            <div className="top-va">
                <NavLink to="/teamMembers"><div><X size={45}  strokeWidth={1.2}/></div></NavLink>
                <Button onClick={submitForm} className="btn-va" color='dark'>Add team member</Button>
            </div>
            <div className="new-member-body-va">
                <div className='mb-2 text-vc'>Add new team member</div>
                <div className="form-box-va">
                    <div className='top-info-va'>
                    <div className='text-va'>Basic info</div>
                    </div>
                    <div className="top-info-va">
                        <div className='box-vc'>
                          <label htmlFor="team_member_profile_image">
                        <div className='select-photo-va' style={{cursor:'pointer'}}><Camera size={40} color="#1bb70b" /></div>
                        </label>
                        <input onChange={collectImage} style={{display:'none'}} type="file" name="profile_image" id="team_member_profile_image" />
                        <div className='input-wrapper-va'>
                            <div className='box-vd'>
                                <div className='me-1 input-va'>
                    <Label className='text-vb' for='first-name'>
                    First name
                    </Label>
                    <Input id='scroll_to_first_name'  style={border1} type='text' name="first_name" onChange={collectData} bsSize='lg' placeholder='' />
                    <div className='fs-6 text-danger' style={style1}>Name is required</div>
                    </div>
                    <div className="input-va">
                    <Label className='text-vb' for='last-name'>
                    Last name
                    </Label>
                    <Input  type='text' name='last_name' id='last-name' onChange={collectData} bsSize='lg' placeholder='' />
                    </div>
                    </div>
                    <Label className='text-vb mt-1' for='team-member-title'>
                    Team member title
                    </Label>
                    <Input name="team_member_title" type='text' onChange={collectData} id='team-member-title' bsSize='lg' placeholder='' />
                    <div className='text-ve fs-6'>This title will be visible to clients</div>
                    </div>
                    <div className='form-floating mb-0'>
                    </div>
                    </div>
                    <Label className='text-vb mt-1' for='notes'>
            Notes (Optional)
          </Label>
          <Input
            name='notes'
            type='textarea'
            id='notes'
            onChange={collectData}
            placeholder='Add private notes viewable in the team member settings only'
            style={{ minHeight: '100px', fontSize:"16px"}}
            className={classnames({ 'text-danger': formData.notes.length > 1000 })}
          />
        <span
          className={classnames('textarea-counter-value float-end', {
            'bg-danger': formData.notes.length > 1000
          })}
        >
          {`${formData.notes.length}/1000`}
        </span>
        </div>
        <div className="top-info-va">
            <div className='text-vb text-vg'>Contact</div>
            <div className='mb-1 fs-5'>Team member contacts are confidential and won't be shared with your clients.</div>
            <div className="box-vd">
            <div className='input-va me-1'>
            <Label className='text-vb' for='email'>
                    Email
                    </Label>
                    <Input style={border2} type='text' name='email' id='email' onChange={collectData} bsSize='lg' placeholder='mail@example.com' />
                    <div style={style2} className="text-danger fs-6">Please provide a valid email</div>
                    </div>
        <div className='input-va'>
        <Label className='text-vb' for='mobile-number'>
                    Mobile number
                    </Label>
                    <InputGroup>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle color='primary' caret outline>
              +91
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className='w-100'>+96</DropdownItem>
              <DropdownItem className='w-100'>
              +95
              </DropdownItem>
              <DropdownItem className='w-100'>+35</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input onChange={collectData} name="number" type='number'/>
        </InputGroup>
      </div>
      </div>
        </div>
        <div className="top-info-vb">
            <div className='text-vb mb-1 text-vg'>Employment</div>
            <div className='box-vd'>
            <div className='input-va me-1'>
            <Label className='form-label text-vb' for='start-date'>
        Start date
      </Label>
      <Flatpickr className='form-control' name='start_date' value={picker1} onChange={date => setPicker1(date)} id='start-date' />
      </div> 
      <div className='input-va'>
      <Label className='form-label text-vb' for='end-date'>
        End date
      </Label>
      <Flatpickr className='form-control' value={picker2} onChange={date => setPicker2(date)} id='end-date' />
      </div> 
      </div>
        </div>
                </div>
            
            <div className="form-box-va">
                <div className='top-info-va'>
                <div className='text-va'>Work at</div>
                <div className='text-vf'>Choose the locations where this team member works.</div>
                </div>
                <div className='top-info-vb d-flex align-items-center'>
                    <div className='address-logo-va me-1'><Home size={40} color="#1bb70b"/></div>
                    <div style={{width:'fit-content'}}>
                        <div className="text-vb">UIUX Designer</div>
                        <div className='text-ve fs-5'>No business address added</div>
                    </div>
                </div>
            </div>
            <div className="form-box-va">
                <div className="top-info-va">
                    <div className='text-va'>
                    Booking
                    </div>
                </div>
                <div className="top-info-vb">
                    <div className='d-flex'>
                    <div className='form-switch form-check-success me-1'>
              <Input onChange={switch1Fun} type='switch' id='allow-calendar-booking' name='allow_calendar_bookings' value='allow-calendar-booking' checked={switch1} />
            </div>
            <div>
                        <label style={{cursor:'pointer'}} htmlFor='allow-calendar-booking' className='text-vb'>Allow calendar bookings</label>
                        <div className="text-ve fs-5">Allow this team member to receive bookings on the calendar.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-box-va">
                <div className="top-info-va">
            <div className='text-va'>Calendar colour</div>
                <div className='text-vf'>Choose a colour to see this team members appointments in the calendar.</div>
                </div>
                <div className="top-info-vb">
                  {/* Color options */}
                <div className="text-vb mb-1">Select colour</div>
                <div className='d-flex'>
                <Label style={{border:formData.color === "#FF6A8D" ? '2px solid black' : 'none'}} for='color-1' className='btn-vb btn-vb1'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#FF6A8D' id='color-1' defaultChecked/>
            </div>
                <Label style={{border:formData.color === "#E775EA" ? '2px solid black' : 'none'}} for='color-2' className='btn-vb btn-vb2'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#E775EA' id='color-2'/>
            </div>
                <Label style={{border:formData.color === "#ABC6EF" ? '2px solid black' : 'none'}} for='color-3' className='btn-vb btn-vb3'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#ABC6EF' id='color-3'/>
            </div>
                <Label style={{border:formData.color === "#588CEB" ? '2px solid black' : 'none'}} for='color-4' className='btn-vb btn-vb4'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#588CEB' id='color-4'/>
            </div>
                <Label style={{border:formData.color === "#5FE2E2" ? '2px solid black' : 'none'}} for='color-5' className='btn-vb btn-vb5'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#5FE2E2' id='color-5'/>
            </div>
                <Label style={{border:formData.color === "#16D8B5" ? '2px solid black' : 'none'}} for='color-6' className='btn-vb btn-vb6'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#16D8B5' id='color-6'/>
            </div>
                <Label style={{border:formData.color === "#57C589" ? '2px solid black' : 'none'}} for='color-7' className='btn-vb btn-vb7'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#57C589' id='color-7'/>
            </div>
                <Label style={{border:formData.color === "#E4D16BA6" ? '2px solid black' : 'none'}} for='color-8' className='btn-vb btn-vb8'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#E4D16BA6' id='color-8'/>
            </div>
                <Label style={{border:formData.color === "#E4E831" ? '2px solid black' : 'none'}} for='color-9' className='btn-vb btn-vb9'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#E4E831' id='color-9'/>
            </div>
                <Label style={{border:formData.color === "#E8C263" ? '2px solid black' : 'none'}} for='color-10' className='btn-vb btn-vb10'></Label>
                <div style={{display:'none'}} className='form-check form-check-primary'>
            <Input name='color' onChange={collectData}  type='radio' value='#E8C263' id='color-10'/>
            </div>
                </div>
                </div>
            </div>
            <div className="form-box-va" style={block1}>
                <div className="top-info-va">
                    <div className='text-va'>Services</div>
                    <div className='text-vf'>Add the services this team member can offer.</div>
                </div>
                <div className="top-info-vb">
                    <div className='services-box-va'>
                    <div className='text-vf'>{service.length === 3 ? "All services" : `${service.length} services`}</div>
                    <div onClick={() => setCenteredModal1(!centeredModal1)} style={{color:"#1bb70b", cursor:'pointer'}} className='text-vf'>Edit</div>
                    </div>
                </div>
            </div>
            <div className="form-box-va">
                <div className="top-info-va">
                    <div className='text-va'>Commission</div>
                    <div className='text-vf'>Set how much commission this team member makes.You can set tiered commission based on different
sales ranges for services,products,vochers and membership. <NavLink to="#">Learn more</NavLink></div>
                 </div>
                    <div className="top-info-vb">
                        <div onClick={() => setCenteredModal(!centeredModal)} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></div>
            </div>
            </div>
            <div className="form-box-va">
                <div className="top-info-va">
                    <div className='text-va'>Team member permission</div>
                </div>
                <div className="top-info-vb">
                    <div className="range-wrapper-va">
                      <div className='mx-auto' style={{width:'fit-content', marginBottom:'7px'}}>
                      <label className='fw-bolder fs-4' htmlFor="team-member-permission">{formData.team_member_permission}</label>
                      </div>
<input onChange={collectData} name='team_member_permission' defaultValue='2' type="range" className="w-100" min="0" max="4" id="team-member-permission"/>
<div className="d-flex justify-content-between"><div className='text-ve fs-5'>No access</div><div className='text-ve fs-5'>High</div></div>
</div>
                </div>
            </div>
            </div>

            {/* Select services */}
            <Modal
                        isOpen={centeredModal1}
                        toggle={() => setCenteredModal1(!centeredModal1)}
                        className="modal-dialog-centered my-modal-va p-0"
                      >
          <div className="d-flex justify-content-between p-1"><div className="modal-option-heading-a5">Select services</div><X style={{cursor:'pointer'}} onClick={() => setCenteredModal1(!centeredModal1)}/></div>
                        <ModalBody className="my-modal-a5">
                          <div className="modal-option-search-box-wrapper-a5">
                          <InputGroup className="input-group-merge mt-1 mb-1">
        <InputGroupText>
          <Search size={18} />
        </InputGroupText>
        <Input style={{fontSize:'22px', fontWeight:'500', color:'black'}} placeholder='' />
      </InputGroup>
                          </div>
                          <Label for="all-services"  className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="all_services"
                                value="Haircut, Beard Trim, Classic Fill"
                                id='all-services'
                                onChange={addService}
                                checked={service.some((service) => service === 'Haircut') && service.some((service) => service === 'Beard Trim') && service.some((service) => service === 'Classic Fill')}
                              />
                            </label>
                            <div className="list-item-names-d5">All services</div>
                          </Label>
                          <Label for='Hair' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="Hair"
                                value="Haircut, Beard Trim"
                                id='Hair'
                                onChange={addService}
                                checked={service.some((service) => service === 'Haircut') && service.some((service) => service === 'Beard Trim')}
                              />
                            </label>
                            <div>
                            <div className="list-item-names-b5">Hair</div>
                            </div>
                          </Label>
                          <Label for="Haircut" className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service"
                                value="Haircut"
                                id='Haircut'
                                onChange={addService}
                                checked={service.some((service) => service === "Haircut")}
                              />
                            </label>
                            <div>
                            <div className="list-item-names-a5">Haircut</div>
                            <div className="list-item-names-c5">30 min</div>
                            </div>
                          </Label>
                          <Label for='Beard-Trim' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service"
                                value="Beard Trim"
                                id='Beard-Trim'
                                onChange={addService}
                                checked={service.some((service) => service === "Beard Trim")}
                              />
                            </label>
                            <div>
                            <div className="list-item-names-a5">Beard Trim</div>
                            <div className="list-item-names-c5">30 min</div>
                            </div>
                          </Label>
                          <Label for='Bows-&-Lashes' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service"
                                value="Classic Fill"
                                id='Bows-&-Lashes'
                                onChange={addService}
                                checked={service.some((service) => service === 'Classic Fill')}
                              />
                            </label>
                            <div>
                            <div className="list-item-names-b5">Brows & Lashes</div>
                            </div>
                          </Label>
                          <Label for='Classic-Fill' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="service"
                                value="Classic Fill"
                                id='Classic-Fill'
                                onChange={addService}
                                checked={service.some((service) => service === 'Classic Fill')}
                              />
                            </label>
                            <div>
                            <div className="list-item-names-a5">Classic Fill</div>
                            <div className="list-item-names-c5">1 h</div>
                            </div>
                          </Label>
                          <div className="d-flex justify-content-center mt-1">
                            <Button
                              color="dark me-1"
                              onClick={() => setCenteredModal1(!centeredModal1)}
                              outline
                            >
                              close
                            </Button>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal1(!centeredModal1)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
            </Modal>

            {/* //Commission modal */}
            <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered my-modal-va p-0'>
          <div className="top-info-vc">
            <div className='d-flex justify-content-between'>
           <div className='text-va'>Commission</div>
           <div onClick={() => setCenteredModal(!centeredModal)}><X style={{cursor:'pointer'}} size={30}/></div>
           </div>
           <div className='text-vf' style={{color:'rgba(0, 0, 0, 0.9)'}}>Set how much commission Kondeti can make. You can set tiered commission based
on different sales ranges for services, products, vouchers and memberships.</div>
</div>
      <div className="top-info-vc box-vd">
        <div className='me-1 input-va'>
<Label className='form-label text-vb' for='default-picker'>
        Effective date
      </Label>
      <Flatpickr className='form-control' value={picker3} onChange={date => setPicker3(date)} id='default-picker' />
      <div className="text-ve fs-6" style={{marginTop:"5px"}}>The first day Kondeti gets commission.</div>
      </div>
      <div className='input-va'>
      <Label className='form-label text-vb' for='select-lg'>
            Commission cycle
          </Label>
          <Input onChange={CollectCommissionData} value={commissionData.commission_cycle} type='select' name='commission_cycle' id='select-lg'>
            <option>Every day</option>
            <option>Every week</option>
            <option>Every 2 weeks</option>
            <option>Every 4 weeks</option>
            <option>Every month</option>
            <option>Every quarter</option>
            <option>Every 6 months</option>
            <option>Every year</option>
          </Input>
          <div className="text-ve fs-6" style={{marginTop:"5px"}}>If you set tiers for commission, this is the 
timeframe when the cycle will reset.</div>
</div>
          </div>
          <div className="top-info-vc">
          <div className='text-vb'>Service commission</div>
          <div style={{background:'rgba(229, 229, 229, 0.4)', display:display1}} >
            <div className='d-flex flex-row-reverse' style={{padding:'4px'}}>
          <X style={{cursor:'pointer'}} onClick={ () => { display1 === 'none' ? setDisplay1('block') : setDisplay1('none') }}/>
          </div>    
          <div className="commission-input-wrapper-va">
            <div className='d-flex'>
              <div>
                <Label className='text-vb'>
                  From
                </Label>
                <Input type='text' name="from" id='from' readOnly value='0.00' bsSize='lg'/>
              </div>
              <div className='ms-1 me-1'>
                <Label className='text-vb'>
                  to
                </Label>
                <Input type='text' name="to" id='to' readOnly value='&#8734;' bsSize='lg'/>
              </div>
            </div>
            <div className='d-flex'>
              <div className='box-ve'>
            <Label className='text-vb'>
                  Commission
                </Label>
            <InputGroup>
        <InputGroupText>%</InputGroupText>
        <Input name="service_commission" value={commissionData.service_commission} onChange={CollectCommissionData} bsSize='lg' placeholder='0.00' />
      </InputGroup>
      </div>
      <ButtonGroup style={{alignSelf:'end'}} className='ms-1 me-1 toggle-ua'>
          <Button color='success' onClick={() => setRSelected1('%')} active={rSelected1 === '%'}>
            %
          </Button>
          <Button color='success' onClick={() => setRSelected1("")} active={rSelected1 === ""}>
          </Button>
        </ButtonGroup>
            </div>
          </div>
          </div> 
          <div onClick={() => { display1 === 'none' ? setDisplay1('block') : setDisplay1('none') }} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></div>
          </div>
          <div className="top-info-vc">
          <div className='text-vb'>Product commission</div>
          <div style={{background:'rgba(229, 229, 229, 0.4)', display:display2}} >
            <div className='d-flex flex-row-reverse' style={{padding:'4px'}}>
          <X style={{cursor:'pointer'}} onClick={ () => { display2 === 'none' ? setDisplay2('block') : setDisplay2('none') }}/>
          </div>    
          <div className="commission-input-wrapper-va">
            <div className='d-flex'>
              <div>
                <Label className='text-vb'>
                  From
                </Label>
                <Input type='text' name="from" id='from' readOnly value='0.00' bsSize='lg'/>
              </div>
              <div className='ms-1 me-1'>
                <Label className='text-vb'>
                  to
                </Label>
                <Input type='text' name="to" id='to' readOnly value='&#8734;' bsSize='lg'/>
              </div>
            </div>
            <div className='d-flex'>
              <div className='box-ve'>
            <Label className='text-vb'>
                  Commission
                </Label>
            <InputGroup>
        <InputGroupText>%</InputGroupText>
        <Input onChange={CollectCommissionData} value={commissionData.product_commission} name='product_commission' bsSize='lg' placeholder='0.00' />
      </InputGroup>
      </div>
      <ButtonGroup style={{alignSelf:'end'}} className='ms-1 me-1 toggle-ua'>
          <Button color='success' onClick={() => setRSelected2('%')} active={rSelected2 === '%'}>
            %
          </Button>
          <Button color='success' onClick={() => setRSelected2("")} active={rSelected2 === ""}>
          </Button>
        </ButtonGroup>
            </div>
          </div>
          </div> 
          <div onClick={() => { display2 === 'none' ? setDisplay2('block') : setDisplay2('none') }} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></div>
          </div>
          <div className="top-info-vc">
          <div className='text-vb'>Voucher commission</div>
          <div style={{ background:'rgba(229, 229, 229, 0.4)', display:display3}} >
            <div className='d-flex flex-row-reverse' style={{padding:'4px'}}>
          <X style={{cursor:'pointer'}} onClick={ () => { display3 === 'none' ? setDisplay3('block') : setDisplay3('none') }}/>
          </div>    
          <div className="commission-input-wrapper-va">
            <div className='d-flex'>
              <div>
                <Label className='text-vb'>
                  From
                </Label>
                <Input type='text' name="from" id='from' readOnly value='0.00' bsSize='lg'/>
              </div>
              <div className='ms-1 me-1'>
                <Label className='text-vb'>
                  to
                </Label>
                <Input type='text' name="to" id='to' readOnly value='&#8734;' bsSize='lg'/>
              </div>
            </div>
            <div className='d-flex'>
              <div className='box-ve'>
            <Label className='text-vb'>
                  Commission
                </Label>
            <InputGroup>
        <InputGroupText>%</InputGroupText>
        <Input onChange={CollectCommissionData} value={commissionData.voucher_commission} name='voucher_commission' bsSize='lg' placeholder='0.00' />
      </InputGroup>
      </div>
      <ButtonGroup style={{alignSelf:'end'}} className='ms-1 me-1 toggle-ua'>
          <Button color='success' onClick={() => setRSelected3("%")} active={rSelected3 === "%"}>
            %
          </Button>
          <Button color='success' onClick={() => setRSelected3("")} active={rSelected3 === ""}>
          </Button>
        </ButtonGroup>
            </div>
          </div>
          </div> 
          <div onClick={() => { display3 === 'none' ? setDisplay3('block') : setDisplay3('none') }} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></div>
          </div>
          <div className="top-info-vc">
          <div className='text-vb'>Membership commission</div>
          <div style={{background:'rgba(229, 229, 229, 0.4)', display:display4}} >
            <div className='d-flex flex-row-reverse' style={{padding:'4px'}}>
          <X style={{cursor:'pointer'}} onClick={ () => { display4 === 'none' ? setDisplay4('block') : setDisplay4('none') }}/>
          </div>    
          <div className="commission-input-wrapper-va">
            <div className='d-flex'>
              <div>
                <Label className='text-vb'>
                  From
                </Label>
                <Input type='text' name="from" id='from' readOnly value='0.00' bsSize='lg'/>
              </div>
              <div className='ms-1 me-1'>
                <Label className='text-vb'>
                  to
                </Label>
                <Input type='text' name="to" id='to' readOnly value='&#8734;' bsSize='lg'/>
              </div>
            </div>
            <div className='d-flex'>
              <div className='box-ve'>
            <Label className='text-vb'>
                  Commission
                </Label>
            <InputGroup>
        <InputGroupText>%</InputGroupText>
        <Input onChange={CollectCommissionData} value={commissionData.membership_commission} name='membership_commission' bsSize='lg' placeholder='0.00' />
      </InputGroup>
      </div>
      <ButtonGroup style={{alignSelf:'end'}} className='ms-1 me-1 toggle-ua'>
          <Button color='success' onClick={() => setRSelected4("%")} active={rSelected4 === "%"}>
            %
          </Button>
          <Button color='success' onClick={() => setRSelected4("")} active={rSelected4 === ""}>
          </Button>
        </ButtonGroup>
            </div>
          </div>
          </div> 
          <div onClick={() => { display4 === 'none' ? setDisplay4('block') : setDisplay4('none') }} className="btn-vc"><span className="plus-va me-1">+</span><span className="text-vf">Add commission</span></div>
          </div>
          <ModalFooter>
            <Button color='dark' onClick={() => setCenteredModal(!centeredModal)}>
              Cancel
            </Button>
            <Button color='dark' onClick={() => setCenteredModal(!centeredModal)}>
              Save
            </Button>
            </ModalFooter>
        </Modal>
        </div>
    )
}

export default AddTeamMemberForm