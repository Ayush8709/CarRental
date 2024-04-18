// This Components is Dieact link to app js in root folder
import React from 'react'
import './ContactUs.css'
import ContactjsMap from './contactUsMap/ContactjsMap'
import { Link } from 'react-router-dom'
import Login from '../components/main/Login/Login'

const ContactUs = () => {
    const myStyle = {
        fontSize: "1.5rem",
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
                                <h2 className="mb-4 text-4xl font-weight-bold text-center text-dark" style={{ fontSize: "48px", fontWeight: 'bold' }}>Contact Us</h2>
                                <p className="mb-8 lg:mb-16 font-light text-center text-secondary sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                                <form action="#" className="space-y-8">

                                    <div>
                                        <label htmlFor="email" className="block mt-3 mb-2 text-sm font-weight-medium text-dark">Your Name</label>
                                        <input type="email" id="email" className="shadow-sm bg-white border border-secondary text-dark text-sm rounded-lg focus:ring-primary focus:border-primary form-control" placeholder="your name" required />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 mt-3 text-sm font-weight-medium text-dark">Your email</label>
                                        <input type="email" id="email" className="shadow-sm bg-white border border-secondary text-dark text-sm rounded-lg focus:ring-primary focus:border-primary form-control" placeholder="name@flowbite.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 mt-3 text-sm font-weight-medium text-dark">Subject</label>
                                        <input type="text" id="subject" className="form-control p-3 text-sm text-dark bg-white rounded-lg border border-secondary shadow-sm focus:ring-primary focus:border-primary" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <label htmlFor="message" className="block mb-2 text-sm font-weight-medium text-dark">Your message</label>
                                        <textarea id="message" rows="6" className="form-control p-2.5 text-sm text-dark bg-white rounded-lg shadow-sm border border-secondary focus:ring-primary focus:border-primary" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-5 py-3 px-5 text-sm font-weight-medium text-center rounded-lg">Send message</button>
                                </form>
                            </div>
                        </section>

                    </div> </>
            }

            {/* <div className="container-fluid ">
            //             <section className="bg-light">
            //                 <div className="py-8 lg:py-16 px-4 mx-auto container-md">
            //                     <h2 className="mb-4 text-4xl font-weight-bold text-center text-dark" style={{fontSize:"48px", fontWeight:'bold'}}>Contact Us</h2>
            //                     <p className="mb-8 lg:mb-16 font-light text-center text-secondary sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            //                     <form action="#" className="space-y-8">
            //                         <div>
            //                             <label htmlFor="email" className="block mb-2 text-sm font-weight-medium text-dark">Your email</label>
            //                             <input type="email" id="email" className="shadow-sm bg-white border border-secondary text-dark text-sm rounded-lg focus:ring-primary focus:border-primary form-control" placeholder="name@flowbite.com" required />
            //                         </div>
            //                         <div>
            //                             <label htmlFor="subject" className="block mb-2 mt-3 text-sm font-weight-medium text-dark">Subject</label>
            //                             <input type="text" id="subject" className="form-control p-3 text-sm text-dark bg-white rounded-lg border border-secondary shadow-sm focus:ring-primary focus:border-primary" placeholder="Let us know how we can help you" required />
            //                         </div>
            //                         <div className="col-sm-12 mt-3">
            //                             <label htmlFor="message" className="block mb-2 text-sm font-weight-medium text-dark">Your message</label>
            //                             <textarea id="message" rows="6" className="form-control p-2.5 text-sm text-dark bg-white rounded-lg shadow-sm border border-secondary focus:ring-primary focus:border-primary" placeholder="Leave a comment..."></textarea>
            //                         </div>
            //                         <button type="submit" className="btn btn-primary mt-5 py-3 px-5 text-sm font-weight-medium text-center rounded-lg">Send message</button>
            //                     </form>
            //                 </div>
            //             </section>

                     </div> */}







        </>
    )
}

export default ContactUs
