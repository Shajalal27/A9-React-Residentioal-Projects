/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// import { Navigate, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    // const location = useLocation();
    // console.log(location)
    if(loading){
        return <div className="ml-[50%] mt-[10%]">
            <span className="loading loading-spinner loading-lg "></span>
        </div>;
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} />
};

export default PrivateRoutes;
