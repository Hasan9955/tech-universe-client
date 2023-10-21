import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
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