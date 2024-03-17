import React from 'react'
import './Testominal.css'
import testo1 from '../../../public/images/testo1.jpeg'
import testo2 from '../../../public/images/testo2.jpeg'
import testo3 from '../../../public/images/testo.jpeg'
import { FaStar } from "react-icons/fa";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const Testominal = () => {

  useGSAP(()=>{
      gsap.from(".testominalFirstRow_textArea_h1",{
        // x:-400,
        scale:0.1,
        scrollTrigger:{
          trigger:"testominalFirstRow_textArea_h1",
          scrub:2,
        }
      })
  })

  return (
    <>
      <div className="container-fluid mt-5 testominalparent">
        <div className="container-fluid testominalparent_image_background">
          <div className="container">
            <div className="row mt-5 testominalFirstRow">
                     <div className="testominalFirstRow_textArea">
                      <p className='testominalFirstRow_textArea_p'>TESTIMONAL</p>
                      <h1 className='testominalFirstRow_textArea_h1'> <strong>what our clinet say </strong> </h1>
                      <p className='testominalFirstRow_textArea_p2'>At Easy Car Booking, we're committed to providing exceptional service and reliable transportation for all your travel needs. Whether you're planning a weekend getaway, a business trip, or a family vacation, let us take care of your transportation needs so you can focus on making memories.</p>
                     </div>
                    
            </div>

            <div className="row mt-5 testominalSecondRow">
                  <div className="col-sm-4 testominalSecondRow_CardSection">
                    <p className='testominalSecondRow_CardSection_review text-primary'>It is very comfortable and relaxing. Prices are mid-range, affordable, and time management is efficient. </p>
                    <span className='testominalSecondRow_CardSection_review_star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                    <img className='testominalSecondRow_CardSection_review_avtar img img-logo img-fluid mt-4' src={testo1} alt="" />
                    <h3 className='testominalSecondRow_CardSection_review_avtar_name'>Abc Kumar</h3>
                  </div>
                  
                  <div className="col-sm-4 testominalSecondRow_CardSection">
                    <p className='testominalSecondRow_CardSection_review text-primary'>It is very comfortable and relaxing. Prices are mid-range, affordable, and time management is efficient. </p>
                    <span className='testominalSecondRow_CardSection_review_star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                    <img className='testominalSecondRow_CardSection_review_avtar img img-logo img-fluid mt-4' src={testo2} alt="" />
                    <h3 className='testominalSecondRow_CardSection_review_avtar_name'>Abc Kumar</h3>
                  </div>
                  
                  <div className="col-sm-4 testominalSecondRow_CardSection">
                    <p className='testominalSecondRow_CardSection_review text-primary'>It is very comfortable and relaxing. Prices are mid-range, affordable, and time management is efficient. </p>
                    <span className='testominalSecondRow_CardSection_review_star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                    <img className='testominalSecondRow_CardSection_review_avtar img img-logo img-fluid mt-4' src={testo3} alt="" />
                    <h3 className='testominalSecondRow_CardSection_review_avtar_name'>Abc Kumar</h3>
                  </div>
                  
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Testominal
