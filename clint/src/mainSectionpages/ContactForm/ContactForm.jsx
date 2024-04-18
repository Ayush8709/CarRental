import React from 'react'
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa6";
import './ContactForm.css'

const ContactForm = () => {
    return (
        <>
            <div className="container-fluid contactformparent mt-5">
                <div className="container mt-5">
                    <div className="row contactformparent_mainRow" >
                        <div className="col-sm-6">
                            <div className='contactformDetails'>

                                <p className='contactformDetails_para1'>Need A Car Rent</p>
                                <h1><strong className='contactformDetails_heading'>Dont't Hesitate To Contact Us</strong> </h1>
                                <p className='contactformDetails_para2'>At CARRENTAL, we value your feedback, inquiries, and concerns. Our dedicated team is here to provide you with prompt and personalized assistance to ensure your satisfaction.</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className='contactformDetails_para3'>Ranchi</p>
                                    <div className='contactformDetails_location_section'>
                                        <p><span style={{ color: "yello" }} className='contactformDetails_location_icon'><FaLocationDot /></span> Lalpur, Ranchi,jharkhand 834001</p>
                                        <p><span className='contactformDetails_location_icon'><FaPhoneAlt /></span>+91 8709916119</p>
                                        <p><span className='contactformDetails_location_icon'><MdMarkEmailRead />
                                        </span>ayushsingh0455@gmai.com</p>
                                        <p><span className='contactformDetails_location_icon'><FaStopwatch />
                                        </span>ayushsingh0455@gmai.com</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <p className='contactformDetails_para3'>Daltonganj</p>
                                    <div className='contactformDetails_location_section'>
                                        <p><span style={{ color: "yello" }} className='contactformDetails_location_icon'><FaLocationDot /></span> Lalpur, Ranchi,jharkhand 834001</p>
                                        <p><span className='contactformDetails_location_icon'><FaPhoneAlt /></span>+91 8709916119</p>
                                        <p><span className='contactformDetails_location_icon'><MdMarkEmailRead />
                                        </span>ayushsingh0455@gmai.com</p>
                                        <p><span className='contactformDetails_location_icon'><FaStopwatch />
                                        </span>ayushsingh0455@gmai.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 contactformparent_form_field"  >
                            <img src="https://img.freepik.com/free-vector/car-rental-service-facebook-template_23-2150512081.jpg?t=st=1713432184~exp=1713435784~hmac=55f6c7c379106a6bac7d7f3a14baef7d5925824eefa4b73ae5fe50bb418cb08d&w=826" style={{ height: '33pc', width: '100%' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm
