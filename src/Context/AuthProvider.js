import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut}from 'firebase/auth'
import app from  '../firebase/Firebase.init'


export const  AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
 const [user,setUser] = useState(null)
 const [loading,setLoading] = useState(true);
    // const  providerLogin = (provider)=>{
    //     return signInWithPopup(auth,provider)
    // }
    const providerLogin = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,password,email)
    }
    const updateUserProfile = (profile) =>{
        return updateUserProfile(auth.currentUser,profile);
    }
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            console.log('user inside state  change',currentUser)
            if( null||currentUser.emailVerified){
                setUser(currentUser);
            }
            setUser(currentUser);
            setLoading(false);

        })
        
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {user,loading,providerLogin,
        logOut,createUser,signIn,
         updateUserProfile, verifyEmail,
         setLoading
        }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;