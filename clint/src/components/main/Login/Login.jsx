import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  console.log(email , password);


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post('http://localhost:8000/api/v1/auth/login', { email, password })
         const token = response.data.token
      alert('Login successful')
      // setUsername('')
      // setPassword('')
      // fetchUsers();
      navigate('/')
      alert("Login HO gaya hai")
      window.location.reload();
      localStorage.setItem('token', token)
    } catch (error) {
      console.log('Login Error', error)
    }
  }


  return (
    <>
      <div className='col-md d-flex font-weight-bold justify-content-center align-items-center   bg-dark'>
          <h2 className='text-center display-4 text-white hello'>Login</h2>
        </div>
      <div className='container-fluid  bg-dark'>
        <div className='col-md bg-dark text-white d-flex justify-content-center align-items-center' style={{paddingBottom:'56px'}}>
          <form className='text-center  rounded-lg p-5 mb-1' onSubmit={handleLogin} style={{ maxWidth: '600px', height: '296px' }}>
            {/*Username Input */}
            <label htmlFor="username">Email</label>
            <br />
            <input
              id="email"
              className='form-control mb-3 login_form_input'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            
            />
            {/* Password Input */}
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              className='form-control mb-3 login_form_input'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
            {/* Button */}
            <button className='btn btn-primary btn-lg mb-3' type='submit' style={{ width: '200px', height: '50px', border: 'none', backgroundColor: '#0056b3', ':hover': { backgroundColor: '#004080' } }}>Login</button>
            <br />
          {/* <h4 className ="text-light text-center">New User</h4> */}
          <button className="btn btn-lg btn-outline-primary"><Link to='/signup' style={{textDecoration:'none'}}>New User</Link></button>
          </form>
        </div>
        
      </div>

    </>
  )
}

export default Login