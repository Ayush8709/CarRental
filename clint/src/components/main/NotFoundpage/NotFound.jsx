import React from 'react'
import './NotFound.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className="container">
         <button className='btn btn-lg btn-primary'><Link to='/' className='text-light'>Go Back to Main Menu</Link></button>
      <div className="row">
         <h1 className='not_found_css'>URL NOT FOUND</h1>
      </div>
    </div>
   
    </>
  )
}

export default NotFound
