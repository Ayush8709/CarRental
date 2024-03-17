import React from 'react'
import './RentalService.css'
import { FaHandHoldingUsd } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import carService from '../../../public/images/Service.jpg'


const RentalService = () => {


  return (
    <>
      <div className="container-fluid mt-5 rentalserviceParent">
        <div className="container">
          <div className="row mt-5  rentalserviceFirstRow">
            {/* this is my main first coloum */}
            <div className="col-sm-5 rentalserviceFirstCol">
              <img src={carService} className="rentalserviceFirstCol_image" alt="" width='100%'/>
            </div>

            {/* this is my main secound coloum */}
            <div className="col-sm-7 rentalserviceSecountCol">
              <span className='rentalserviceSecountCol_first_span'>Our Services</span>
              <h1 className='rentalserviceSecountCol_first_heading'>
                Rental Service With a Wide Range of Vehicles.
              </h1>
              <p className='rentalserviceSecountCol_first_paragraph'>
              Welcome to our car rental service, where convenience meets reliability and affordability! Our car rental website offers a seamless experience for all your transportation needs, whether you're traveling for business or leisure.
              </p>
              <div className='rentalserviceSecountCol_secound_row'>
                <div className="row">
                  <div className="col-sm-6 ">
                    <span className="col-sm-6 rentalserviceSecountCol_secound_row_logo"><FaHandHoldingUsd /> </span>
                    <h1 className='rentalserviceSecountCol_secound_row_h1'>Competitive Pricing</h1>
                    <p className='rentalserviceSecountCol_secound_row_p'>No hidden fees or surprises! We believe in transparent pricing, so the price you see is the price you pay. Our competitive rates ensure that you get the best value for your money.</p>
                  </div>
                  <div className="col-sm-6 ">
                    <span className="rentalserviceSecountCol_secound_row_logo"><VscWorkspaceTrusted /></span>
                    <h1 className='rentalserviceSecountCol_secound_row_h1'>  Truse Rent Service</h1>
                    <p className='rentalserviceSecountCol_secound_row_p'>With multiple pickup and drop-off locations conveniently located across various cities, airport terminals, and popular destinations, renting a car has never been easier.</p>
                  </div>
                </div>
              </div>
              <div className='rentalserviceSecountCol_secound_row'>
                <div className="row">
                  <div className="col-sm-6 ">
                    <span className="col-sm-6 rentalserviceSecountCol_secound_row_logo"><FaHandHoldingUsd /> </span>
                    <h1 className='rentalserviceSecountCol_secound_row_h1'>Mainten&Safety</h1>
                    <p className='rentalserviceSecountCol_secound_row_p'>our safety is our top priority. All our vehicles undergo regular maintenance checks to ensure they're in top condition. </p>
                  </div>
                  <div className="col-sm-6 ">
                    <span className="rentalserviceSecountCol_secound_row_logo"><VscWorkspaceTrusted /></span>
                    <h1 className='rentalserviceSecountCol_secound_row_h1'>  24/7 Support</h1>
                    <p className='rentalserviceSecountCol_secound_row_p'>Our dedicated customer support team is available round-the-clock to assist you with any queries or concernsyour reservation or during your rental period, we've got you covered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RentalService
