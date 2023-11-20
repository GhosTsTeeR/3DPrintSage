import React, { useEffect, useState } from "react";
import SeeCurse from "./RealizateCurse";
import MainContainerSeeCurse from "./MainContainerRealizateCurse";
import MainContentSeeCurse from "./MainContentRealizateCurse";
import SeeContentCurse from "./RealizateContentCurse";
import { useParams } from "react-router-dom";
import { getDataCurses, getDataCursesUser } from "../../services";
import { UserAuth } from "../../hooks/auth/Auth.Provider";

export default function LayoutRealizateCurse() {
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  const { id } = useParams();
  const [actualizar, setActualizar] = useState(false);

  const [text, setText] = useState(
    "Esta seccion no cuenta con esta informacion, prueba verificando con la seccion de actividades :)"
  );
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
  const [courseInfo, setCourseInfo] = useState([]);
  const [courseInfoUser, setCourseInfoUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataCurses(id);
        setCourseInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataCursesUser(id, user.uid);
        setCourseInfoUser(response.data);
        setActualizar(false);
      } catch (error) {
        console.error(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [actualizar]);
  if (loading) {
    return <p>Cargando...</p>;
  }
  
console.log(courseInfoUser)
  return (
    <MainContainerSeeCurse>
      <MainContentSeeCurse>
      {courseInfoUser && courseInfoUser.length > 0 && courseInfoUser[0].datos && courseInfoUser[0].datos.estateCurse ? (
          <div>Curso finalizado!!</div>
        ) : (
          <SeeCurse
            text={text}
            section={section}
            courseInfo={courseInfo}
            position={position}
            setPosition={setPosition}
            stateSelection={stateSelection}
            setStateSelection={setStateSelection}
            courseInfoUser={courseInfoUser}
            setActualizar={setActualizar}
          />
        )}
      </MainContentSeeCurse>
      <SeeContentCurse
        position={position}
        setPosition={setPosition}
        courseInfo={courseInfo}
      />
    </MainContainerSeeCurse>
  );
}
