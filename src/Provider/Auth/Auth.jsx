import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth = getAuth(app)

export const UserContext = createContext(null);

const Auth = ({children}) => {
    const[user , setUser] = useState(null);
    const[loading , setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const signUp = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email ,password)
    }

    const sigIn = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email ,password);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    const googleIn = ()=>{
        return signInWithPopup(auth , googleProvider);
    }

    const facebookIn = ()=>{
        return signInWithPopup(auth , facebookProvider);
    }

    const passReset = (email) =>{
        return sendPasswordResetEmail(auth,email);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setLoading(false);
            setUser(currentUser);
            if(currentUser){
                const loggedUserEmail = {
                   email : currentUser.email
                };
                fetch(`https://cars-doctors-server.vercel.app/jwt`, {
                method: "POST",
                headers:{ "content-type" : "application/json"},
                body: JSON.stringify(loggedUserEmail)
            })
            .then(res=>res.json())
            .then(data=>{
                localStorage.setItem('car-access-token' , data.token)
                console.log("JWT Token" , data);
            })
            }
        })
        return ()=> unsubscribe();
    },[])
    

    const userInfo = {
      user,
      sigIn,
      signUp,
      googleIn,
      facebookIn,
      passReset,
      loading,
      logOut
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default Auth;