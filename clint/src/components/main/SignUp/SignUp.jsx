import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

// console.log(email , username, password);
//   useEffect(() => {
//       fetchUsers();
//   }, [])

//   const fetchUsers = () => {
//       axios
//       .get('http://localhost:8000//api/v1/auth/register')
//       .then((res) => {
//           // console.log(res.data)
//       })
//   }


  const handleSubmit = (event) => {
      event.preventDefault();
      axios
      .post('http://localhost:5000/register', { email, username, password })
      .then(() => {
          alert('Registration Successful')
        //   setEmail('')
        //   setUsername('')
        //   setPassword('')
        //   fetchUsers();
          navigate('/login')
      })
      .catch((error) => {
          console.log('Unable to register user')
      })

  }

  return (
   <>
   <div className='col-md d-flex justify-content-center align-items-center bg-dark'>
        <h2 className='text-center display-4 text-white font-weight-bold'>Sign Up</h2>
    </div>
   <div className='container-fluid d-flex bg-dark'>
   
    <div className='col-md bg-dark text-white d-flex justify-content-center align-items-center'>
        <form className='text-center border rounded-lg p-4 mb-5' onSubmit={handleSubmit} style={{ maxWidth: '600px', height: '400px' }}>
            {/* Email Input */}
            <label htmlFor="email">Email</label>
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
            {/* Username Input */}
            <label htmlFor="username">Username</label>
            <br />
            <input
                id="username"
                className='form-control mb-3'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <button className='btn btn-primary btn-lg mb-3' type='submit' style={{ width: '200px', height: '50px', border: 'none', backgroundColor: '#0056b3', ':hover': { backgroundColor: '#004080' } }}>Sign Up</button>
        </form>
    </div>
   
</div>

   </>
  )
}

export default SignUp