import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
// icon
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [login, setLogin]= useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // password show and hide
  const [showpassword, setShowpassword] = useState(false);
  const handleShowPassword = () => {
    setShowpassword(!showpassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setLogin(true)

    try {
      const response = await axios.post('https://car-rental-gold-gamma.vercel.app/api/v1/auth/login', { email, password });

      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        setEmail('');
        setPassword('');
        navigate('/');
        window.location.reload();
        setSuccess("Login Successful");
        alert('Login Successfull')
      } else {
        setError(response.data.message);
        setLogin(false)
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        setLogin(false)
      } else if (error.request) {
        setError('No response from server. Please try again later.');
      } else {
        setError('An error occurred. Please try again.');
      }
      setLogin(false)
    }
  };

  return (
    <div className="container d-flex min-vh-100 justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="card p-4">
          <h2 className="text-center font-weight-bold mb-4">Login in to your account</h2>
          <form onSubmit={handleLogin}>
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
                    onClick={handleShowPassword}
                  >
                    {showpassword ? <MdRemoveRedEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="form-group">
              <button type="submit" className="btn btn-primary w-100">
              {login ? 'Login...' : 'Login'}
             </button>
              
            </div>
          </form>
          {
            success ? (
              <div>
                <br />
                <p className='text-success text-center'>{success}</p>
              </div>
            ) : null
          }
          {
            error ? (
              <div>
                <br />
                <p className='text-danger text-center'>{error}</p>
              </div>
            ) : (
              <p className="text-center text-muted mt-4">
                Not a member?{' '}
                <Link to='/signup' className="text-decoration-none text-primary">
                  New Registration Now
                </Link>
              </p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
