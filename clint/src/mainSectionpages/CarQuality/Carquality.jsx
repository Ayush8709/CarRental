import React from 'react'
import './Carquality.css'
import { FaPlus } from "react-icons/fa";
import carQualtiyImg from '../../../public/images/CarQuality.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const Carquality = () => {

    useGSAP(()=>{
        gsap.from('.carQualityPosterHeading',{
            x:10,
            scale:0.4,
            scrollTrigger:{
                trigger:'.carQualityPosterHeading',
                scrub:2,
            }
        })
       
    })

    return (
        <>
            <div className="container-fluid  carQualityHead">
                <div className="container carQualitySub mt-5">
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <img src={carQualtiyImg} alt="" className='carQualityImage' />
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="carQualityPoster">
                                <span className='carQualityPosterTitle'>WHY CHOOSE US</span>
                                <h1 className='carQualityPosterHeading'>We Provide Premium Car With High Quality</h1>
                                <p className='carQualityPosterpara'>We prioritize the safety and reliability of our rental fleet by implementing stringent maintenance checks and inspections. Our team of certified technicians ensures that every vehicle is in peak condition, guaranteeing a smooth and trouble-free ride for our customers.</p>


                                <p>
                                    
                                    <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Read MORE ->
                                    </button>
                                </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                    Our diverse fleet features a wide range of meticulously maintained vehicles, including economy cars, spacious SUVs, sleek sedans, and luxury models. Each vehicle is handpicked to meet the highest standards of performance, comfort, and style.
                                    </div>
                                </div>

                            </div>
                            <div className="carQualityPosterNumber">
                                    <h4>4 <sup style={{color:"red"}}><FaPlus /></sup></h4>
                                    <h4>1000 <sup style={{color:"red"}}> <FaPlus /></sup></h4>
                            </div>
                            <div className="carQualityPosterPara">
                                    <p>Year Of Expreance</p>
                                    <p>Happy Clint</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carquality
