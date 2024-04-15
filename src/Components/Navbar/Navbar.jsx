import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";





const Navbar = () => {
    const {logOut, user} =useAuth();

    
  

    const navLinks = <>
         <li><NavLink to={'/'}>Home</NavLink></li>
         <li><NavLink to={'/details'}>Details</NavLink></li>
         <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
                
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-extrabold text-blue-800">Residential</a>
            </div>
            <div className="navbar-center hidden lg:flex md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            
            <div className="navbar-end ">
            {
                user?.email ? 
                <div tabIndex={0} role="button" className="flex gap-8">
                    <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center">
                        <img className="rounded-full" src={user.photoURL}   title={user.displayName} />
                    </div>
                    <div>
                    <ul>
                        
                        <li>  
                            <button onClick={logOut} className="btn items-center text-xl font-bold font-poppins">Logout</button>
                        </li>
                    </ul>
                    </div>
                </div>
                :
                 <Link to={'/login'}><a className="btn font-bold">LOGIN</a></Link>
            }
            </div>
        </div>
    );
};

export default Navbar;