import React, { useContext } from 'react';
import AuthProvider from '../../Provider/AuthProvider';


const PrivetRout = ({children}) => {
    const {user} = useContext(AuthProvider);

    if(user){
        return children;
    }
    return (
        <div>
            Data not found
        </div>
    );
};

export default PrivetRout;