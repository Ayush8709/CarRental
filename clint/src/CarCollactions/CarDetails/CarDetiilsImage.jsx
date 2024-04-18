import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// const singleData = await axios.get(`http://localhost:8000/api/v1/cardata//cardetail/${id}`)


const CarDetiils = () => {
    const [single, setSignle] = useState({})
    const { id } = useParams()

    const mySingleData = async () => {
        try {
            const myData = await axios.get(`http://localhost:8000/api/v1/cardata/cardetail/${id}`)
            setSignle(myData.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        mySingleData()
    })

    return (
        <>
            <div className="container-fluid">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={single.image} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={single.image} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={single.image} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next text-light" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <p style={{fontSize:'25px', textAlign:'center' , color:'black'}}>{single.description}</p>
            </div>
        </>
    )
}

export default CarDetiils
