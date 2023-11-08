import { Button, TextField } from "@mui/material";
import React from "react";

export default function ContentCurse({
  position,
  setPosition,
  courseInfo,
  setCourseInfo,
  nameCurse,
  setNameCurse,
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
    const newOption = {
      id: courseInfo.length + 1,
      title: "Introduccion",
      sections: null,
      dataActivity: [],
      dataQuill: "",
      position: courseInfo.length + 1
    };
    setCourseInfo((prevQuestion) => ([
       ...prevQuestion, newOption
    ]));
  };
  const renderTextFieldOrButton = (info, index) => {
    if (typeof info.position === 'number' && info.position === position) {
      return (
        <TextField
          key={info.id}
          fullWidth
          type="text"
          placeholder={info.title || "Por favor, describa la sección"}
          value={info.title}
          onChange={(e) => handleUpdateTitleSectionCurse(e, info.id)}
        />
      );
    } else {
      return (
        <Button
          key={info.id}
          fullWidth
          onClick={() => setPosition(info.position)}
        >
          {info.title}
        </Button>
      );
    }
  };
  
  
  const mode = "ModeLight";
  return (
    <nav className={"GM__" + mode + "__leftnav-print"}>
      <TextField
        fullWidth
        type="text"
        placeholder={nameCurse || "Porfavor escriba un nombre"}
        onChange={handleUpdateNameCurse}
      />
      <h6>secciones del curso</h6>
      {courseInfo.map((info, index) => renderTextFieldOrButton(info, index))}

      <Button onClick={handleAddSectionCurse}>+</Button>
    </nav>

  );
}
