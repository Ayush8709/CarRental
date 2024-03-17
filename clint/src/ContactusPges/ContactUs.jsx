// This Components is Dieact link to app js in root folder
import React from 'react'
import './ContactUs.css'
import ContactjsMap from './contactUsMap/ContactjsMap'

const ContactUs = () => {
    return (
        <>
            <div className="container-fluid mt-5 manparentcontactUs">
                <div className="container">
                    <p>home</p>
                </div>
                <div className="container contactus_details">
                    <div className="">
                        <h1 className='contactus_heading'>Contact Information</h1>

                    </div>
                </div>



            </div>

                <div className="container-fluid mt-5 contactUs_formArea">
                        <div className="container contactUs_form_area">
                            <div className="row">
                                <div className="col-sm-4 contactUs_col_area"></div>
                                <div className="col-sm-8 contactUs_col_area"></div>
                            </div>
                        </div>
                </div>




            <div className="container-fluid mt-5">
                <ContactjsMap />
            </div>
        </>
    )
}

export default ContactUs
