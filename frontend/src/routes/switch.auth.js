import React from "react";
import RoutesUser from "./routes.user";
import RoutesAdmin from "./routes.admin";
import Routes from "./routes.app";
import { UserAuth } from "../hooks/auth/Auth.Provider";

export default function SwitchAuth() {
  const { user, dataUser } = UserAuth();

  if (user) {
    const isAdmin = dataUser && dataUser.roll === "admin";

    return (
      <React.Fragment>
        {isAdmin ? <RoutesAdmin /> : <RoutesUser />}
      </React.Fragment>
    );
  } else {
    return (
        <Routes />
    );
  }
}