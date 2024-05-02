import React, { useEffect, useState } from 'react'
import axios from 'axios'

const authAxios = axios.create({
    headers:{
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
})

const User = () => {
    const [data, setData]= useState(null)

    const helloData = async ()=>{
            try {
                const response = await authAxios.get('http://localhost:8000/api/v1/getuserdata/getuser')
                // const response = await authAxios.get('https://car-rental-kappa-hazel.vercel.app/api/v1/getuserdata/getuser')
                setData(response.data)
                console.log( "Fatch");
            } catch (error) {
                console.log("Data Not Fatch");
            }
    }

    useEffect(()=>{
        helloData()
    } ,[])
  return (
    <>
    <h1>User Data</h1>
    {
      data ? <>
      <h1>name: {data.username}</h1>
    <h1>name: {data.email}</h1>
    <h1>name: {data._id}</h1>
      </> :<> 
      </>
    }
    
    </>
  )
}

export default User
