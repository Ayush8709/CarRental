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
                            <div>
                                <h1>Booking Form</h1>
                                <p>At Easy Car Booking, we strive to make your car rental experience seamless and hassle-free. With our user-friendly platform, booking a car has never been easier.</p>
                            </div>

                            <div className='contactformparent_form'>
                                <form>
                                    <div className='contactformparent_form_textfield'>
                                        <input  className='contactformparent_form_textfield_area' type="text" maxLength="30" size="30" placeholder='Your name' required />
                                        <input className='contactformparent_form_textfield_area' type="text" placeholder='Your Number' maxLength="10" size="10" required />
                                    </div>

                                    <div className='contactformparent_form_textfield'>
                                        <input className='contactformparent_form_textfield_area' type="email" maxLength="30" size="30" placeholder='Your Email' required />

                                        {/* <label for="cars"></label> */}
                                        <select id="cars" name="cars" className='contactformparent_form_textfield_area'>
                                            <option value="volvo">Choose a car:</option>
                                            <option value="saab">Saab</option>
                                            <option value="fiat">Fiat</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <input type="submit" className='contactformparent_form_carSelect_button'/>
                                    </div>

                                        <div className='contactformparent_form_textfield'>
                                          
                                            <label htmlFor="pickupdate"style={{fontSize:"18px", fontFamily:"emoji"}}>Picke Up Date</label>
                                            <input className='contactformparent_form_textfield_area' type="date" id='pickupdate'/>

                                        </div>

                                        <div>
                                            <textarea  className='contactformparent_form_textfield_textarea' name="" id="" cols="62" rows="5" placeholder='Your Request' maxLength="40"></textarea>
                                            {/* <input className='contactformparent_form_textfield_area' type="text" maxLength="30" size="30" placeholder='Your Request' required /> */}
                                        </div>

                                        <button className='btn btn-lg btn-primary contactformparent_form_submit'>Submit Now</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm
