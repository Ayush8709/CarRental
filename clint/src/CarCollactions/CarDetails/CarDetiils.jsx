import React, { useState, useEffect } from 'react'
import './CarDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import img from '../../../public/dataImg/TataSAfari.jpg'
// const singleData = await axios.get(`http://localhost:8000/api/v1/cardata//cardetail/${id}`)


const CarDetiils = () => {
   const [single, setSignle] = useState({})
   const {id} = useParams()

   const mySingleData =async ()=>{
    try {
        const myData = await axios.get(`http://localhost:8000/api/v1/cardata/cardetail/${id}`)
        setSignle(myData.data)
    } catch (error) {
        
    }
   }

   useEffect(()=>{
    mySingleData()
   })

    return (
        <>
            <div className="container-fluid">
                <div className="container des">
                    <img src={single.image} alt="" />
                  <h1>{single.name}</h1>
                </div>
            </div>
        </>
    )
}

export default CarDetiils
