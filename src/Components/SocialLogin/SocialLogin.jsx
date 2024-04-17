import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hook/useAuth";


const SocialLogin = () => {
    const {googleLogin, githubLogin, twitterLogin} = useAuth();

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user)
        })
    }
    return (
            <div className="flex gap-8 justify-center items-center text-3xl">   
                <button onClick={ () =>handleSocialLogin(googleLogin)}><FcGoogle /></button>
                <button onClick={ () =>handleSocialLogin(githubLogin)}><FaGithub/></button>
                <button onClick={ () =>handleSocialLogin(twitterLogin)}><FaTwitter/></button>
                    
                    
            </div>
      
    );
};

export default SocialLogin;