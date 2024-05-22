// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const authAxios = axios.create({
//     headers:{
//         Authorization : `Bearer ${localStorage.getItem('token')}`
//     }
// });

// const User = () => {
//     const [data, setData] = useState(null);

//     const helloData = async () => {
//         try {
//           // const response = await authAxios.get('http://localhost:8000/api/v1/getuserdata/getuser')
//             const response = await authAxios.get('https://car-rental-gold-gamma.vercel.app/api/v1/getuserdata/getuser');
//             setData(response.data);
//             console.log("Fetch successful");
//         } catch (error) {
//             console.error("Fetch failed", error);
//             console.log("Error details:", error.response ? error.response.data : error.message);
//         }
//     }

//     useEffect(() => {
//         helloData();
//     }, []);

//     return (
//         <>
//             <h1>User Data</h1>
//             {data ? (
//                 <>
//                     <h1>Name: {data.username}</h1>
//                     <h1>Email: {data.email}</h1>
//                     <h1>ID: {data._id}</h1>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </>
//     );
// }

// export default User;


import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUserData = async () => {
        try {
            const response = await authAxios.get('https://car-rental-gold-gamma.vercel.app/api/v1/getuserdata/getuser');
            setUser(response.data);
            console.log("Fetch successful");
        } catch (error) {
            console.error("Fetch failed", error);
            console.log("Error details:", error.response ? error.response.data : error.message);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };

