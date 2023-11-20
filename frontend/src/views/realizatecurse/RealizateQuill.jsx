import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

export default function RealizateQuill({ text, position, courseInfo }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!Array.isArray(courseInfo.data) || courseInfo.data.length === 0) {
      setItem("Cargando la posible información...");
    } else {
      const currentItem = courseInfo.data.find((i) => i.position === position);
      setItem(currentItem || null);
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