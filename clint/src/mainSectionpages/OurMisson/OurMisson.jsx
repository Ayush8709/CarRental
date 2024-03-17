import React, { useEffect } from 'react'
import './OurMisson.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
import ourmissonimg from '../../../public/images/ourMisson.jpeg'

const OurMisson = () => {


    useGSAP(()=>{
    gsap.from(".ourMissonImg",{
        scale:0.1,
        duration:4,
        border:"2px solid red",
        height:"20pc",
        // scrollTrigger:{
        //     trigger:'ourMissonImg',
        //     scrub:2,
            
        // }
    })

    gsap.from('.our_misson_heading',{
        y:-100,
        duration:1,
        scale:0.5,
       yoyo:true,
        // scrollTrigger:{
        //     trigger:"our_misson_heading",
        //     scrub:3,
        // }
    })

       
    })

    

  return (
   <>
    <div className="container-fluid mt-5">
        <div className="container our_misson_card">
            <div className="row">
                <div className="col-sm-6 col-md-6 mt-5 mb-5 ">
                    <span className='our_misson_post'>What we Do</span>
                    <h1 className='our_misson_heading '>Our Mission</h1>
                    <p className='our_misson_para mt-4'>our mission is to provide our customers with a seamless and convenient experience when it comes to renting vehicles. We strive to offer a wide range of high-quality cars, from economy options to luxury vehicles, ensuring that there's something for everyone's needs and preferences. At the core of our mission is a commitment to customer satisfaction and safety.</p>
                </div>

                <div className="col-sm-6 col-md-6 mt-5 mb-5 our_misson_carSection">
                        <img width="100%" src=
                        {ourmissonimg}alt="" className='ourMissonImg'/>
                      
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default OurMisson

