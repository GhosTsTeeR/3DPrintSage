import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Snackbar,
  Slide, 
  Alert
} from "@mui/material";
import React, { useState } from "react";
import SeeQuill from "./RealizateQuill";
import SeeActivity from "./RealizateActivity";
import { UserAuth } from "../../hooks/auth/Auth.Provider";
import { addDataCurseUser, addFinalizateCurseUser, modifyDataCurseUser } from "../../services";
import { useParams } from "react-router-dom";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export default function RealizateCurse({
  text,
  section,
  courseInfo,
  position,
  setPosition,
  stateSelection,
  setStateSelection,
  courseInfoUser,
  setActualizar,
}) {
  const { user } = UserAuth();
  const { id } = useParams();
  //const { openModalAuth, setOpenModalAuth } = UserAuth();

  const [open, setOpen] = useState(false);
  const [mesaggeResponse, setMesaggeResponse] = useState("");
  const [transition, setTransition] = useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };


  const mode = "ModeLight";
  const handleChangeStateSelection = (event) => {
    const selectedId = event.target.value;
    setStateSelection(selectedId);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const highestPosition =
    courseInfo.data && courseInfo.data.length > 0
      ? Math.max(...courseInfo.data.map((item) => item.position))
      : 0;
  const handleRenderBtn = async (estadoSiguiente, estado) => {
    try {
      const datas = await modifyDataCurseUser(id, user.uid, position, estado);
      console.log(datas);
      setActualizar(true);
    } catch (error) {
      console.error(error);
    }
    let nuevaPosicion;

    if (estadoSiguiente === "avanza") {
      // Encontrar la siguiente posición no vacía después de la posición actual
      nuevaPosicion = courseInfo.data.find(
        (item) => item.position > position
      )?.position;
    } else {
      // Obtener todas las posiciones no vacías
      const posicionesNoVacias = courseInfo.data
        .filter((item) => item.position < position)
        .map((item) => item.position);

      // Obtener la posición más alta de las posiciones no vacías
      nuevaPosicion =
        posicionesNoVacias.length > 0
          ? Math.max(...posicionesNoVacias)
          : undefined;
    }

    // Actualizar la posición solo si se encuentra una nueva posición no vacía
    if (nuevaPosicion !== undefined) {
      setPosition(nuevaPosicion);
    }
  };

  const handleRealizateCurse = async () => {
    try {
      const datas = await addDataCurseUser(id, user.uid, courseInfo.name);
      console.log(datas);
      setActualizar(true);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleFinalizarCurso = async () => {
    try {
      const datas = await addFinalizateCurseUser(id, user.uid, true);
      setMesaggeResponse({text:datas.message, type:"succes"})

      handleClick(TransitionUp)();
      setActualizar(true);
    } catch (error) {
      setMesaggeResponse({text:"Error En las respuesta de la Api", type:"error"})
      handleClick(TransitionUp)();
    }
  };
  return (
    <div className={"GM__" + mode + "__main-createcurse"}>
      <div className={"GM__" + mode + "__main-createcurse-header"}>
        <ul>
          <li>
            {" "}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Tipo de curso
                </InputLabel>
                <NativeSelect
                  onChange={handleChangeStateSelection}
                  inputProps={{
                    name: "Opciones",
                    id: "uncontrolled-native",
                  }}
                >
                  {section.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.type}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
          </li>
          <li>
            {stateSelection === "0" ? (
              <div>Seccion de lectura y aprendizaje </div>
            ) : (
              <div>Seccion de actividades </div>
            )}
          </li>
          {courseInfoUser && Object.keys(courseInfoUser).length > 0 ? (
            <>
              <Button
                disabled={position === 0}
                sx={{ width: 10 }}
                onClick={() => handleRenderBtn("retrocede", false)}
              >
                Regresar
              </Button>
              {position === highestPosition ? (
                <Button
                  sx={{ width: 10 }}
                  onClick={() => handleFinalizarCurso()}
                >
                  Finalizar Curso
                </Button>
              ) : (
                <Button
                  disabled={highestPosition === position}
                  sx={{ width: 10 }}
                  onClick={() => handleRenderBtn("avanza", true)}
                >
                  Avanzar
                </Button>
              )}
            </>
          ) : (
            <Button sx={{ width: 10 }} onClick={() => handleRealizateCurse()}>
              Realizar este curso
            </Button>
          )}
        </ul>
      </div>
      <div className={"GM__" + mode + "__main-createcurse-content"}>
        {stateSelection === "0" ? (
          <SeeQuill text={text} position={position} courseInfo={courseInfo} />
        ) : (
          <SeeActivity position={position} courseInfo={courseInfo} />
        )}
      </div>
      <Box sx={{ width: 300 }}>
      <Snackbar
        
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
      >
        <Alert onClose={handleClose} severity={mesaggeResponse.type==="error"?"error":"success"} sx={{ width: '100%' }}>
          {mesaggeResponse.text}
        </Alert>
      </Snackbar>
    </Box>
    </div>
  );
}
