import React, { useEffect, useRef } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'


const Navbar = () => {
  const navigate = useNavigate();
  const isUserSignedIn = !!localStorage.getItem('token')

  const myStyle = {
    fontSize: "1.5rem",
  }

  useGSAP(() => {
    gsap.from(".navbar_link_gsap", {
      y: -100,
      scale: 3,
      duration: 0.7,

    })
  })

  const handleSignOut = () => {
    localStorage.removeItem('token')
    alert('Data Deya Salla')
    navigate('/login')
}


  return (

    <div className="container-fluid" >
      <nav className="navbar   navbar-expand-lg  bg-body-tertiary">
        <div className="container  ">
          <Link className="navbar-brand navbar_link_gsap" to="/"><h1>CARRENTAL</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active navbar_link_gsap" style={myStyle} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-dark navbar_link_gsap" to="#" style={myStyle} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OurCars
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item  navbar_link_gsap" style={myStyle} to="/mahindra">Mahindra</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item navbar_link_gsap" style={myStyle} to="/tata">Tata</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item navbar_link_gsap" style={myStyle} to="/cars">All Cars</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/contact">Contact Us</Link>
              </li>
            {isUserSignedIn ?
            <>
            <li className="nav-item">
                {/* <Link className="nav-link active navbar_link_gsap" onClick={handleSignOut}  style={myStyle} >Sign Out</Link> */}
                <button onClick={handleSignOut} className='btn btn-outline-light bg-dark text-light'>Sign Out</button>
              </li>
            </>
            :
              <>
              <li className="nav-item">
                <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/signup">Sign Up</Link>
                <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/login">Login</Link>
              </li>
              </>
            }

              {/* <li className="nav-item">
                <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/signup">Sign Up</Link>
              </li> */}

            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar
