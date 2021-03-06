import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../pages/Home/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    };

    const setUserName = (uName) => {
        updateProfile(auth.currentUser, {
            displayName: uName
        }).then(() => {
            // Profile updated!
            // ...
            setError('')
        })
            .catch(error => {
                setError(error.message);
            })
    }

    const createAccountWithEmail = (email, pass, uName) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                console.log('user created');
                setUserName(uName)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    };

    const signInWithEmail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    // observe use state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError('')
            }
            else {
                setUser({})

            }
            setIsLoading(false);
        });
        return () => unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        signInWithEmail,
        createAccountWithEmail,
        logOut,
        setIsLoading,
        setError
    };
};

export default useFirebase;
