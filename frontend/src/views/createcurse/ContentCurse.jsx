import { Delete } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";

export default function ContentCurse({
  position,
  setPosition,
  courseInfo,
  setCourseInfo,
  nameCurse,
  setNameCurse,
  text,
  setText,
  stateSelection,
  handleAddyCurseToBD
}) {
  const handleUpdateNameCurse = (e) => {
    setNameCurse(e.target.value);
  };
  const handleUpdateTitleSectionCurse = (e, id) => {
    const updatedCourseInfo = courseInfo.map((info) =>
      info.id === id ? { ...info, title: e.target.value } : info
    );
    setCourseInfo(updatedCourseInfo);
  };
  const handleAddSectionCurse = () => {
    const elementWithPosition = courseInfo.find((info) => info.position === position);
    if (elementWithPosition) {
      if (stateSelection === "0") {
        const item = courseInfo.find(i => i.position === position);
        item.dataQuill = text
        setCourseInfo(courseInfo);

      } else {
        console.log("no es necesario almacenar esto xd")
      }
  
      // Actualiza el estado courseInfo con el elemento actualizado
      setCourseInfo((prevCourseInfo) => {
        return prevCourseInfo.map((info) => {
          // Si la posición coincide, devuelve el elemento actualizado
          if (info.position === position) {
            return elementWithPosition;
          }
          // Si no, devuelve el elemento sin cambios
          return info;
        });
      });
    }
    const newOption = {
      id: courseInfo.length + 1,
      title: "Introduccion",
      sections: null,
      dataActivity: [],
      dataQuill: "",
      position: courseInfo.length + 1,
    };
    setCourseInfo((prevQuestion) => [...prevQuestion, newOption]);
  };
  const handleRenderBtn = (positionNow) => {
    setText("")
    setPosition(positionNow)
  };
  const handleOnClickRemoveItemCurse = (positionNow) => {
    setPosition(0)
    const updatedCourseInfo = courseInfo.filter((item) => item.position !== positionNow);
    setCourseInfo(updatedCourseInfo);
  };

  const renderTextFieldOrButton = (info, index) => {
    
    if (typeof info.position === "number" && info.position === position) {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
        <TextField
        sx={{ margin: "10px", width:"100%" }}
          key={info.id}
          fullWidth
          type="text"
          placeholder={info.title || "Por favor, describa la sección"}
          value={info.title}
          onChange={(e) => handleUpdateTitleSectionCurse(e, info.id)}
        />
        {info.position===0?"":<Delete onClick={()=>handleOnClickRemoveItemCurse(info.position)} />}
        
        </div>
      );
    } else {
      return (
        <Button
          sx={{ margin: "10px" }}
          key={info.id}
          fullWidth
          onClick={() => handleRenderBtn(info.position)}
        >
          {info.title}
        </Button>
      );
    }
  };

  const mode = "ModeLight";
  return (
    <nav className={"GM__" + mode + "__leftnav-print"}>
      <Button sx={{ margin: "10px" }} onClick={handleAddyCurseToBD}>
        Guardar En la BD
      </Button>
      <TextField
        sx={{ margin: "10px", width:"282px" }}
        fullWidth
        type="text"
        placeholder={nameCurse || "Porfavor escriba un nombre"}
        onChange={handleUpdateNameCurse}
      />
      <h6>secciones del curso</h6>
      {courseInfo.map((info, index) => renderTextFieldOrButton(info, index))}

      <Button sx={{ margin: "10px" }} onClick={handleAddSectionCurse}>
        +
      </Button>
    </nav>
  );
}
