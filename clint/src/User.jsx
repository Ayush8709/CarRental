import React, { useContext } from 'react';
import { UserContext } from './UserContext/UserContext';

const User = () => {
    const user = useContext(UserContext);

    return (
        <>
            <h1>User Data</h1>
            {user ? (
                <>
                    <h1>Name: {user.username}</h1>
                    <h1>Email: {user.email}</h1>
                    <h1>ID: {user._id}</h1>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default User;
