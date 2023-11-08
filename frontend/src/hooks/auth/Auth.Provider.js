import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./Auth.Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { getDataUser } from "../../services";

const AuthProvider = (props) => {
  const cachedUser = JSON.parse(localStorage.getItem("user"));
  const cachedDataUser = JSON.parse(localStorage.getItem("dataUser"));
  const [user, setUser] = useState(cachedUser || null);
  const [dataUser, setDataUser] = useState(cachedDataUser || null);
  useEffect(() => {

    const fetchData = async() => {
      if(user) {
  
        try {
          const response = await getDataUser(user.uid);
          localStorage.setItem('dataUser', JSON.stringify(response.data));
          setDataUser(response.data);
  
        } catch(error) {
          console.error(error);
        }
  
      }
    }
    
    fetchData();
  
  }, [user]);
  const { children } = props;
  const signUp = (user, password) => {
    createUserWithEmailAndPassword(auth, user, password);
  };
  const signIn = (user, password) => {
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "$$" + errorMessage);
      });
  };
  const handleSignOut = () => {
    signOut(auth);
    setUser();
    setDataUser();
    localStorage.removeItem('user');
    localStorage.removeItem('dataUser');
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    //signInWithRedirect(auth, provider)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
      //console.log('User', currentUser)
      /* if (currentUser)  return currentUser.getIdToken().then((token) => {
            setToken(token);
          }) */
    });
    return () => {
      unsubscribe();
    };
  }, [user]);


  return (
    <AuthContext.Provider
      value={{ signUp, signIn, handleSignOut, user, googleSignIn, dataUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};


export default AuthProvider;
