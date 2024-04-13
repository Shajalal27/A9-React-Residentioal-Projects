import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)

    //creat user
    const createUser = (email, password) =>{
       
      return  createUserWithEmailAndPassword(auth, email, password)
      
    }

    //Sign in user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //observe
    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
             
             
            } 
           
          });
    }, [])

    const allValues = {
        createUser,
        signInUser
    }
    
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
