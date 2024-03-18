import React from 'react'
import './AllCar.css'
// CarApiCall
import data from '../../../data.js'

const AllCars = () => {
    return (
        <>
            <div className="container-fluid parent mt-5">
                <div className="container carChild">
                    <div className="row mt-5">
                        {
                            data.map((value, id) => {
                                return (

                                    <div className="col-sm-4 AllCarsCard" key={id}>
                                        <img src={value.image} className='dardImage mt-3' alt="" width="100%" />
                                        <hr />
                                        <div className="AllCars_nameSection">
                                            <h1 className='text-success'>{value.name}</h1> <span>{value.category.rating} ****</span>
                                        </div>
                                        <div className="AllCars_Price mt-2">
                                            <h2>Price: {value.price}</h2> <span>/day</span> <p>TotalSheet: {value.sheet}</p>
                                        </div>
                                        <div className="AllCars_Model mt-2">
                                            <p>Model: {value.model}</p> <span>Total Lagguage: {value.lagguage}</span>
                                        </div>
                                        <div className="AllCars_FuelType ">
                                            <p>Company: {value.category.brand}</p> <span>FuelType: {value.fueltype}</span>
                                        </div>
                                        <div className="div AllCarButton mt-3">
                                            <button className='btn btn-lg btn-success'>CheckOut</button>

                                        </div>
                                    </div>

                                )
                            })
                        }

                        {/* <div className="col-sm-4"></div>
                <div className="col-sm-4"></div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AllCars
