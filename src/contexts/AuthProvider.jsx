import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const userSignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            console.log('User logged in auth ');
            return () => unsubscribe;
        })
    },[])
    const authData = {
        user,
        setUser,
        createUser,
        userSignIn,
        userSignOut
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;