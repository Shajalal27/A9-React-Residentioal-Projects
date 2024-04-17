/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

//social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    //creat user
    const createUser = (email, password) =>{
       setLoading(true);
      return  createUserWithEmailAndPassword(auth, email, password)
      
    }

    //Sign in user
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
     }
     //github login
     const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
     }

     //twitter login
     const twitterLogin = () =>{
        return signInWithPopup(auth, twitterProvider);
     }

    //logout
     const logOut = () =>{
        setLoading(true);
        setUser(null)
        signOut(auth)
     }

    //observe
    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setLoading(false);
             
            } 
           
          });
    }, [])

    

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        logOut,
        loading,
        user
    }
    
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
