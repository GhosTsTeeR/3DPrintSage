import React, { Suspense } from "react";
import MainContainer from "../views/components/MainContainer";
import MainContent from "../views/components/MainContent";
import SwitchAuth from "./switch.auth";
import Header from "../views/components/partials/Header";
import LefNav from "../views/components/partials/LefNav";
import ChatBot from "../views/components/chatbot/ChatBot";
import RefreshIcon from '@mui/icons-material/Refresh';

const LayoutProvider = React.lazy(() =>
  import("../hooks/layout/types/Layout.Provider")
);

const AuthProvider = React.lazy(() => import("../hooks/auth/Auth.Provider"));

export default function RoutesConfig() {
  return (
    <Suspense
      fallback={
        <div className="loader" > <RefreshIcon  /></div>
      }
     
    >
      <AuthProvider>
        <LayoutProvider>
          <MainContainer>
            <Header />
            <LefNav />
            <MainContent>
              <SwitchAuth />
              <ChatBot />
            </MainContent>
          </MainContainer>
        </LayoutProvider>
      </AuthProvider>
    </Suspense>
  );
}
