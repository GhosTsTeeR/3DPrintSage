import React, { useState } from "react";
import Home from "../views/Home";
import { Route, Routes } from "react-router-dom";
import Guide from "../views/Guide";
import AllPrinters from "../views/allprinters/AllPrinters";
import MainContainerPrint from "../views/allprinters/MainContainerPrint";
import MainContentPrint from "../views/allprinters/MainContentPrint";
import SettingsPrinter from "../views/allprinters/SettingsPrinter";
import MainContainerCurse from "../views/allcurses/MainContainerCurse";
import MainContentCurse from "../views/allcurses/MainContentCurse";
import AllCurses from "../views/allcurses/AllCurses";
import SettingsCurses from "../views/allcurses/SettingsCurses";
import ProfileAdmin from "../views/ProfileAdmin";
import MainContainerCreateCurse from "../views/createcurse/MainContainerCreateCurse";
import MainContentCreateCurse from "../views/createcurse/MainContentCreateCurse";
import CreateCurse from "../views/createcurse/CreateCurse";
import ContentCurse from "../views/createcurse/ContentCurse";
import { addCurseToBD } from "../services";
import { UserAuth } from "../hooks/auth/Auth.Provider";

export default function RoutesAdmin() {
  const { user } = UserAuth();
  const [text, setText] = useState("");
  const [nameCurse, setNameCurse] = useState("nombre del curso");
  const [selectedQuestion, setSelectedQuestion] = useState([
    {
      id: 1,
      question: "¿Esta es la pregunta 1?",
      options: [
        { id: 1, text: "Sí", activa: false },
        { id: 2, text: "No", activa: false },
        { id: 3, text: "No estoy seguro", activa: false },
      ],
      respuesta: "",
    },
    {
      id: 2,
      question: "¿Esta es la pregunta 2?",
      options: [
        { id: 1, text: "Opción A", activa: false },
        { id: 2, text: "Opción B", activa: false },
        { id: 3, text: "Opción C", activa: false },
      ],
      respuesta: "",
    },
  ]);
  const [stateSelection, setStateSelection] = useState("0");
  const [section, setSection] = useState([
    {
      id: 0,
      type: "default",
      content: "",
    },
    {
      id: 1,
      type: "activity",
      content: "",
    },
  ]);
  const [position, setPosition] = useState(0);
  const [courseInfo, setCourseInfo] = useState([
    {
      id: 1,
      title: "Introduccion",
      sections: null,
      dataActivity: [

      ],
      dataQuill: "",
      position: 0,
    },
  ]);
  const handleAddyCurseToBD = async () => {
    try {
      const datas = await addCurseToBD(nameCurse, courseInfo, user.uid);
      console.log(datas);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Routes>
      {/* Rutas para usuarios autenticados */}
      <Route path="/" element={<Home />} />
      <Route path="/guia-practica" element={<Guide />} />
      <Route path="/conceptos-basicos" element={<Home />} />
      <Route path="/perfil" element={<ProfileAdmin />} />
      <Route
        path="/impresoras"
        element={
          <MainContainerPrint>
            <MainContentPrint>
              <AllPrinters />
            </MainContentPrint>
            <SettingsPrinter />
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
            <SettingsCurses />
          </MainContainerCurse>
        }
      />
      <Route
        path="/crear-curso"
        element={
          <MainContainerCreateCurse>
            <MainContentCreateCurse>
              <CreateCurse
                selections={section}
                courseInfo={courseInfo}
                setCourseInfo={setCourseInfo}
                position={position}
                stateSelection={stateSelection}
                setStateSelection={setStateSelection}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
                text={text}
                setText={setText}
              />
            </MainContentCreateCurse>
            <ContentCurse
              position={position}
              setPosition={setPosition}
              courseInfo={courseInfo}
              setCourseInfo={setCourseInfo}
              nameCurse={nameCurse}
              setNameCurse={setNameCurse}
              text={text}
              setText={setText}
              stateSelection={stateSelection}
              handleAddyCurseToBD={handleAddyCurseToBD}
            />
          </MainContainerCreateCurse>
        }
      />
    </Routes>
  );
}
