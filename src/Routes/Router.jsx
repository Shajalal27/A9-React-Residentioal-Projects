import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Components/Home/Home";
import Details from "../Components/Details/Details";
import Contact from "../Components/Contact/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



const router =createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: '/details',
                element: <Details></Details>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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