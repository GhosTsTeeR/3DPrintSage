import React, { useState } from "react";
import {  RemoveRedEye, VerifiedUser } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";
import { UserAuth } from "../../../hooks/auth/Auth.Provider";

export default function SignUp() {
  const {signUp, googleSignIn} = UserAuth()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const handleOnChangeUser = e => {
    setUser(e.target.value)
  }
  const handleOnChangePassword = e => {
    setPassword(e.target.value)
  }
  const sendUser = (user, password) => {
    signUp(user, password);
  }
  const handleListItemClick = async (event) => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const mode = "ModeLight";
  return (
    <div className={"GM__" + mode + "__login"}>
      <div className={"GM__" + mode + "__login-header"}>
        <img src="https://api.dicebear.com/7.x/bottts/png" alt="" />
      </div>
      <div className={"GM__" + mode + "__login-content"}>
        <div className={"GM__" + mode + "__login-content-group"}>
          <label htmlFor="user">Usuario</label>
          <div className={"GM__" + mode + "__login-content-group-input"}>
            <input id="user" type="email" placeholder="correo" onChange={handleOnChangeUser} />
            <VerifiedUser id="user" />
          </div>
        </div>
        <div className={"GM__" + mode + "__login-content-group"}>
          <label htmlFor="password">Password</label>
          <div className={"GM__" + mode + "__login-content-group-input"}>
            <input type="password" placeholder="digite su contraseña" onChange={handleOnChangePassword}/>
            <RemoveRedEye />
          </div>
        </div>
        <div className={"GM__" + mode + "__login-content-group"}>
          <label htmlFor="password">Repite la Password</label>
          <div className={"GM__" + mode + "__login-content-group-input"}>
            <input type="password" placeholder="digite su contraseña" onChange={handleOnChangePassword}/>
            <RemoveRedEye />
          </div>
        </div>

        <div className={"GM__" + mode + "__login-content-checkbox"}>
          <FormControlLabel required control={<Checkbox />} label="Capchat" />
        </div>
        <div className={"GM__" + mode + "__login-content-btn-login"}>
          <button className={"GM__" + mode + "__login-content-btn"} onClick={()=>sendUser(user, password)}>
            Inciiar sesion
          </button>
        </div>
        
      </div>
      <div className={"GM__" + mode + "__login-footer"}>
        <button onClick={() => handleListItemClick()} className={"GM__" + mode + "__login-footer-btnG"}>
          iniciar sesion con google
        </button>
        <button className={"GM__" + mode + "__login-footer-btnP"}>
          olvide mi contraseña
        </button>
      </div>
    </div>
  );
}
