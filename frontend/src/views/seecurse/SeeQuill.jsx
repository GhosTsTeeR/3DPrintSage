import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Importa los estilos de Quill

export default function SeeQuill({ text, position, courseInfo }) {
  console.log(courseInfo);
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log("ejecucion del useEffect");
    if (courseInfo) {
      const currentItem = courseInfo.find((i) => i.position === position);
      setItem(currentItem);
    }
  }, [courseInfo, position]);

  if (!item) {
    return "";
  }

  const modules = {
    toolbar: false,
  };

  return (
    <ReactQuill value={item.dataQuill || text} modules={modules} readOnly />
  );
}
