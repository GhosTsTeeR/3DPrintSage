import React, { useEffect, useState } from "react";
import SeeCurse from "./SeeCurse";
import MainContainerSeeCurse from "./MainContainerSeeCurse";
import MainContentSeeCurse from "./MainContentSeeCurse";
import SeeContentCurse from "./SeeContentCurse";
import { useParams } from "react-router-dom";
import { getDataCurses } from "../../services";

export default function LayoutSeeCurse() {
  const { id } = useParams();

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

  return (
    <MainContainerSeeCurse>
      <MainContentSeeCurse>
        <SeeCurse
            text={text}
            section={section}
            courseInfo={courseInfo}
            position={position}
            stateSelection={stateSelection}
            setStateSelection={setStateSelection}
        />
      </MainContentSeeCurse>
      <SeeContentCurse
      position={position}
      setPosition={setPosition}
      courseInfo={courseInfo}
      />
    </MainContainerSeeCurse>
  );
}
