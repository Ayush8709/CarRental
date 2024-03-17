import React from 'react'
import './CarSection.css'
import Scorpio from '../../../../public/images/Scorpio1.jpeg'

const CarSection = () => {
    return (
        <>
            <div className="container-fluid carsectionparent">
                <div className="container carsectionChild">
                    <div className="row ">

                        <p className='carsectionpara'> WHAT WE OFFER</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">  <h1 className='carsectionheading'>Top Our Cars</h1></div>
                        <div className="col-sm-6"><button className="btn btn-outline-primary" style={{float:"right"}}>Viwe All</button></div>
                      
                        
                    </div>
                </div>

            <div className="container">
                <div className="row">
                   <div className="col-sm-4 carsectionCarCard">
                    <div className="carsectionCarCard_car">
                        <img src={Scorpio} alt="img" className='carsectionCarCard_img' width='100%'/>
                    </div>
                    <div className="carsectionCarCard_car_title">
                        <h2>Mahindara Scorpio(2020)</h2>
                        <h3>3000 <span>/DAY</span></h3>

                    </div>
                   </div>
                   <div className="col-sm-4 carsectionCarCard"></div>
                   <div className="col-sm-4 carsectionCarCard"></div>
                </div>
            </div>
            </div>
        </>
    )
}

export default CarSection
{/* <div className="col-sm-6 col-md-6">

<p>WHAT WE OFFER</p>

</div>
<div className="col-sm-6 col-md-6">
<button className="btn btn-outline-primary">Viwe All</button>

</div> */}