import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import React from "react";
import SeeQuill from "./SeeQuill";
import SeeActivity from "./SeeActivity";
import { UserAuth } from "../../hooks/auth/Auth.Provider";

export default function SeeCurse({
  text,
  section,
  courseInfo,
  position,
  stateSelection,
  setStateSelection,
}) {
  const {openModalAuth, setOpenModalAuth} = UserAuth();
  const mode = "ModeLight";
  const handleChangeStateSelection = (event) => {
    const selectedId = event.target.value;
    setStateSelection(selectedId);
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
          <Button onClick={()=> setOpenModalAuth(!openModalAuth)}>Realizar Este curso</Button>
        </ul>
      </div>
      <div className={"GM__" + mode + "__main-createcurse-content"}>
        {stateSelection === "0" ? (
          <SeeQuill text={text} position={position} courseInfo={courseInfo} />
        ) : (
          <SeeActivity position={position} courseInfo={courseInfo} />
        )}
      </div>
    </div>
  );
}
