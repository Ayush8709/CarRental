import React from 'react'
import './Footer.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="container-fluid footerParent mt-5">
      <div className="container mt-5 footerSubParent">
        <div className="row footerRow">
            <div className="col-sm-4  footerAllCol">
              <h1>CARRENTAL</h1>
              <p>Welcome to our premier car rental website, where convenience, affordability, and quality meet seamlessly. At CARRENTAL, we redefine the car rental experience, ensuring your journey is not only hassle-free but also memorable.</p>
              <div className='footersocalmeida_icon'>
              <Link to=""><span><FaFacebook /></span></Link>  
                <Link to=""> <span><FaLinkedin /></span></Link>
                <Link to=""><span><FaGithub /></span> </Link>
                <Link to=""><span><FaTwitterSquare /></span> </Link>
                 </div>
            </div>
            <div className="col-sm-2 footerAllCol">
              <h2  className='footerh2'>Quick Links</h2>
              <p><span><IoIosArrowForward /></span> <Link to="/about">About</Link></p>
              <p><span><IoIosArrowForward /></span> <Link to="">Rent</Link></p>
              <p><span><IoIosArrowForward /></span> <Link to="">Reservation</Link></p>
              <p><span><IoIosArrowForward /></span> <Link to="/contact">Contact Us</Link></p>
            </div>
            <div className="col-sm-3 footerAllCol">
            <h2 className='footerh2'>Useful Links</h2>
            <p><span><IoIosArrowForward /></span> <Link to="">Privacy Policy</Link></p>
              <p><span><IoIosArrowForward /></span> <Link to="">Term and Conditions</Link></p>
              <p><span><IoIosArrowForward /></span> <Link to="">Discover</Link></p>
              <p><span><IoIosArrowForward /></span> <Link to="">Support</Link></p>
            </div>
            <div className="col-sm-3 footerAllCol">
              <h2 className='footerh2'>Subscribe Our Newslatter</h2>
              <p className='footerPara'>Booking with us is effortless. Our user-friendly interface allows you to browse, select, and reserve your desired vehicle with just a few clicks. Plus, with flexible rental durations and competitive rates, we cater to both short-term and long-term rental needs, ensuring flexibility for every traveler.</p>
              <div className="footerButton">
                 <input type="email" placeholder='Your Email' className='footerInput'/>
              <button className='btn btn-outline-primary'>Subscribe</button>
              </div>
             
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
