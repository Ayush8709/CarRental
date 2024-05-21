import React, { useEffect, useState } from 'react'
import axios from 'axios'
//animatin laibrary
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const CarBookingForm = () => {

  //animation laibrary
  useGSAP(()=>{
    gsap.from('.car_booking_heading',{
      y:-100,
      duration:0.8,
      scale:0.5
    })

    gsap.from('.booking_input',{
        y:-50,
        duration:0.8,
        scale:0.5
    })
})

  const [details, setDetails] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    zip: ''
  })

  const changeUserDeatilsData = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    })
  }

  const submitUserDetailsData = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://car-rental-gold-gamma.vercel.app/api/v1/usedetails/userdetail', details)
      alert('Data Send Sussfully')
    } catch (error) {
      alert("Error Data Not Send")
    }
  }





  return (
    <>
      <div className="container-fluid bg-light">
        <div className="container pt-5 pb-5 bg-light">
          <h1 className="text-center mb-5 car_booking_heading">User Details</h1>
          <form className="w-full max-w-lg" onSubmit={submitUserDetailsData}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label text-uppercase  booking_input" htmlFor="grid-first-name" style={{ fontSize: "20px", fontWeight: 'bold' }}>
                  Full Name
                </label>
                <input className="form-control mb-3" id="grid-first-name" name='name' value={details.name} onChange={changeUserDeatilsData} type="text" placeholder="Abc" style={{ borderRadius: '20px' }} required />
              </div>
              <div className="col-md-6">
                <label className="form-label text-uppercase " style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-last-name">
                  Phone
                </label>
                <input className="form-control" id="grid-last-name" name='phone' value={details.phone} onChange={changeUserDeatilsData} type="text" placeholder="Phone" style={{ borderRadius: '20px' }} required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4">
                <label className="form-label text-uppercase booking_input" style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-password">
                  Email
                </label>
                <input className="form-control mb-3" id="grid-password" name='email' value={details.email} onChange={changeUserDeatilsData} type="email" placeholder="email" style={{ borderRadius: '20px' }} required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <label className="form-label text-uppercase booking_input" style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-city">
                  City
                </label>
                <input className="form-control" id="grid-city" name='city' value={details.city} onChange={changeUserDeatilsData} type="text" placeholder="Ranchi" style={{ borderRadius: '20px' }} required />
              </div>
              <div className="col-md-4 mb-4 disabled">
                <label className="form-label text-uppercase booking_input" style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-state">
                  Country
                </label>
                <input className="form-control disabled" id="grid-zip" type="text" value={'India'} placeholder="india" style={{ borderRadius: '20px' }} required />
              </div>
              <div className="col-md-4">
                <label className="form-label text-uppercase booking_input" style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-zip">
                  Zip
                </label>
                <input className="form-control" id="grid-zip" name='zip' value={details.zip} onChange={changeUserDeatilsData} type="text" placeholder="822124" style={{ borderRadius: '20px' }} required />
              </div>
            </div>
              
          <div className='d-flex justify-content-between mt-4'>
            <h1>Total</h1>
            <button className='btn btn-lg btn-outline-primary' type='submit'> Pay Now {'>>'}</button>
          </div>
          </form>


        </div>
      </div>
    </>
  );
}

export default CarBookingForm
