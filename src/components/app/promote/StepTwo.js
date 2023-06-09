import React, { useState } from "react"
import Progress from "./Progress"
import { NavLink, useNavigate } from "react-router-dom"
import Flatpickr from "react-flatpickr"
import { Modal, ModalBody, Button, Alert, Input, InputGroup, InputGroupText, Label } from "reactstrap"
import { Search, X } from "react-feather"
import './promote-css/StepTwo.css'

const StepTwo = () => {
  //For required field
  const [redStyle, setRedStyle] = useState({ display: "none" })
  const [redStyle2, setRedStyle2] = useState({ display: "none" })
  const [redStyle3, setRedStyle3] = useState({ display: "none" })
  const [redBox, setRedBox] = useState()
  const [redBox2, setRedBox2] = useState()
  const [redBox3, setRedBox3] = useState()

  //For modals
  const [centeredModal1, setCenteredModal1] = useState(false)
  const [centeredModal2, setCenteredModal2] = useState(false)
  const [centeredModal3, setCenteredModal3] = useState(false)
  const [centeredModal4, setCenteredModal4] = useState(false)

  //For name and description values
  const [promotionDetail, setPromotionDetail] = useState({name:"", description:""})

  //For product
  const [product, setProduct] = useState(["Product1", "Product2", "Product3"])

  //For service
  const [service, setService] = useState(["Haircut", "Beard Trim", "Classic Fill"])

 //For date picker
  const [picker1, setPicker1] = useState(new Date())
  const [picker2, setPicker2] = useState()

  //For color change of promotion value type box
  const [color1, setColor1] = useState('#1bb70b')
  const [color2, setColor2] = useState('white')

  //For select promotion value type
  const [promotionValueType, setPromotionValueType] = useState('%')

  //For write promotion value in input field
  const [myPromotionValue, setMyPromotionValue] = useState(10.00)

  //For hide input fields
  const [block1, setBlock1] = useState({display:'none'})
  const [block2, setBlock2] = useState({display:'none'})

  //For maxUse value
  const [maxUseValue, setMaxUseValue] = useState(0)

  //For minPurchase value
   const [minPurchaseValue, setMinPurchaseValue] = useState(0)

   //For check toggle one true or false
   const [toggle1, setToggle1] = useState(false)

   //For checked or unchecked toggle2
   const [toggle2, setToggle2] = useState(false)
   
   //For checked or unchecked toggle3
   const [toggle3, setToggle3] = useState(false)

   //For alert compo.
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)

  //For add and remove products 
  const addProduct = (event) => {
    if (event.target.name === "all_products") {
      if (product.length === 3) {
        setProduct([])
      } else {
        setProduct(["Product1", "Product2", "Product3"])
      }
  } else { 
    if (product.includes(event.target.value)) {
      const deselect = product.filter(
        (myproduct) => myproduct !== event.target.value
      )
      setProduct(deselect)
    } else {
      setProduct([...product, event.target.value])
    }
  }
  }

  //For add and remove services
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

  //For change box color
  const promotionValue1 = (e) => {
    setPromotionValueType(e.target.textContent)
    setColor2('white')
    setColor1('#1bb70b')
  }
  const promotionValue2 = (e) => {
    setPromotionValueType(e.target.textContent)
    setColor1('white')
    setColor2('#1bb70b')
  }
  //For set promotion value type
  const promotionValue = (e) => {
    setMyPromotionValue(e.target.value)
  }

  //For update values of name and description
  const updateValue = (current) => {
    setPromotionDetail({...promotionDetail, [current.target.name]:current.target.value})
    // alert gone
    setRedStyle({display:'none'})
    setRedBox()
  }
  
  //For max use value
  const maxUse = (e) => {
    setMaxUseValue(e.target.value.toString())
    setRedBox2()
    setRedStyle2({display:'none'})
  }
  
  //For minimume purchase value
  const minPurchaseFun = (e) => {
    setMinPurchaseValue(e.target.value.toString())
    setRedBox3()
    setRedStyle3({display:'none'})
  }
  
  //For toggler-1
  const toggler1 = () => {
    if (toggle2 !== true) {
      setToggle1(!toggle1)
      if (!toggle1) {
        setMaxUseValue(1)
      } else {
        setMaxUseValue(0)
      }
    } else {
      setVisible1(true)
      setTimeout(() => {
        setVisible1(false)
      }, 3000)
      setToggle1(false)
    }
  }
  //For toggler-2
  const toggler2 = () => {
    if (toggle1) {
      setToggle2(false)
      setVisible2(true)
      setTimeout(() => {
        setVisible2(false)
      }, 3000)
    } else {
    if (!toggle2) {
      setBlock1({display:'block'})
      setToggle2(true)
      setMaxUseValue("")
    } else {
      setBlock1({display:'none'})
      setToggle2(false)
      setMaxUseValue(0)
      setRedBox2()
      setRedStyle2({display:'none'})
    }
  }
}
//For toggler-3
  const toggler3 = () => {
    setToggle3(!toggle3)
    if (!toggle3) {
      setBlock2({display:'block'})
      setMinPurchaseValue("")
    } else {
      setMinPurchaseValue(0)
      setBlock2({display:'none'})
      setRedBox3()
      setRedStyle3({display:'none'})
    }
  }

  //For navigate next step with condition
  const navigate = useNavigate()

  //On next step click
  const formHandle = () => {
    if (promotionDetail.name === "") {
      //Show alert (name)
      setRedStyle({ display: "block" })
      setRedBox({ border: "1px solid red"})
      setVisible3(true)
      setTimeout(() => {
        setVisible3(false)
      }, 3000)
    } else if (maxUseValue === "") {
      setRedBox2({border:'1px solid red'})
      setRedStyle2({display:'block'})
      setVisible3(true)
      setTimeout(() => {
        setVisible3(false)
      }, 3000)
    } else if (minPurchaseValue === "") {
      setRedBox3({border:'1px solid red'})
      setRedStyle3({display:'block'})
      setVisible3(true)
      setTimeout(() => {
        setVisible3(false)
      }, 3000)
    } else {
      //Navigate
      setVisible4(true)
      setTimeout(() => {
        setVisible4(false)
        navigate("/promote/stepthree")
      }, 5000)
      //Call action 
    //   console.log([promotionDetail.name, promotionDetail.description, service, product, picker1, picker2, myPromotionValue, promotionValueType, maxUseValue, minPurchaseValue])
    }
  }

  return (
    <div className="step-two-container">
      {/* for alerts */}
      <div className="my-alert-data">
      <Alert color='primary' isOpen={visible4}>
        <div>{`{`}</div>
        <div>{`"Name" : "${promotionDetail.name}"`}</div>
        <div>{`"Description" : "${promotionDetail.description}"`}</div>
        <div>{`"Services"  : "${service}"`}</div>
        <div>{`"Products" : "${product}"`}</div>
        <div>{`"Start Date" : "${picker1}"`}</div>
        <div>{`"End Date" : "${picker2}"`}</div>
        <div>{`"Promotion" : "${myPromotionValue + promotionValueType}"`}</div>
        <div>{`"Max Use Limit" : "${maxUseValue}"`}</div>
        <div>{`"Min Purchase Amount" : "${minPurchaseValue}"`}</div>
        <div>{`}`}</div>
        <div className="text-primary">Wait..</div>
      </Alert>
      </div>
      <div className="my-alert-comp">
      <Alert color="danger" isOpen={visible1}>
        <div className='text-center'>
        Limit total number of uses is checked
        </div>
      </Alert>
      </div>
       <div className="my-alert-comp">
      <Alert color="danger" isOpen={visible2}>
        <div className='text-center'>
        Limit to one use per client is checked
        </div>
      </Alert>
      </div>
       <div className="my-alert-comp">
      <Alert color="danger" isOpen={visible3}>
        <div className='text-center'>
        Please fill all required fields
        </div>
      </Alert>
      </div>
      <div className="head-component-wrapper">
        <div className="head-container">
          <div className="btns-wrapper">
            <div className="left-side left-side-a5">
              <div className="cross-symbol">
                <NavLink to="/promote/deals">
                <X size={45} strokeWidth={1} style={{color:'black'}} />
                </NavLink>
              </div>
              <div className="previous-page">
                <NavLink  to="/promote/stepone" style={{ color: "#1BB70B" }}>
                  Previous
                </NavLink>
              </div>
            </div>
            <div className="right-side">
              <div className="next-step-btn">
                <div className="next-btn-a5" onClick={formHandle}>
                  Next step{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="progress-wrapper">
            <Progress width="50%" />
          </div>
        </div>
      </div>
      <div className="step-two-body-container">
        <div className="step-two-body-wrapper">
          <div className="step-two-heading-box">
            <p className="text-a10">Create a deal</p>
            <h3 className="text-b10">Customise promotion details</h3>
            <p className="text-c10">
              Choose how and when to apply the promotion. Learn more
            </p>
          </div>
          <div className="deal-costomise-container">
            <div className="deal-costomise-container-a">
              <div
                className="top-description-text-wrapper"
              >
                <p className="text-c5">Basic details</p>
                <p className="text-d5" style={{ marginTop: "2px" }}>
                  Choose a unique name, active dates and items to sell with the
                  promotion
                </p>
              </div>
              <div
                className="detail-container"
              >
                <div className="input-wrapper">
                  <div className="name-input">
                    <label className="text-e5" htmlFor="">
                      Name
                    </label>
                    <div className="input-wrapper-a">
                      <input
                        style={redBox}
                        type="text"
                        onChange={updateValue}
                        name="name"
                        id="name"
                        className="input-a"
                        placeholder="Enter promotion name here"
                      />
                      <p style={redStyle} className="text-a5">
                        This field is required
                      </p>
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "25px" }}>
                    <div className="desc-box d-flex justify-content-between">
                      <label htmlFor="" className="text-e5">
                        Description{" "}
                        <span className="text-d10">&#40;Optional&#41;</span>
                      </label>
                      <p>0/600</p>
                    </div>
                    <div className="input-wrapper-b">
                      <textarea
                        maxLength={600}
                        type="text"
                        onChange={updateValue}
                        name="description"
                        id=""
                        className="input-a"
                        placeholder="Enter promotion description here"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="edit-options-wrapper"
                  style={{ marginTop: "20px"}}
                >
                  <div className="edit-option-heading">
                    <p className="text-e5" style={{ marginBottom: "20px" }}>
                      Apply promotion to
                    </p>
                  </div>
                  <div className="edit-options">
                    <div className="option-1 edit-option">
                      <div className="option-text">
                        <p className="text-f5">{service.length === 3 ? "All services" : `${service.length} services`}</p>
                      </div>
                      <div className="edit-btn">
                        <div
                          className="text-g5"
                          onClick={() => setCenteredModal1(!centeredModal1)}
                        >
                          Edit
                        </div>
                      </div>
                      {/* For services */}
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
                    </div>
                    <div className="option-2 edit-option">
                      <div className="option-text">
                        <p className="text-f5">{product.length === 3 ? "All products" : `${product.length} products`}</p>
                      </div>
                      <div className="edit-btn">
                        <div
                          className="text-g5"
                          onClick={() => setCenteredModal2(!centeredModal2)}
                        >
                          Edit
                        </div>
                      </div>
                      {/* For products */}
                      <Modal
                        isOpen={centeredModal2}
                        toggle={() => setCenteredModal1(!centeredModal2)}
                        className="modal-dialog-centered my-modal-va p-0"
                      >
          <div className="d-flex justify-content-between p-1"><div className="modal-option-heading-a5">Select products</div><X style={{cursor:'pointer'}} onClick={() => setCenteredModal2(!centeredModal2)}/></div>
                        <ModalBody>
                          <div className="modal-option-search-box-wrapper-a5">
                          <InputGroup className="input-group-merge mt-1 mb-1">
        <InputGroupText>
          <Search size={18} />
        </InputGroupText>
        <Input style={{fontSize:'22px', fontWeight:'500', color:'black'}} placeholder='' />
      </InputGroup>                          </div>
                          <Label className="select-box-mini" for='all_products'>
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="all_products"
                                value="Product1, Product2, Product3"
                                onChange={addProduct}
                                id="all_products"
                                checked={["Product1", "Product2", "Product3"].every(p => product.includes(p))}
                                />
                            </label>
                            <div className="list-item-names-d5">All products</div>
                          </Label>
                          <Label for="product1" className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="product1"
                                value="Product1"
                                id='product1'
                                onChange={addProduct}
                                checked={product.some((product) => product === 'Product1')}
                              />
                            </label>
                            <div className="list-item-names-a5">product1</div>
                          </Label>
                          <Label for='product2' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="Product2"
                                value="Product2"
                                id='product2'
                                onChange={addProduct}
                                checked={product.some((product) => product === 'Product2')}
                              />
                            </label>
                            <div className="list-item-names-a5">product2</div>
                          </Label>
                          <Label for='product3' className="select-box-mini">
                            <label
                              className="edit-list-label"
                            >
                              <Input
                                className="edit-checkbox"
                                type="checkbox"
                                name="product3"
                                value="Product3"
                                id='product3'
                                onChange={addProduct}
                                checked={product.some((product) => product === 'Product3')}
                              />
                            </label>
                            <div className="list-item-names-a5">product3</div>
                          </Label>
                          <div className="d-flex justify-content-center mt-1">
                            <Button
                              color="dark me-1"
                              onClick={() => setCenteredModal2(!centeredModal2)}
                              outline
                            >
                              close
                            </Button>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal2(!centeredModal2)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                    <div className="option-3 edit-option">
                      <div className="option-text">
                        <p className="text-f5">No memberships</p>
                      </div>
                      <div className="edit-btn">
                        <div
                          className="text-g5"
                          onClick={() => setCenteredModal3(!centeredModal3)}
                        >
                          Edit
                        </div>
                      </div>
                      {/* for membership */}
                      <Modal
                        isOpen={centeredModal3}
                        toggle={() => setCenteredModal3(!centeredModal3)}
                        className="modal-dialog-centered my-modal-va p-0"
                      >
          <div className="d-flex justify-content-between p-1"><div className="modal-option-heading-a5">Select memberships</div><X style={{cursor:'pointer'}} onClick={() => setCenteredModal3(!centeredModal3)}/></div>
                        <ModalBody>
                          <div className="modal-option-search-box-wrapper-a5">
                          <InputGroup className="input-group-merge mt-1 mb-1">
        <InputGroupText>
          <Search size={18} />
        </InputGroupText>
        <Input style={{fontSize:'22px', fontWeight:'500', color:'black'}} placeholder='' />
      </InputGroup>                          </div>
                          <h1 className="mt-4 mb-4 text-center">
                            No Membership found
                          </h1>
                          <div className="d-flex justify-content-center">
                            <Button
                              color="dark me-1"
                              onClick={() => setCenteredModal3(!centeredModal3)}
                              outline
                            >
                              close
                            </Button>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal3(!centeredModal3)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                    <div className="option-4 edit-option">
                      <div className="option-text">
                        <p className="text-f5">No vouchers</p>
                      </div>
                      <div className="edit-btn">
                        <div
                          className="text-g5"
                          onClick={() => setCenteredModal4(!centeredModal4)}
                        >
                          Edit
                        </div>
                      </div>
                      {/* for voucher */}
                      <Modal
                        isOpen={centeredModal4}
                        toggle={() => setCenteredModal4(!centeredModal4)}
                        className="modal-dialog-centered my-modal-va p-0"
                      >
          <div className="d-flex justify-content-between p-1"><div className="modal-option-heading-a5">Select vouchers</div><X style={{cursor:'pointer'}} onClick={() => setCenteredModal4(!centeredModal4)}/></div>
                        <ModalBody>
                          <div className="modal-option-search-box-wrapper-a5">
                          <InputGroup className="input-group-merge mt-1 mb-1">
        <InputGroupText>
          <Search size={18} />
        </InputGroupText>
        <Input style={{fontSize:'22px', fontWeight:'500', color:'black'}} placeholder='' />
      </InputGroup>                          </div>
                          <h1 className="mt-4 mb-4 text-center">
                            No voucher found
                          </h1>
                          <div className="d-flex justify-content-center">
                            <Button
                              color="dark me-1"
                              onClick={() => setCenteredModal4(!centeredModal4)}
                              outline
                            >
                              close
                            </Button>
                            <Button
                              color="dark"
                              onClick={() => setCenteredModal4(!centeredModal4)}
                            >
                              Save
                            </Button>
                          </div>
                        </ModalBody>
                      </Modal>
                    </div>
                  </div>
                  <div className="date-container">
                    <div className="start-date-wrapper me-1">
                      <p className="text-e5">Start date</p>
                      <div className="select-box">
                        <Flatpickr
                          className="form-control"
                          value={picker1}
                          onChange={date => setPicker1(date)}
                        />
                      </div>
                    </div>
                    <div className="end-date-wrapper">
                      <p className="text-e5">End date</p>
                      <div className="select-box">
                      <Flatpickr
                          className="form-control"
                          value={picker2}
                          onChange={date => setPicker2(date)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="promotion-value-container">
              <div className="promotion-value-wrapper">
                <div className="top-description-text-wrapper">
                  <p className="text-c5">Promotion value and limits</p>
                  <p className="text-d5" style={{ marginTop: "2px" }}>
                    Reduce the price by a fixed amount or a percentage, and
                    limit the number of time this promotion can be used
                  </p>
                </div>
                <div className="body-container">
                  <p className="text-e5" style={{ marginBottom: "5px" }}>
                    Promotion value
                  </p>
                  <div className="box-container-wrapper">
                    <div className="box-container">
                      <div className="box-1">
                        <div className="promotion-value-type">
                          {promotionValueType}
                        </div>
                        <input
                          type="text"
                          value={myPromotionValue}
                          onChange={promotionValue}
                          className='myinput-a'
                        />
                      </div>
                      <div className="box-2">
                        <button
                          style={{
                            borderRadius: "4px 0 0 4px",
                            background:`${color1}`,
                            borderWidth:'1px 0 1px 1px'
                          }}
                          className="btn-b"
                          onClick={promotionValue1}
                        >
                          %
                        </button>
                        <button
                          style={{ borderRadius: "0 4px 4px 0",
                           background:`${color2}`,
                           borderWidth:'1px 1px 1px 0px'}}
                          className="btn-b"
                          onClick={promotionValue2}
                        >
                          INR
                        </button>
                      </div>
                    </div>
                    <div className="info-text text-j5">
                      Discount applies to each item in sale.
                    </div>
                  </div>
                  <div className="three-option-wrapper">
                    <div className="dabba1 dabba">
                      <div className="toggle-btn">
                      <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  style={{ width: "48px", height: "24px" }}
                  value='Limit to one use per client'
                  onClick={toggler1}
                  readOnly
                  checked={toggle1}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                ></label>
              </div>
                      </div>
                      <div className="btn-text">
                        <p className="text-i5">Limit to one use per client</p>
                        <p className="text-j5">
                          Each client will be able to use this promotion only
                          once.
                        </p>
                      </div>
                    </div>
                    <div className="dabba2 dabba">
                      <div className="toggle-btn">
                      <div className="form-check form-switch">
                      <input 
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        style={{ width: "48px", height: "24px" }}
                        value='Limit total number of uses'
                        onClick={toggler2}
                        readOnly
                        checked={toggle2}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      ></label>
                    </div>
                      </div>
                      <div className="btn-text">
                        <p className="text-i5">Limit total number of uses</p>
                        <p className="text-j5">
                          Set the total amount of times this promotion can be
                          used.
                        </p>
                      </div>
                    </div>
                    <div style={block1} className='block-input-box'>
                      <div className="text-k5">Max uses</div>
                      <div className='input-field-a max-uses' style={redBox2}><input type="number" onChange={maxUse} value={maxUseValue}/></div>
                      <p style={redStyle2} className="text-a5">
                        This field is required
                      </p>
                      </div>
                    <div className="dabba3 dabba">
                      <div className="toggle-btn">
                      <div className="form-check form-switch">
                     <input
                       className="form-check-input"
                       type="checkbox"
                       role="switch"
                       id="flexSwitchCheckDefault"
                       style={{ width: "48px", height: "24px" }}
                       value='Set minimum purchase amount'
                       onClick={toggler3}
                       checked={toggle3}
                       readOnly
                     />
                     <label
                       className="form-check-label"
                       htmlFor="flexSwitchCheckDefault"
                     ></label>
                   </div>
                      </div>
                      <div className="btn-text">
                        <p className="text-i5">Set minimum purchase amount</p>
                        <p className="text-j5">
                          The client must spend a minimum amount to qualify for
                          this promotion.
                        </p>
                      </div>
                    </div>
                    <div style={block2} className='block-input-box'>
                      <div className="text-k5">Minimum purchase amount</div>
                      <div className='input-field-a' style={redBox3}><div className='myspan-a'>INR</div><input type="number" value={minPurchaseValue} placeholder='100' onChange={minPurchaseFun}/></div>
                      <p style={redStyle3} className="text-a5">
                        This field is required
                      </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
