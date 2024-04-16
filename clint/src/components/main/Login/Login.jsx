import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    <div>
      <div className='col-md d-flex font-weight-bold justify-content-center align-items-center bg-teal bg-dark'>
          <h2 className='text-center display-4 text-white'>Login</h2>
        </div>
      <div className='container-fluid d-flex'>
        <div className='col-md bg-dark text-white d-flex justify-content-center align-items-center'>
          <form className='text-center border rounded-lg p-5 mb-5' onSubmit={handleLogin} style={{ maxWidth: '600px', height: '400px' }}>
            {/*Username Input */}
            <label htmlFor="username">Email</label>
            <br />
            <input
              id="email"
              className='form-control mb-3'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '400px', height: '40px', borderRadius: '20px', backgroundColor: '#ccc', padding: '10px' }}
            />
            {/* Password Input */}
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              className='form-control mb-3'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '400px', height: '40px', borderRadius: '20px', backgroundColor: '#ccc', padding: '10px' }}
            />
            {/* Button */}
            <button className='btn btn-primary btn-lg mb-3' type='submit' style={{ width: '200px', height: '50px', border: 'none', backgroundColor: '#0056b3', ':hover': { backgroundColor: '#004080' } }}>Login</button>
          </form>
        </div>
        
      </div>

    </div>
  )
}

export default Login