import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const DisplayError = () => {
    const { logout } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h1 className='text-red-500'>Oops!</h1>
                <p className='text-red-400'>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <h4 className='text-3xl'>Please <button onClick={handleLogout}>Sign Out</button> and Log back in </h4>
            </div>
        </div>
    );
};

export default DisplayError;