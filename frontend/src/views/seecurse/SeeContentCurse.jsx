import { AlertTitle, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function SeeContentCurse({ position, setPosition, courseInfo }) {
  const [curse, setCurse] = useState(null);

  useEffect(() => {
    if (!Array.isArray(courseInfo.data) || courseInfo.data.length === 0) {
      setCurse("Cargando la posible información...");
    } else {
      setCurse(courseInfo.data || null);
    }
  }, [courseInfo, position]);

  if (!curse) {
    return "";
  }

  const handleRenderBtn = (positionNow) => {
    setPosition(positionNow);
  };

  const renderTextFieldOrButton = (info, index) => {
    if (
      typeof info.position === "number" &&
      info.position === position &&
      info.dataActivity
    ) {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{ margin: "10px", width: "100%", color:"gray" }}
            key={info.id}
            fullWidth
          >
            {info.title}
          </Button>
        </div>
      );
    } else if (info.dataActivity) {
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
    } else {
      return <h1>problemas..</h1>; 
    }
  };

  const mode = "ModeLight";
  return (
    <nav className={"GM__" + mode + "__leftnav-print"}>
      <Button sx={{ margin: "10px" }}>
        ¿Te gusta lo que ves? ¡Califícanos!
      </Button>
      <AlertTitle
        sx={{ margin: "10px", width: "282px" }}
        fullWidth
        type="text"
        placeholder={"Por favor, escribe un nombre"}
      />
      <h6>Secciones del curso</h6>
      {Array.isArray(curse) && curse.length > 0 ? (

        curse.map((info, index) => renderTextFieldOrButton(info, index))

      ) : (
        <div>No hay datos</div>
      )}
    </nav>
  );
}