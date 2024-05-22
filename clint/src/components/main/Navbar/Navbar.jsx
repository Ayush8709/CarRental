// Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { UserContext } from '../../../UserContext/UserContext'; // Adjust the path as necessary

const Navbar = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const isUserSignedIn = !!localStorage.getItem('token');

  const myStyle = {
    fontSize: "1.5rem",
  };

  useGSAP(() => {
    gsap.from(".navbar_link_gsap", {
      y: -100,
      scale: 3,
      duration: 0.7,
    });
  });

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container">
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
                {!isUserSignedIn ? (
                  <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/login">OurCars</Link>
                ) : (
                  <>
                    <Link className="nav-link dropdown-toggle text-dark navbar_link_gsap" to="#" style={myStyle} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      OurCars
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item navbar_link_gsap" style={myStyle} to="/mahindra">Mahindra</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item navbar_link_gsap" style={myStyle} to="/tata">Tata</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item navbar_link_gsap" style={myStyle} to="/cars">All Cars</Link></li>
                    </ul>
                  </>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/contact">Contact Us</Link>
              </li>
              {isUserSignedIn ? (
                <>
                  {user && (
                    <>
                      <li>
                        <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/user">{user.email}</Link>
                      </li>
                      <li className="nav-item">
                        <button onClick={handleSignOut} className='btn btn-outline-light bg-dark text-light mt-2'>Sign Out</button>
                      </li>
                    </>
                  )}
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link active navbar_link_gsap" style={myStyle} to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <br /><br /><br />
    </div>
  );
};

export default Navbar;
