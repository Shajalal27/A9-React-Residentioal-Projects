import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import AuthProvider from "../AuthProvider/AuthProvider";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <AuthProvider text={'hello'}>

            </AuthProvider>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;