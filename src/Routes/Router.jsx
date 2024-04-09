import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Components/Home/Home";
import Details from "../Components/Details/Details";
import Contact from "../Components/Contact/Contact";
import Login from "../Pages/Login";



const router =createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
            }
            
        ]
    }
])

export default router;