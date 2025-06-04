import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase';



export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
 console.log(user)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout User
    const logOut = () => {
        return signOut(auth)
    }

    //  onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
                setUser(currentUser);
                setLoading(false);
        })

        // Cleanup subscription on unmount
        return () => {
            unSubscribe()
        };
    })

    const userInfo = {
        createUser,
        loginUser,
        logOut,
        user,
        setUser,
        loading,
        setLoading,

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;