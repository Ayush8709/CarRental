import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CarDetaileDes = () => {
  const [day, setDay] = useState('1')
  const [single, setSignle] = useState({})
  const { id } = useParams()

  const changeDay = (e) => {
    setDay(e.target.value)
  }



  // console.log(day)
  const mySingleData = async () => {
    try {
      const myData = await axios.get(`http://localhost:8000/api/v1/cardata/cardetail/${id}`)
      setSignle(myData.data)
    } catch (error) {

    }
  }
  // console.log(single)

  useEffect(() => {
    mySingleData()
  })
  return (
    <>
      <div className="car-details">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

          <h5 className="mb-4 " style={{ fontSize: '4rem', color: 'red' }}>{single.name}</h5>

          <div className='d-flex justify-content-between' style={{ fontSize: '2rem', fontWeight: 'bold' }}> <p>Price:</p> <p>{single.price}/day</p>
          </div>

          <div className='d-flex justify-content-between' > <p style={{ fontSize: '22px', fontWeight: 'bold' }}>Enter Car Day:</p> <p><input type="text" style={{ width: "8pc", borderRadius: '20px', textAlign: 'center' }} value={day} onChange={changeDay} /></p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p>Sheet:</p> <p>{single.sheet}</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p>Lagguage:</p> <p>{single.lagguage}</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p>Model:</p> <p>{single.model}</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p>Fuletype:</p> <p>{single.fueltype}</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p>Category:</p> <p>Category</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p>Rating:</p> <p>Rating</p>
          </div>

          <div className='d-flex justify-content-between' style={{ fontSize: '22px', fontWeight: 'bold' }}> <p>Cartype:</p> <p>CarType</p>
          </div>

          <div className='d-flex justify-content-between' >
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Total  :-</h2>
            <h2 style={{ color: "red", fontSize: '3rem', fontWeight: 'bold' }}>{single.price * day == 0 ? single.price : single.price * day}</h2>
          </div>


          <button className='btn btn-primary btn-lg btn-block text-light' style={{ width: '100%' }}> <Link to='/carbookingform ' className='text-light' style={{ textDecoration: "none" }}> Proceed{'>>'} </Link> </button>







        </div>
      </div>
    </>
  )
}

export default CarDetaileDes
