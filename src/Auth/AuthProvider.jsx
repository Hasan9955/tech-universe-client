import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext()
const provider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleSign = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })

        return unSubscribe
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSign

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes ={
    children: PropTypes.node
}

export default AuthProvider;