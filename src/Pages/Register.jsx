import {  useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Hook/useAuth";




const Register = () => {
    const[showPassword, setShowPassword] = useState(false);
    const[registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const {createUser} = useAuth();
    // console.log(createUser);

    const {register,  handleSubmit, formState: { errors }, } = useForm();
      const onSubmit = (data) => {
        // console.log(data)

        //reset error
        setRegisterError('');
        setRegisterSuccess('');

        const {email, password} = data;
        createUser(email, password)
        
        
        .then(result =>{
            console.log(result)
            setRegisterSuccess,
            toast.success("Registration Successfully");
            
        })
        .catch(error =>{
            console.error(error);
            setRegisterError,
            toast.error("Already Register")

        })
    };

    return (
    <div className=" mx-auto w-full md:w-1/2 shadow-2xl bg-base-100 mb-8 mt-6">
        <h2 className="text-3xl font-bold font-poppins text-center">Please Register Now </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
            <div className="form-control">
            <label className="label">
                <span className="text-lg font-semibold">Name</span>
            </label>
            <input type="name" placeholder="name" className="input input-bordered" 
            {...register("fullName", { required: true })}
            />
            {errors.fullName && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" 
             {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Photo Url</span>
            </label>
            <input type="photo" placeholder="Photo URL" className="input input-bordered"  
            {...register("photo")}
            />
            </div>
            <div className="form-control relative mb-4">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? "text" : "password"} 
            placeholder="password" 
            className="input input-bordered  " 
            {...register("password",{ 
                required:"This field is required",
                pattern: {
                    value: /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}/i,
                    message: "Password contain must be an Uppercase, Lowercase and 6 character"
                }
            })}
            />
            {errors?.password?.type ==='pattern' && (<p className="text-red-500">{errors.password.message}</p>)}
            {
            errors?.password?.type ==='required' && (<p className="text-red-500">This field is required</p>)
            }
                <span className="absolute top-12 right-3"
                 onClick={ () =>setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash/> : <FaEye/>
                    }
                </span>
                  
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
        {
            setRegisterError && <p>{registerError}</p>
        }
        {
            setRegisterSuccess && <p>{registerSuccess}</p>
        }
        <ToastContainer/>
    </div>
    );
};

export default Register;