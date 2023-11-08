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

export default function xcvxcv({
  selectedAnswer,
  setSelectedAnswer,
  selectedQuestion,
  setSelectedQuestion,
  courseInfo,
  setCourseInfo,
}) {
  
  const [updateQuestion, setUpdateQuestion] = React.useState({
    id: "",
    question: "",
    options: [],
  });
  const handleQuestionChange = (questionId, optionId) => {
    const updatedQuestions = [...selectedQuestion];

    const selectedQuestionIndex = updatedQuestions.findIndex(
      (question) => question.id === questionId
    );

    if (selectedQuestionIndex !== -1) {
      const question = updatedQuestions[selectedQuestionIndex];

      question.options.forEach((option) => {
        option.activa = option.id === optionId;
      });

      setSelectedQuestion(updatedQuestions);
    }
  };

  const handleCorrectAnswerChange = (questionId, optionId) => {
    const updatedAnswers = [...selectedAnswer];

    const selectedAnswerIndex = updatedAnswers.findIndex(
      (answer) => answer.questionId === questionId
    );

    if (selectedAnswerIndex !== -1) {
      updatedAnswers[selectedAnswerIndex].optionId = optionId;
    } else {
      updatedAnswers.push({ questionId, optionId });
    }

    setSelectedAnswer(updatedAnswers);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (selectedQuestion.length === 0) {
      setUpdateQuestion((prevQuestion) => ({ ...prevQuestion, id: 1 }));
      setOpen(true);
    } else {
      const lastQuestion = selectedQuestion[selectedQuestion.length - 1];
      setUpdateQuestion((prevQuestion) => ({
        ...prevQuestion,
        id: lastQuestion.id + 1,
      }));
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateQuestion = (e) => {
    setUpdateQuestion((prevQuestion) => ({
      ...prevQuestion,
      question: e.target.value,
    }));
  };
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
    setSelectedQuestion((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];

      // incrementa el id para el nuevo elemento
      const newId =
        updatedQuestions.length > 0
          ? updatedQuestions[updatedQuestions.length - 1].id + 1
          : 1;

      // crea un nuevo objeto con los datos de updateQuestion
      const newQuestion = {
        id: newId,
        question: updateQuestion.question,
        options: [...updateQuestion.options],
      };

      // Agrega el nuevo objeto al arreglo
      updatedQuestions.push(newQuestion);

      return updatedQuestions;
    });
    setUpdateQuestion({
      id: "",
      question: "",
      options: [],
    });
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
  const handleDeleteQuestion = (questionId) => {
    const updatedQuestions = selectedQuestion.filter(
      (question) => question.id !== questionId
    );
    setSelectedQuestion(updatedQuestions);
  };
  const mode = "ModeLight";
  return (
    <div className={"GM__" + mode + "__main-createcurse-activity"}>
      <div className={"GM__" + mode + "__main-createcurse-activity-container"}>
        <h1>preguntas almacenadas</h1>
        {courseInfo &&
          courseInfo.map((info, infoIndex) => {
            if (info && info.dataActivity) {
              return (
                <div key={infoIndex}>
                  {info.dataActivity.map((activityGroup, index) => (
                    <div key={index}>
                      <p>{`Actividad ${index + 1}:`}</p>
                      {activityGroup.map((activity, activityIndex) => (
                        <div key={activityIndex}>
                          <p>{`Pregunta ${activityIndex + 1}: ${
                            activity.question
                          }`}</p>
                          <ul>
                            {activity.options.map((option, optionIndex) => (
                              <li key={optionIndex}>{`Opción ${
                                optionIndex + 1
                              }: ${option.text}`}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            }
            return <p>no se encontró nada</p>;
          })}
        <h1>preguntas recien creadas:</h1>
        {selectedQuestion.map((question) => (
          <div key={question.id}>
            <p>{question.question}</p>{" "}
            <Delete onClick={() => handleDeleteQuestion(question.id)} />
            <form>
              {question.options.map((option) => (
                <label key={option.id}>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option.id}
                    checked={option.activa}
                    onChange={() =>
                      handleQuestionChange(question.id, option.id)
                    }
                  />
                  {option.text}
                  <br></br>
                </label>
              ))}
            </form>
            <FormControl fullWidth>
              <NativeSelect
                value={
                  selectedAnswer.find(
                    (answer) => answer.questionId === question.id
                  )?.optionId || ""
                }
                onChange={(e) =>
                  handleCorrectAnswerChange(
                    question.id,
                    parseInt(e.target.value, 10)
                  )
                }
                inputProps={{
                  name: "correctAnswer",
                  id: `correctAnswer_${question.id}`,
                }}
              >
                <option value="">Selecciona una respuesta correcta</option>
                {question.options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.text}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
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
                  <div key={index}>
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
