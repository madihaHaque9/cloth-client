import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext= createContext();
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const googleSignIn=(value)=>{
        return signInWithPopup(auth,googleProvider);
 
     }
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
     const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe();
        }
    }
    ,[])
    const authInfo={
        googleSignIn,
        signInWithPopup,
        user,
        loading,
        createUser,
        signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;