import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,onAuthStateChanged,GoogleAuthProvider ,signInWithPopup,updateProfile, FacebookAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signIn user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //signIn user google
    const provider = new GoogleAuthProvider();
    const signInByGoogle= () => {
        return signInWithPopup(auth, provider)
    }

    //update profile
// Function to update the user's profile
const updateUserProfile = (displayName, photoURL) => {
    const user = auth.currentUser;
  
    if (user) {
      return updateProfile(user, { displayName, photoURL })
        .then(() => {
          console.log("Profile updated successfully!");
          // Handle successful update here
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
          // Handle error here
        });
    } else {
      return Promise.reject(new Error("No user is signed in."));
    }
  };

  //sign in with facebook
  const provider1 = new FacebookAuthProvider();
  const signInByFacebook= () => {
      return signInWithPopup(auth, provider1)
  }
    //logOut user
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, current => {
            console.log("current value of current user is set in useEfect in authProvider is", current)
            setUser(current)
            // setLoading(false)

        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo =
     {
        user, 
        loading,
        createUser,
        signIn,
        logOut,
        signInByGoogle,
        updateUserProfile,
        signInByFacebook
        

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;