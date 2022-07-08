import React from 'react';
import { Outlet,  Navigate, useLocation} from 'react-router-dom';

const PrivateRoutes = () => {
    
    const auth =  localStorage.getItem("auth")
    const location = useLocation();

    return(
        <>
            {auth 
                ? <Outlet/>
                :<Navigate to="/login" state={{from : location}} replace/> 
            }
        </>
    );
}

export default PrivateRoutes