import { Outlet, Navigate, } from "react-router-dom";

const ProtectedRoutes = ({userIn}) => {
    
    return userIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes