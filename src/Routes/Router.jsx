import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound/NotFound";
import CardDetails from "../Components/CardDetails/CardDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";








const router =createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: '/update-profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/details',
                element: <PrivateRoutes>
                    <CardDetails></CardDetails>
                </PrivateRoutes>       
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
            
        ]
    }
])

export default router;