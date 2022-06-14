import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    // need to save token globally
    // maybe we can use JWT token
    let auth = {'token': true}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes