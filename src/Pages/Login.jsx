import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import 'animate.css';
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const[logInError, setLogInError] = useState('');
    const [logInSuccess, setLogInSuccess] = useState('');


    const {register,  handleSubmit, formState: { errors }, } = useForm();
      const onSubmit = (data) => {
        // console.log(data)

         //reset error
         setLogInError('');
         setLogInSuccess('');


        const {email, password} = data;

        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            setLogInSuccess,
            toast.success("Login Successfully");
        })
        .catch(error =>{
            console.log(error)
            setLogInError,
            toast.error("Doesn’t match your email and password");
        })
      }

    return (
       
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col-reverse md:flex-row-reverse ">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required 
                    {...register("email", { required: true })}
                    />
                     {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required 
                    {...register("password",{ 
                        required:"This field is required",
                        pattern: {
                            value: /^.{6,}/i,
                            message: "Password contain must be 6 character"
                        }
                    })}
                    />
                     {errors?.password?.type ==='pattern' && (<p className="text-red-500">{errors.password.message}</p>)}
                    {
                    errors?.password?.type ==='required' && (<p className="text-red-500">This field is required</p>)
                    }
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {
                 setLogInError && <p>{logInError}</p>
                }
                {
                    setLogInSuccess && <p>{logInSuccess}</p>
                }
        <ToastContainer/>
                <div className="flex gap-8 justify-center items-center text-3xl">
                    <FcGoogle />
                    <FaGithub/>
                    <FaTwitter/>
                </div>
                <p className="text-center p-6">Do not have an account<Link
                className="text-blue-600 font-bold pl-1" to={'/register'}>Register</Link>  </p> 
            </div>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-orange-600">Wellcome <span className="text-green-400	">Residential</span></h1>
                <h1 className="text-5xl font-bold animate__animated animate__flash animate__repeat-3  " >Login now!</h1>
                <p className="py-6">A residential wellcome typically refers to a warm and hospitable reception provided to individuals upon their arrival at a residential facility or community. </p>
            </div>   
        </div>
    </div>
    );
};

export default Login;