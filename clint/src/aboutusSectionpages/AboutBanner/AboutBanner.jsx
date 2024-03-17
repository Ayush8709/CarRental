import React from 'react'
import './AboutBanner.css'
import { Link } from 'react-router-dom'
import aboutimg from '../../../public/images/Scorpio.jpeg'
import { BiSolidPhoneCall } from "react-icons/bi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const AboutBanner = () => {

    useGSAP(()=>{
        gsap.from('.parentRowHeading',{
            y:-10,
            scale:0.5,
            duration:2,
            scrollTrigger:{
                trigger:'.parentRowHeading',
                scrub:2
            }
        })
        gsap.from('.aboutUs_title',{
                y:20,
                scale:0.5,
                duration:2,
                scrollTrigger:{
                    trigger:".aboutUs_title",
                    scrub:2,
                }
        })

        gsap.from('.about_img',{
            scale:0.4,
            scrollTrigger:{
                trigger:'about_img',
                scrub:2,
            }
        })

        gsap.from('.aboutUs_sub_para',{
            x:-50,
            yoyo:true,
            scrollTrigger:{
                trigger:".aboutUs_sub_para",
                scrub:2,
            }
        })

        gsap.from('.aboutCarRentDetailCol_p1',{
            x:30,
            scrollTrigger:{
                trigger:'.aboutCarRentDetailCol_p1',
                scrub:2,
            }
        })

    })

    return (
        <>
            <div className="container-fluid parentBanner mt-3 ">
                <div className="container parentsubBanner">
                    <div className="row parentRow">
                        <h1 className='parentRowHeading'><strong>About Company</strong> </h1>
                    </div>
                </div>

            </div>
            <div className="container aboutusBannerBtnDiv">
                <button className='btn btn-md btn-outline-primary aboutusBannerBtn'><Link to='/'>Home</Link></button>
            </div>



            <div className="container mt-5" >
                <div className="row">
                    <div className="col-sm-3" >
                        <img src={aboutimg} alt="" className='about_img' />

                    </div>
                    <div className="col-sm-9" >
                        <h1 className='aboutUs_title'>About Us Our Car</h1>
                        <p className='about_para'>Welcome to CARRENTAL, your trusted partner for all your automotive needs. With years of experience in the industry, we take pride in offering top-notch car services that prioritize quality, reliability, and customer satisfaction.we understand that your vehicle is more than just a mode of transportation; it's an investment. That's why our team of skilled technicians is dedicated to providing comprehensive services to keep your car running smoothly and efficiently for years to come.Whether you need routine maintenance, major repairs, or specialized upgrades, we have you covered. From oil changes and brake inspections to engine diagnostics and suspension repairs, our state-of-the-art facilities are equipped with the latest tools and technology to handle any job, big or small.What sets us apart is our unwavering commitment to excellence. We strive to exceed your expectations by delivering personalized service tailored to your specific needs and budget. Our transparent pricing and honest assessments ensure that you always know exactly what you're getting and why.Experience the difference with CARRENTAL. Contact us today to schedule an appointment or learn more about our services. Let us take care of your car so you can focus on the road ahead.</p>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 row_col_about" >
                        <h2 className='aboutUs_sub_para'>Truset Rent Service</h2>
                        <p>With multiple pickup and drop-off locations conveniently located across various cities, airport terminals, and popular destinations, renting a car has never been easier.</p>
                    </div>
                    <div className="col-sm-6 row_col_about" >
                        <h2 className='aboutUs_sub_para'>Competitive Pricing</h2>
                        <p>No hidden fees or surprises! We believe in transparent pricing, so the price you see is the price you pay. Our competitive rates ensure that you get the best value for your money.</p>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-6 row_col_about" >
                        <h2 className='aboutUs_sub_para'> Mainten&Safety
                        </h2>
                        <p>our safety is our top priority. All our vehicles undergo regular maintenance checks to ensure they're in top condition.</p>
                    </div>
                    <div className="col-sm-6 row_col_about" >
                        <h2 className='aboutUs_sub_para'> 24/7 Support
                        </h2>
                        <p>Our dedicated customer support team is available round-the-clock to assist you with any queries or concernsyour reservation or during your rental period, we've got you covered.</p>
                    </div>

                </div>

                <div className="row">
                    <div className='aboutCarRentDetailCol_logo_parent d-flex align-items-center' style={{ justifyContent: 'center' }}>
                        <div>
                            <span className='aboutCarRentDetailCol_Logo'><BiSolidPhoneCall /></span>
                        </div>
                        <div className='aboutCarRentaDetailCol_logo_Detail'>
                            <p className='aboutCarRentDetailCol_p1'>Call Us For Your Ride</p>
                            <p className='aboutCarRentDetailCol_p2'>+91 8709916110</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutBanner
