import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

//animatin laibrary
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// gsap.registerPlugin(ScrollTrigger)


const CarDetaileDes = () => {

  //animation laibray 
  // useGSAP(()=>{
  //   gsap.from('.car_name',{
  //    y:-100,
  //    duration:0.9,
  //    scale:0.5
  //   })

  //   gsap.from('.car_price',{
  //     x:200,
  //     scale:0.5,
  //     duration:0.8
  //   })

  //   gsap.from('.car',{
  //     x:-200,
  //     scale:0.5,
  //     duration:0.8
  //   })

  // })

  const [day, setDay] = useState('1')
  const [single, setSignle] = useState({})
  const { id } = useParams()

  const changeDay = (e) => {
    setDay(e.target.value)
  }



  // console.log(day)
  const mySingleData = async () => {
    try {
      const myData = await axios.get(`https://car-rental-gold-gamma.vercel.app/api/v1/cardata/cardetail/${id}`)
      setSignle(myData.data)
    } catch (error) {

    }
  }
  

  useEffect(() => {
    mySingleData()
  })
  return (
    <>
      <div className="car-details">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

          <h5 className="mb-4 car_name" style={{ fontSize: '4rem', color: 'red' }}>{single.name}</h5>

          <div className='d-flex justify-content-between' style={{ fontSize: '2rem', fontWeight: 'bold' }}> <p className='car'>Price:</p> <p className='car_price'>{single.price}/day</p>
          </div>

          <div className='d-flex justify-content-between' > <p style={{ fontSize: '22px', fontWeight: 'bold' }} className='car'>Enter Car Day:</p> <p><input type="text" style={{ width: "8pc", borderRadius: '20px', textAlign: 'center' }} value={day} onChange={changeDay} /></p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p className='car'>Sheet:</p> <p className='car_price'>{single.sheet}</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p className='car'>Lagguage:</p> <p className='car_price'>{single.lagguage}</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p className='car'>Model:</p> <p className='car_price'>{single.model}</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p className='car'>Fuletype:</p> <p className='car_price'>{single.fueltype}</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p className='car'>Category:</p> <p className='car_price'>{single.brand}</p>
          </div> 

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p className='car'>Rating:</p> <p className='car_price'>{single.rating}/5</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p className='car'>Cartype:</p> <p className='car_price'>{single.cartype}</p>
          </div>

          <div className='d-flex justify-content-between' >
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }} className='car'>Total  :-</h2>
            <h2 style={{ color: "red", fontSize: '3rem', fontWeight: 'bold' }} className='car_price'>{single.price * day == 0 ? single.price : single.price * day}</h2>
           
          </div>


          <button className='btn btn-primary btn-lg btn-block text-light' style={{ width: '100%' }}> <Link to='/carbookingform ' className='text-light' style={{ textDecoration: "none" }}> Proceed{'>>'} </Link> </button>







        </div>
      </div>
    </>
  )
}

export default CarDetaileDes
