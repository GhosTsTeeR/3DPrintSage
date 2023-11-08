import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./Auth.Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
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
    if (user) {
      // Aquí hacemos la solicitud para obtener los datos del usuario
      getDataUser(user.uid)
        .then((response) => {
          if (response.data) {
            setDataUser(response.data);
          } else {
            console.log("No se encontraron datos de usuario");
          }
        })
        .catch((error) => {
          console.error("Error al obtener datos de usuario", error);
        });
    }
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
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    //signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider)
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
  }, []);


  return (
    <AuthContext.Provider
      value={{ signUp, signIn, handleSignOut, user, googleSignIn, dataUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const UserAuth = () => {
  return useContext(AuthContext);
};
