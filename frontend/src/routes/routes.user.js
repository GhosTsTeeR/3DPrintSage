import React from "react";
import Home from "../views/Home";
import { Route, Routes } from "react-router-dom";
import Guide from "../views/Guide";
import Profile from "../views/Profile";
import AllPrinters from "../views/allprinters/AllPrinters";
import MainContainerPrint from "../views/allprinters/MainContainerPrint";
import MainContentPrint from "../views/allprinters/MainContentPrint";
import SettingsPrinter from "../views/allprinters/SettingsPrinter";
import MainContainerCurse from "../views/allcurses/MainContainerCurse";
import MainContentCurse from "../views/allcurses/MainContentCurse";
import AllCurses from "../views/allcurses/AllCurses";
import SettingsCurses from "../views/allcurses/SettingsCurses";
import RealizeCurse from "../views/realizecurse/LayoutSeeCurse";
import Doing from "../views/search/Doing";
 

export default function RoutesUser() {
  return (
    <Routes>
    {/* Rutas para usuarios autenticados */}
    <Route path="/" element={<Home />} />
    <Route path="/guia-practica" element={<Guide />} />
    <Route path="/conceptos-basicos" element={<Home />} />
    <Route path="/perfil" element={<Profile />} />
    <Route path="/search" element={<Doing/>} />
    <Route
        path="/curso/:id"
        element={
          <RealizeCurse/>
        }
      />
    <Route
      path="/impresoras"
      element={
        <MainContainerPrint>
          <MainContentPrint>
            <AllPrinters />
          </MainContentPrint>
          <SettingsPrinter/>
        </MainContainerPrint>
      }
    />
    <Route
            path="/cursos"
            element={
              <MainContainerCurse>
                <MainContentCurse>
                  <AllCurses />
                </MainContentCurse>
                <SettingsCurses/>
              </MainContainerCurse>
            }
          />
  </Routes>
  )
}
