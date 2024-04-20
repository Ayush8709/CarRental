// This Components is Dieact link to app js in root folder
import React, { useState } from 'react'
import './ContactUs.css'
import { Link } from 'react-router-dom'
import Login from '../components/main/Login/Login'
import axios from 'axios'
//animatin laibrary
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const ContactUs = () => {

    //animation laibrary

    useGSAP(()=>{
        gsap.from('.contact_page_heading',{
          y:-100,
          duration:0.8,
          scale:0.5
        })

        gsap.from('.contact_input',{
            y:-50,
            duration:0.8,
            scale:0.5
        })
    })

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const chageConactVallu = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        })
    }

    const contactSaveData = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://car-rental-kappa-hazel.vercel.app/api/v1/contact/contactus', contact)
            alert("Conact save ")
        } catch (error) {
            alert('Contact Not Save')
        }
    }



    const isUserSignedIn = !!localStorage.getItem('token')
    return (
        <>
            {
                !isUserSignedIn

                    ?

                    <Login />
                    :

                    <>  <div className="container-fluid ">
                        <section className="bg-light">
                            <div className="py-8 lg:py-16 px-4 mx-auto container-md">
                                <h2 className="mb-4 text-4xl font-weight-bold text-center text-dark contact_page_heading" style={{ fontSize: "48px", fontWeight: 'bold' }}>Contact Us</h2>
                                <p className="mb-8 lg:mb-16 font-light text-center text-secondary sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                                <form action="#" className="space-y-8" onSubmit={contactSaveData}>

                                    <div>
                                        <label htmlFor="email" className="block mt-3 mb-2 text-sm font-weight-medium text-dark contact_input" >Your Name</label>
                                        <input type="text" id="email" name='name' value={contact.name} onChange={chageConactVallu} className="shadow-sm bg-white border border-secondary text-dark text-sm rounded-lg focus:ring-primary focus:border-primary form-control " placeholder="your name" required />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 mt-3 text-sm font-weight-medium text-dark contact_input">Your email</label>
                                        <input type="email" id="email" name='email' value={contact.email} onChange={chageConactVallu} className="shadow-sm bg-white border border-secondary text-dark text-sm rounded-lg focus:ring-primary focus:border-primary form-control " placeholder="name@flowbite.com" required />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 mt-3 text-sm font-weight-medium text-dark contact_input">Phone</label>
                                        <input type="text" id="email" name='phone' value={contact.phone} onChange={chageConactVallu} className="shadow-sm bg-white border border-secondary text-dark text-sm rounded-lg focus:ring-primary focus:border-primary form-control " placeholder="phone number" required />
                                    </div>


                                    <div className="col-sm-12 mt-3">
                                        <label htmlFor="message" className="block mb-2 text-sm font-weight-medium text-dark contact_input">Your message</label>
                                     
                                        <input type="text" id="email" name='phone' value={contact.message} onChange={chageConactVallu} className="shadow-sm bg-white border border-secondary text-dark text-sm rounded-lg focus:ring-primary focus:border-primary form-control " placeholder="phone number" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-5 py-3 px-5 text-sm font-weight-medium text-center rounded-lg">Send message</button>
                                </form>
                            </div>
                        </section>

                    </div> </>
            }









        </>
    )
}

export default ContactUs
