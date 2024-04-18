import React, { useEffect, useState } from 'react'
// import './AllCar.css'
// CarApiCall
import data from '../../../data.js'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Tata = () => {



    const [carApi, setCarApi] = useState([]);

    //Fetch all Car Api with backend
    const myCarApi = async () => {
        try {
            const myCarApiDetail = await axios.get('http://localhost:8000/api/v1/cardata/tatadata')
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
                             !carApi ? <p>Loding...</p> :
                            carApi.map((value, id) => {
                                return (

                                    <div className="col-sm-4 AllCarsCard" key={id}>
                                       



                                        <div className="card pt-2" style={{ width: "22rem", border: "none" }} >
                                            <img src={value.image} className="card-img-top" alt="..." />
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

                  

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tata
