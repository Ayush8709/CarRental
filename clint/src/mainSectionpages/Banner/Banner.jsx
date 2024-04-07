import React, { useRef } from 'react'
import './Banner.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const main = () => {


    
    useGSAP(()=>{
      
        gsap.from(".banner_heading",{
            scale:0.1,
            duration:1,
            delay:0.5,
           
        })
     
        gsap.from(".banenr-para",{
            
            scale:0.1,
            duration:1,
            delay:0.5,
          

        })

    
    })
    return (
        <>
            <div className="container-fluid banner_background" >
                <div className=" container banner_background_text">
                    <div className="row">
                        <div className="col-sm col-md">
                            <span className='banner_post animation '>Rent cars</span>
                            <h1 className='banner_heading'><strong> Easily For You To Rent a Car</strong></h1>
                            <p className='banenr-para'><strong> Get access to rent our luxury cars for your premium events at affordable prices.</strong></p>
                            <button className='btn btn-danger  mt-5 '> <span id='arrow' className='arrow'>{"->"}</span> GET STARTED</button>
                         
                        </div>
                    </div>

                           
                </div>

            </div>
        </>
    )
}

export default main
