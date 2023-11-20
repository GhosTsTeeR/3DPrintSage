import { Button, FormControl, NativeSelect } from "@mui/material";
import React, { useState } from "react";
import { UserAuth } from "../../hooks/auth/Auth.Provider";

export default function RealizateActivity({ position, courseInfo }) {
  const {openModalAuth, setOpenModalAuth} = UserAuth();
  const [curse, setCurse] = useState(courseInfo.data);
  const handleQuestionChange = (infoId, questionId, optionId) => {
    setCurse((prevCourseInfo) => {
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
  const mode = "ModeLight";
  return (
    <div className={"GM__" + mode + "__main-createcurse-activity"}>
      <div className={"GM__" + mode + "__main-createcurse-activity-container"}>
        {curse
          .filter((info) => info.position === position)
          .map((info, infoIndex) => (
            <div key={info.id}>
              {info.dataActivity && info.dataActivity.length > 0 ? (
                info.dataActivity.map((activity, activityIndex) => (
                  <div key={activity.id}>
                    <p>{activity.question}</p>
                    <form>
                      {activity.options.map((option, optionIndex) => (
                        <label key={option.id}>
                          <input
                            sx={{ margin: "10px" }}
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
                  </div>
                ))
              ) : (
                <div className={"GM__" + mode + "__main-createcurse-activity-container-vacio"}>Por el momento esta seccion no cuenta con una actividad :)</div>
              )}
            </div>
          ))}
      </div>
      <div className={"GM__" + mode + "__main-createcurse-activity-footer"}>
        <Button onClick={()=> setOpenModalAuth(!openModalAuth)} variant="outlined">Hacer el curso!!</Button>
      </div>
    </div>
  );
}
