import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    // create usr for signup
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

     // user profile
     const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)
    }

    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observer login
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe
    }, [])


    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logout,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;