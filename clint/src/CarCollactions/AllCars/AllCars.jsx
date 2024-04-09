import React, { useEffect, useState } from 'react'
import './AllCar.css'
// CarApiCall
import data from '../../../data.js'
import axios from 'axios'
import { Link } from 'react-router-dom'


const AllCars = () => {



    const [carApi, setCarApi] = useState([]);

    //Fetch all Car Api with backend
    const myCarApi = async () => {
        try {
            const myCarApiDetail = await axios.get('http://localhost:8000/api/v1/cardata/data')
            setCarApi(myCarApiDetail.data)
            //   console.log(carApi);
        } catch (error) {
            console.log("All Car Api Not Found");
        }
    }

    useEffect(() => {
        myCarApi()

       
    })



  


    return (
        <>
            <div className="container-fluid parent mt-5">
                <div className="container carChild">
                    <div className="row mt-5">
                        {
                            carApi.map((value, id) => {
                                return (

                                    <div className="col-sm-4 AllCarsCard" key={id}>
                                        {/* <img src={value.image} className='dardImage mt-3' alt="" width="100%" />
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

                                            <Link to='/checkout' > <button className='btn btn-lg btn-success'>CheckOut</button></Link>
                                        </div> */}



                                        <div className="card pt-2" style={{width:"22rem", border:"none"}} >
                                            <img src={value.image}  className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title"><h2>{value.name}</h2></h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">Price : {value.price}/day</li>
                                                    <li className="list-group-item">Mode :  {value.model}</li>
                                                    <li className="list-group-item">Company: {value.category.brand}</li>
                                                </ul>
                                                <div className="card-body">
                                                <Link to={`/checkout/${value.id}`} > <button className='btn btn-md btn-danger'>CheckOut</button></Link>
                                                </div>
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
