import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    // create usr for signup
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

     // user profile
     const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)
    }

    // logout
    const logout = () => {
        return signOut(auth)
    }

    // observer login
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing');
            setUser(currentUser);
        });
        return () => unsubscribe
    }, [])


    const authInfo = {
        createUser,
        signIn,
        user,
        updateUser,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;