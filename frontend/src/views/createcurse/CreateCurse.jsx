import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatAlignJustify as FormatAlignJustifyIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  FormatColorFill as FormatColorFillIcon,
  ArrowDropDown as ArrowDropDownIcon,
  PermMedia,
  InsertLink,
  FormatListBulleted,
  FormatListNumbered,
} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import QuillEdit from "./QuillEdit";
import ImageUploader from "./ImageUploader";
import ActivityEdit from "./ActivityEdit";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function CreateCurse({
  selections,
  courseInfo,
  setCourseInfo,
  position,
  stateSelection,
  setStateSelection,
  selectedQuestion,
  setSelectedQuestion,
  text,
  setText,
}) {
  
  const [alignment, setAlignment] = React.useState("left");
  const [archive, setArchive] = React.useState();
  const [bullet, setBullet] = React.useState();

  const [typeHeader, setTypeHeader] = React.useState(false);
  const [formats, setFormats] = React.useState(() => []);
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleHeader = (event, newHeader) => {
    event.preventDefault();
    setTypeHeader(newHeader);
  };

  const handleArchives = (event, newArchive) => {
    setArchive(newArchive);
  };

  const handleBullets = (event, newBullet) => {
    setBullet(newBullet);
  };
  const handleChangeStateSelection = (event) => {
    const selectedId = event.target.value;
    setStateSelection(selectedId);
  };
  const addDataCurse = () => {
    const elementWithPosition = courseInfo.find((info) => info.position === position);

  
    if (elementWithPosition) {
      if (stateSelection === "0") {
        const item = courseInfo.find(i => i.position === position);
        item.dataQuill = text
        setCourseInfo(courseInfo);
        setText("")
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
  };
  const mode = "ModeLight";
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
                  <option value="">
                      seleccione el tipo
                    </option>
                  {selections.map((item) => (
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
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  flexWrap: "wrap",
                }}
              >
                <StyledToggleButtonGroup
                  size="small"
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                  </ToggleButton>
                  <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified">
                    <FormatAlignJustifyIcon />
                  </ToggleButton>
                </StyledToggleButtonGroup>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ mx: 0.5, my: 1 }}
                />
                <StyledToggleButtonGroup
                  size="small"
                  value={typeHeader}
                  exclusive
                  onChange={handleHeader}
                  aria-label="encabezado"
                >
                  <ToggleButton value="1" aria-label="Encabezado de titulo">
                    h1
                  </ToggleButton>
                  <ToggleButton value="2" aria-label="Encabezado de subtitulo">
                    h2
                  </ToggleButton>
                  <ToggleButton
                    value="6"
                    aria-label="Encabezado de sub-subtitulo"
                  >
                    h6
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified" disabled>
                    <FormatAlignJustifyIcon />
                  </ToggleButton>
                </StyledToggleButtonGroup>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ mx: 0.5, my: 1 }}
                />
                <StyledToggleButtonGroup
                  size="small"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon />
                  </ToggleButton>
                  <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon />
                  </ToggleButton>
                  <ToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon />
                  </ToggleButton>
                  <ToggleButton value="color" aria-label="color">
                    <FormatColorFillIcon />
                    <ArrowDropDownIcon />
                  </ToggleButton>
                </StyledToggleButtonGroup>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ mx: 0.5, my: 1 }}
                />
                <StyledToggleButtonGroup
                  size="small"
                  value={archive}
                  exclusive
                  onChange={handleArchives}
                  aria-label="Archivos y enlaces"
                >
                  <ToggleButton value="file" aria-label="file">
                    <PermMedia />
                  </ToggleButton>
                  <ToggleButton value="link" aria-label="link">
                    <InsertLink />
                  </ToggleButton>
                </StyledToggleButtonGroup>
                <Divider
                  flexItem
                  orientation="vertical"
                  sx={{ mx: 0.5, my: 1 }}
                />
                <StyledToggleButtonGroup
                  size="small"
                  value={bullet}
                  exclusive
                  onChange={handleBullets}
                  aria-label="Viñetas"
                >
                  <ToggleButton value="bullet" aria-label="Viñeta Bullet">
                    <FormatListBulleted />
                  </ToggleButton>
                  <ToggleButton value="ordered" aria-label="Viñeta numerica">
                    <FormatListNumbered />
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Paper>
            ) : (
              <div>Seccion para Realizar actividades </div>
            )}
          </li>
          <Button onClick={() => addDataCurse()}>Guardar</Button>
        </ul>
      </div>
      <div className={"GM__" + mode + "__main-createcurse-content"}>
        {stateSelection === "0" ? (
          <QuillEdit
            alignment={alignment}
            formats={formats}
            archive={archive}
            setArchive={setArchive}
            bullet={bullet}
            typeHeader={typeHeader}
            setTypeHeader={setTypeHeader}
            text={text}
            setText={setText}
            position={position}
            courseInfo={courseInfo}
          />
        ) : (
          <ActivityEdit
            position={position}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
          />
        )}
      </div>
    </div>
  );
}
