import React from "react";
import Home from "../views/Home";
import { Route, Routes } from "react-router-dom";
import Guide from "../views/Guide";
import AllPrinters from "../views/allprinters/AllPrinters";
import MainContainerPrint from "../views/allprinters/MainContainerPrint";
import MainContentPrint from "../views/allprinters/MainContentPrint";
import SettingsPrinter from "../views/allprinters/SettingsPrinter";
import AllCurses from "../views/allcurses/AllCurses";
import MainContainerCurse from "../views/allcurses/MainContainerCurse";
import MainContentCurse from "../views/allcurses/MainContentCurse";
import SettingsCurses from "../views/allcurses/SettingsCurses";

export default function RoutesApp() {
  return (
        <Routes>
          {/* Rutas para usuarios no autenticados o con user null */}
          <Route path="/" element={<Home />} />
          <Route path="/guia-practica" element={<Guide />} />
          <Route path="/conceptos-basicos" element={<Home />} />
          <Route path="/foro" element={<Home />} />
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
  );
}
