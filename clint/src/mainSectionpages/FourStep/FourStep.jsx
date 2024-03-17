import React, { useEffect, useRef } from 'react'
import './FourStep.css'
import { PiCarSimpleBold } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const FourStep = () => {
  


  //animation
  
  useGSAP(()=>{
    gsap.from(".fourstep_heading ",{
      y:-100,
      duration:0.5,
      scale:0.1,
      scrollTrigger:{
        trigger:".fourstep_heading ",
        scrub:2,
      }
    })

    gsap.from('.fourStepCarPara',{
      x:-20,
      yoyo:true,
      scrollTrigger:{
        trigger:".fourStepCarPara",
        scrub:2,
        
      }
    })
  })

 
 
  return (
    <>
      <div className="container-fluid mt-5 fourstepmaincontainer" >
        <div className="container ">
          <div className="row">
            <p className="fourstep_post text-center mt-5">
              How is Work
            </p>
            <h1  style={{ fontWeight: "bolder" }} className="fourstep_heading text-center">
              Make It Happens In 4 Steps...

            </h1>
          </div>

          <div className="row mt-5 mb-5 fourstepmaincontainer_sub">
            <div className="col-sm-3 foursStep_Card_parent">
              <div className='foruStep_Card'>
                <h1 className="text-center"><PiCarSimpleBold /></h1><span style={{ fontSize: "30px" }}></span>
              </div>
              <p className='fourStepCarPara'>Select Your Car</p >
            </div>
            <div className="col-sm-3  foursStep_Card_parent">
              <div className='foruStep_Card'>
                <h1 className="text-center"><FaWpforms /></h1><span style={{ fontSize: "30px" }}></span>
              </div>
              <p className='fourStepCarPara'>Booking & Confirm</p >
            </div>
            <div className="col-sm-3  foursStep_Card_parent">
              <div className='foruStep_Card'>
                <h1 className="text-center"><MdPayment /></h1><span style={{ fontSize: "30px" }}></span>
              </div>
              <p className='fourStepCarPara'>Booking payment</p >
            </div>
            <div className="col-sm-3  foursStep_Card_parent">
              <div className='foruStep_Card'>
                <h1 className="text-center"><FaCarSide /></h1>
              </div>
              <p className='fourStepCarPara'>Enjoy the car</p >
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default FourStep
