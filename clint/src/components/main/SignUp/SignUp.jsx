import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SignUp.css'
import {Link} from 'react-router-dom'
//eye icon
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    //Password Hide and show funcanality
    // const [hidepassword, setHidepassword]= useState('');
    const [showpassword, setShowpassword] = useState(false);
    const hindandshowpassword = () => {
        setShowpassword(!showpassword);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('https://car-rental-gold-gamma.vercel.app/api/v1/auth/register', { email, username, password })
            .then(() => {
                alert('Registration Successful')
                //   setEmail('')
                //   setUsername('')
                //   setPassword('')
                navigate('/login')
            })
            .catch((error) => {
                console.log('User Already Register')
                alert("User Already Register")
            })

    }



    return (
        <>
            {/* new */}

            <div className="container d-flex min-vh-100 justify-content-center align-items-center">
                <div className="w-100" style={{ maxWidth: '400px' }}>



                    {/* Sign-in Form */}
                    <div className="card p-4">
                        <h2 className="text-center font-weight-bold mb-4">Sigup  to your account</h2>
                        <form onSubmit={handleSubmit}>
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
                            {/* UserName Input */}
                            <div className="form-group">
                                <label htmlFor="email">User Name</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="email"
                                    value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                                    {/* <a href="#" className="text-decoration-none text-primary">
                                        Forgot password?
                                    </a> */}
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
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Sign-up Link */}
                    <p className="text-center text-muted mt-4">
                        Not a member?{' '}
                        <Link to='/login' className="text-decoration-none text-primary">
                            Already Registered
                        </Link>
                    </p>
                </div>
            </div>

        </>
    )
}

export default SignUp