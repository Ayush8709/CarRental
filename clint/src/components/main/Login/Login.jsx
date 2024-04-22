import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login.css'
//icon 
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  // password show and hide 
  const [showpassword, setShowpassword] = useState(false);
  const hindandshowpassword = () => {
    setShowpassword(!showpassword)
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post('https://car-rental-kappa-hazel.vercel.app/api/v1/auth/login', { email, password })
      const token = response.data.token
      // setUsername('')
      // setPassword('')
      // fetchUsers();
      navigate('/')
      window.location.reload();
      localStorage.setItem('token', token)
      alert("User Login")
      console.log("User Login")
    } catch (error) {
      console.log("Enter Valid Emal & Password")
      alert("Enter Valid Emal & Password")
    }
  }


  return (
    <>
    



      {/* next */}

      <div className="container d-flex min-vh-100 justify-content-center align-items-center">
        <div className="w-100" style={{ maxWidth: '400px' }}>
        
        

          {/* Sign-in Form */}
          <div className="card p-4">
            <h2 className="text-center font-weight-bold mb-4">Login in to your account</h2>
            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="form-control"
                  required
                />
              </div>
                <br />
              {/* Password Input */}
              <div className="form-group">
      <div className="d-flex justify-content-between align-items-center">
        <label htmlFor="password">Password</label>
        <a href="#" className="text-decoration-none text-primary">
          Forgot password?
        </a>
      </div>
      
      <div className="input-group">
        <input
          type={showpassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="form-control"
          required
        />
        <div className="input-group-append">
          <span
            className="input-group-text"
            style={{ height: '2.4pc', cursor: 'pointer' }}
            onClick={hindandshowpassword}
          >
            {showpassword ? <MdRemoveRedEye /> : <FaEyeSlash />}
          </span>
        </div>
      </div>
    </div>
                <br />
                <br />
              {/* Sign-in Button */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">
                  Log in
                </button>
              </div>
            </form>
          </div>

          {/* Sign-up Link */}
          <p className="text-center text-muted mt-4">
            Not a member?{' '}
            <Link to='/signup' className="text-decoration-none text-primary">
             New Registration Now
            </Link>
          </p>
        </div>
      </div>








    </>
  )
}

export default Login