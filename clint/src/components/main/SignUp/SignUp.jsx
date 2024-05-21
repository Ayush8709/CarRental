import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import { Link } from 'react-router-dom';
// eye icon
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Password hide and show functionality
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('https://car-rental-gold-gamma.vercel.app/api/v1/auth/register', { email, username, password });
            if (response.status === 201) {
                setSuccess('Registration Successful');
                alert('Registration Successful');
                setEmail('');
                setUsername('');
                setPassword('');
                navigate('/login');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'User Already Registered');
            } else if (error.request) {
                setError('No response from server. Please try again later.');
            } else {
                setError('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container d-flex min-vh-100 justify-content-center align-items-center">
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <div className="card p-4">
                        <h2 className="text-center font-weight-bold mb-4">Signup to your account</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
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
                                <label htmlFor="username">User Name</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="username"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
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
                                            {showPassword ? <MdRemoveRedEye /> : <FaEyeSlash />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                    {loading ? 'Signing Up...' : 'Sign Up'}
                                </button>
                            </div>
                        </form>
                        <p className="text-center text-muted mt-4">
                            Not a member?{' '}
                            <Link to='/login' className="text-decoration-none text-primary">
                                Already Registered
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
