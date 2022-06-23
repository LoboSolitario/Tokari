import { Outlet, Navigate } from 'react-router-dom';
import configOptions from '../../api/configOptions';

const PrivateRoutes = async () => {
    // e.preventDefault();

    // implement the Get Request that will give us the user role
    // depends on their role status, they can visit private pages
    const auth =  localStorage.getItem("auth")
    const token = localStorage.getItem("token")
    const baseUrl = process.env.REACT_APP_BASE_URL;  
    let role = "";

    console.log("your token: ", token);
    console.log("auth status: ", auth);
    
    const options = {
        withCredentials: true,
        credentials: 'include',
        mode: 'no-cors'
        };

    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    };

    configOptions("GET", headers, options);

    const response = await fetch(`${baseUrl}/api/users/userDetails`, options);
    console.log(response);
    if(response.ok){
    response.json().then(data => {
        console.log("data: ", data.role);
        role = data.role
    });
    options.body = JSON.stringify({});
    }

    return(
        auth ? <Outlet/> : <Navigate to="/baskets"/>
    )
}

export default PrivateRoutes