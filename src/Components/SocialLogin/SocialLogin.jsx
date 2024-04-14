import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hook/useAuth";


const SocialLogin = () => {
    const {googleLogin} = useAuth();
    return (
            <div className="flex gap-8 justify-center items-center text-3xl">
                <button onClick={ () =>googleLogin()}><FcGoogle /></button>
                    
                    <FaGithub/>
                    <FaTwitter/>
            </div>
      
    );
};

export default SocialLogin;