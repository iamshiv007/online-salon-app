import React, {useState} from "react"
import Ticket from "../../assets/images/images-shiv/Ticket.svg"
import Modulo from "../../assets/images/images-shiv/modulo.svg"
import Database from "../../assets/images/images-shiv/database.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import { X, Clock } from 'react-feather'
import  Progress from './Progress'
import './promote-css/StepOne.css'
import { Alert } from "reactstrap"

const StepOne = () => {

  //For deal name
  const [dealType, setDealType] = useState('Promotion')
  const [visible1, setVisible1] = useState(false)

  //On click of deal boxes
  const selectDeal1 = () => {
    setDealType('Promotion')
  }
  const selectDeal2 = () => {
    setDealType('Splash sale')
  }
  const selectDeal3 = () => {
    setDealType('Off-peak pricing')
  }
  const selectDeal4 = () => {
    setDealType('Last-minute offer')
  }

  const navigate = useNavigate()

  //On next step click
   const dealSelected = () => {
    setVisible1(true)
    setTimeout(() => {
      setVisible1(false)
      navigate('/promote/steptwo')
    }, 2000)
   }

  return (
    <div className="step-one-container">
        {/* Alert Component */}
        <div className="my-alert-data">
      <Alert color='primary' isOpen={visible1}>
        <div className=''>
        <div>{`{`}</div>
            <div>{`"Deal Type" : " ${dealType}"`}</div>
        <div>{`}`}</div>
        <div className="text-primary">Wait..</div>
        </div>
      </Alert>
      </div>
      <div className="head-component-wrapper">
        <div className="head-container">
        <div className="btns-wrapper">
          <div className="left-side">
            <div className="cross-symbol">
              <NavLink to="/promote/deals">
                <X size={45} strokeWidth={1} style={{color:'black'}} />
              </NavLink>
            </div>
          </div>
          <div className="right-side">
            <div className="next-step-btn">
              <div onClick={dealSelected}> Next step </div>
            </div>
          </div>
        </div>
        <div className="progress-wrapper">
          <Progress width='25%' />
        </div>
      </div>
      </div>
      <div className="step-one-body-container">
        <div className="step-one-body-wrapper">
          <div className="step-one-heading-box">
            <p className="text-a3"
            >
              Create a deal
            </p>
            <h3 
            className="text-b3"
            >
              Select deal type
            </h3>
            <p
            className="text-c3"
            >
              Choose the type of deal you want to create.
            </p>
          </div>
          <div className="deal-types-container">
            <div className="deal-types-container-a">
              {/* Promotion */}
              <div
                  className="deal-type promotion-box"
                  onClick={selectDeal1}
                  style={dealType === "Promotion" ? {border:'1px solid #1bb70b'} : {}}
                >
                <div className="promotion-text">
                  <p
                  className="text-d3"
                  >
                    Promotion
                  </p>
                  <p className="text-e3"
                  >
                    Create a discount redeemed by clients entering the code when
                    booking online or during checkout at Point of Sale
                  </p>
                </div>
                <div className="promotion-img deal-type-img">
                  <img src={Ticket} alt="Ticket" />
                </div>
              </div>
              {/* Splash sale */}
              <div
                className="deal-type splash-sale-box"
                onClick={selectDeal2}
                style={dealType === "Splash sale" ? {border:'1px solid #1bb70b'} : {}}
              >
                <div className="splash-sale-text">
                  <p className="text-d3"
                  >
                    Splash sale&nbsp;&nbsp;
                    <span className="text-f3"
                    >
                      COMING SOON
                    </span>
                  </p>
                  <p  className="text-e3"
                  >
                    Run an automatic promotion for online bookings and sales
                  </p>
                </div>
                <div className="splash-sale-img deal-type-img">
                  <img style={{width:'22px'}} src={Modulo} alt="Modulo" />
                </div>
              </div>
              {/* Off-peak pricing */}
              <div
                className="deal-type off-peak-pricing-box"
                onClick={selectDeal3}
                style={dealType === "Off-peak pricing" ? {border:'1px solid #1bb70b'} : {}}
              >
                <div className="off-peak-pricing-text">
                  <p className="text-d3"
                  >
                    Off-peak pricing&nbsp;&nbsp;
                    <span className="text-f3"
                    >
                      COMING SOON
                    </span>
                  </p>
                  <p className="text-e3"
                  >
                    Dynamically change your online service prices to boost your
                    sales when you are less busy
                  </p>
                </div>
                <div className="off-peak-pricing-img deal-type-img">
                  <img src={Database} alt="Database" />
                </div>
              </div>
              {/* Last-minute offer */}
              <div
                className="deal-type last-minute-offer-box"
                onClick={selectDeal4}
                style={dealType === "Last-minute offer" ? {border:'1px solid #1bb70b'} : {}}
              >
                <div className="last-minute-offer-text">
                  <p className="text-d3"
                  >
                    Last-minute offer&nbsp;&nbsp;
                    <span className="text-f3"
                    >
                      COMING SOON
                    </span>
                  </p>
                  <p className="text-e3"
                  >
                    Apply a discount for bookings made just before an
                    appointment startsd
                  </p>
                </div>
                <div className="last-minute-offer-img deal-type-img">
                  <Clock/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne
