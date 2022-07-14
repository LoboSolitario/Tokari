import React from 'react';
import { Outlet,  Navigate, useLocation} from 'react-router-dom';

const PrivateRoutes = (props) => {

    const auth  = localStorage.getItem("auth"); 
    const assignedRole =  localStorage.getItem("role");
    const location = useLocation();
    const userRole = props["role"];

    return(
        <>
            {(userRole === assignedRole && auth === "true")
                ? <Outlet/>
                :<Navigate to="/" state={{from : location}} replace/> 
            }
        </>
    );
}

export default PrivateRoutes