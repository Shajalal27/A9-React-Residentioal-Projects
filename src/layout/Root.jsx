import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import AuthProvider from "../AuthProvider/AuthProvider";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <AuthProvider text={'hello'}>

            </AuthProvider>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Root;