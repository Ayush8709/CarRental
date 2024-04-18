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
                        <div className="col-sm-6">  <h1 className='carsectionheading'>Our Top Company Car</h1></div>



                    </div>
                </div>

                {/* <div className="container">
                    <div className="row">
                        <div className="col-sm-4 carsectionCarCard">
                            <div className="carsectionCarCard_car">
                                <img src={Scorpio} alt="img" className='carsectionCarCard_img' width='100%' />
                            </div>
                            <div className="carsectionCarCard_car_title">
                                <h2>Mahindara Scorpio(2020)</h2>
                                <h3>3000 <span>/DAY</span></h3>

                            </div>
                        </div>
                        <div className="col-sm-4 carsectionCarCard"></div>
                        <div className="col-sm-4 carsectionCarCard"></div>
                    </div>
                </div> */}

                <div className="container mt-5">
                    <div className="row ">

                        <div className="card" style={{ width: '24rem',border:'none', }}>
                            <img  class="card-img-top" src="https://imgs.search.brave.com/Hv5orV2kZHkJTTQjQ0BOXr7byYPkaEVUtRBsLxQRZOs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXN0/Y2FyYnJhbmRzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8xMS9sb2dvLU1h/aGluZHJhLTYwMHgz/NDEuanBn" alt="Card image cap" />
                        </div>

                        <div className="card" style={{ width: '24rem',border:'none', }}>
                            <img  class="card-img-top" src="https://imgs.search.brave.com/nz0GfvEnT0isOC64gQGgREmPzTnkgdIu2P7uZtJDUxA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXN0/Y2FyYnJhbmRzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8xMC9Mb2dvLVRh/dGEtTW90b3JzLTYw/MHgzNjcuanBn" alt="Card image cap" />
                        </div>
                        <div className="card" style={{ width: '22rem',border:'none', }}>
                            <img  class="card-img-top" src="https://imgs.search.brave.com/M5qJKQrLPmDhQIyWrAd4dfRATlQWLc9DLOVfNdQGxmQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyLWJyYW5kLW5h/bWVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wMy9T/dXp1a2ktbG9nby0z/LTUwMHgzMjUuanBn" alt="Card image cap" />
                        </div>

                        

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