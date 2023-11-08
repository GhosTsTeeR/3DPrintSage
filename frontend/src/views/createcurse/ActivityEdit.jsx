import * as React from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Delete } from "@mui/icons-material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActivityEdit({ position, courseInfo, setCourseInfo }) {
  const [updateQuestion, setUpdateQuestion] = React.useState({
    id: "",
    question: "",
    options: [],
  });
  const handleAddOption = () => {
    const newOption = {
      id: updateQuestion.options.length + 1, // Incrementar el ID
      text: "",
      activa: false,
    };
    setUpdateQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: [...prevQuestion.options, newOption],
    }));
  };
  const handleAddQuestion = () => {
    // Crea un nuevo objeto de pregunta con un ID único
    const newQuestion = {
      id:
        courseInfo.reduce((maxId, info) => {
          return Math.max(
            maxId,
            ...info.dataActivity.map((activity) => activity.id)
          );
        }, 0) + 1,
      question: updateQuestion.question,
      options: updateQuestion.options,
      respuesta: "",
    };
  
    // Encuentra la posición actual en cursoInfo y agrega la nueva pregunta
    const updatedCourseInfo = courseInfo.map((info) => {
      if (info.position === position) {
        return {
          ...info,
          dataActivity: [...info.dataActivity, newQuestion],
        };
      }
      return info;
    });
  
    setCourseInfo(updatedCourseInfo);
  
    // Limpia el estado updateQuestion
    setUpdateQuestion({ question: "", options: [] });
  
    // Cierra el modal
    setOpen(false);
  };
  const handleUpdateQuestion = (e) => {
    setUpdateQuestion((prevQuestion) => ({
      ...prevQuestion,
      question: e.target.value,
    }));
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleAnswerChange = (index, text) => {
    setUpdateQuestion((prevQuestion) => {
      const updatedQuestion = { ...prevQuestion };
      const updatedOptions = [...updatedQuestion.options];

      updatedOptions[index] = {
        ...updatedOptions[index],
        text: text,
      };

      // Actualiza el estado con las opciones modificadas
      updatedQuestion.options = updatedOptions;

      return updatedQuestion;
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteQuestion = (questionId) => {
    const updatedCourseInfo = courseInfo.map((info) => ({
      ...info,
      dataActivity: info.dataActivity.filter(
        (activity) => activity.id !== questionId
      ),
    }));

    // Actualiza el estado con el nuevo arreglo
    setCourseInfo(updatedCourseInfo);
  };
  const handleQuestionChange = (infoId, questionId, optionId) => {
    setCourseInfo((prevCourseInfo) => {
      const updatedCourseInfo = prevCourseInfo.map((info) => {
        if (info.id === infoId) {
          const updatedDataActivity = info.dataActivity.map((activity) => {
            if (activity.id === questionId) {
              const updatedOptions = activity.options.map((option) => {
                if (option.id === optionId) {
                  option.activa = !option.activa; // Cambia el valor de activa
                } else {
                  option.activa = false; // Desactiva las demás opciones
                }
                return option;
              });
              activity.options = updatedOptions;
            }
            return activity;
          });
          info.dataActivity = updatedDataActivity;
        }
        return info;
      });

      return updatedCourseInfo;
    });
  };
  const handleCorrectAnswerChange = (questionId, selectedOptionId) => {
    const newCourseInfo = [...courseInfo]; // clona el estado actual
    const question = newCourseInfo[0].dataActivity.find(
      (q) => q.id === questionId
    );

    if (question) {
      // Modifica la respuesta en el objeto question
      question.respuesta = {
        idOption: selectedOptionId,
        text: question.options.find((option) => option.id === selectedOptionId)
          .text,
      };

      // Actualiza el estado con el nuevo estado clonado
      setCourseInfo(newCourseInfo);
    }
  };

  const mode = "ModeLight";
  return (
    <div className={"GM__" + mode + "__main-createcurse-activity"}>
      <div className={"GM__" + mode + "__main-createcurse-activity-container"}>
      {courseInfo
        .filter((info) => info.position === position) // Filtra solo el info que coincida con currentPosition
        .map((info, infoIndex) => (
          <div key={info.id}>
            {info.dataActivity &&
              info.dataActivity.map((activity, activityIndex) => (
                <div key={activity.id}>
                  <p>{activity.question}</p>
                  <Delete onClick={() => handleDeleteQuestion(activity.id)} />
                  <form>
                    {activity.options.map((option, optionIndex) => (
                      <label key={option.id}>
                        <input
                          type="radio"
                          name={`question_${option.id}`}
                          value={option.id}
                          checked={option.activa}
                          onClick={() =>
                            handleQuestionChange(
                              info.id,
                              activity.id,
                              option.id
                            )
                          }
                        />
                        {option.text}
                        <br></br>
                      </label>
                    ))}
                  </form>
                  <FormControl fullWidth>
                    <NativeSelect
                      value={activity.respuesta.idOption || ""}
                      onChange={(e) =>
                        handleCorrectAnswerChange(
                          activity.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      inputProps={{
                        name: "correctAnswer",
                        id: `correctAnswer_${activity.id}`,
                      }}
                    >
                      <option value="">
                        Selecciona una respuesta correcta
                      </option>
                      {activity.options.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.text}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className={"GM__" + mode + "__main-createcurse-activity-footer"}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <TextField
              type="text"
              placeholder="Escriba la pregunta"
              value={updateQuestion.question}
              onChange={handleUpdateQuestion}
            />
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {updateQuestion.options.length === 0 ? (
                <h6>Añade una respuesta pulsando +</h6>
              ) : (
                updateQuestion.options.map((option, index) => (
                  <div key={option.id}>
                    <TextField
                      type="text"
                      placeholder={option.text}
                      value={option.text}
                      onChange={(e) =>
                        handleAnswerChange(index, e.target.value)
                      }
                    />
                  </div>
                ))
              )}
              <Button onClick={handleAddOption}>+</Button>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleAddQuestion}>Guardar</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
