import { Link } from "react-router-dom";


const Register = () => {
    return (
    <div className=" mx-auto md: w-1/2 shadow-2xl bg-base-100 mb-8 mt-6">
        <h2 className="text-3xl font-bold font-poppins text-center">Please Register Now </h2>
        <form className="card-body w-full">
            <div className="form-control">
            <label className="label">
                <span className="text-lg font-semibold">Name</span>
            </label>
            <input type="name" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Photo Url</span>
            </label>
            <input type="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
            </div>
        </form>
        <p className="text-center p-6 -mt-8">Already have an account<Link 
        className="text-blue-600 font-bold pl-1" to={'/login'}>Login</Link>  </p> 
    </div>
    );
};

export default Register;