import React, { useEffect, useState,useRef } from 'react'
import './AllCar.css'

import axios from 'axios'
import { Link } from 'react-router-dom'




const AllCars = () => {
 
   

   


    const [carApi, setCarApi] = useState([]);

   
    //Fetch all Car Api with backend
    const myCarApi = async () => {
        try {
            const myCarApiDetail = await axios.get('/api/v1/cardata/data')
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
                            !carApi ? <p>Loding...</p>   :

                            carApi.map((value, id) => {
                                return (

                                    <div className="col-sm-4 AllCarsCard" key={id}>
                                    
                                        <div className="card pt-2" style={{width:"22rem", border:"none"}} >
                                            <img src={value.image}  className="card-img-top car_Image" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title"><h2>{value.name}</h2></h5>
                                                    <p className="card-text">{value.description}</p>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">Price : {value.price}/day</li>
                                                    <li className="list-group-item">Mode :  {value.model}</li>
                                                    <li className="list-group-item">Company: {value.brand}</li>
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
