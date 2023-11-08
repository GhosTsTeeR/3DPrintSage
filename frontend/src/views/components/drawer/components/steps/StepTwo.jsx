import React from "react";
import Header from "../Header";
import CardSoftwareDesign from "../cards/CardSoftwareDesign"
export default function StepTwo({ title, activeStep, setActiveStep }) {
  const mode = "ModeLight";
  const datosCard = [
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Blender",
      parrafo: "Blender es un software de modelado 3D de código abierto que se utiliza en animación, efectos visuales, diseño de videojuegos y más. Ofrece una amplia gama de herramientas y es adecuado para principiantes y profesionales."
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Autodesk Maya",
      parrafo: "Maya es una potente herramienta de modelado 3D y animación utilizada en la industria del cine, los videojuegos y la televisión. Ofrece capacidades avanzadas de animación y simulación."
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Autodesk 3ds Max",
      parrafo: "3ds Max es un software de modelado y animación 3D utilizado en la visualización arquitectónica, el diseño de productos y la creación de contenido para videojuegos."
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Cinema 4D",
      parrafo: "Cinema 4D es conocido por su facilidad de uso y es utilizado en el diseño de motion graphics, efectos visuales y modelado 3D. Es popular en la industria de la publicidad y el diseño."
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Rhinoceros (Rhino)",
      parrafo: "Rhino es conocido por su modelado NURBS, utilizado en diseño industrial, arquitectura y diseño de productos. Ofrece una amplia gama de complementos para funciones personalizadas."
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "ZBrush",
      parrafo: "ZBrush es una potente herramienta de escultura digital ampliamente utilizada en la industria del entretenimiento para crear personajes y criaturas detallados."
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "SketchUp",
      parrafo: "SketchUp es conocido por su facilidad de uso y se utiliza en diseño arquitectónico, interiorismo y modelado 3D. Es popular entre arquitectos y diseñadores de interiores."
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "SolidWorks",
      parrafo: "SolidWorks es una aplicación CAD 3D ampliamente utilizada en la ingeniería y el diseño de productos. Se enfoca en el diseño paramétrico y la simulación."
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Tinkercad",
      parrafo: "Tinkercad es una herramienta de modelado 3D en línea ideal para principiantes y educadores. Se utiliza en la enseñanza de diseño 3D y la creación de prototipos rápidos."
    },
  ];
  return (
    <div className={"GM__" + mode + "__step"}>
      <Header
        title={title}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div className={"GM__" + mode + "__step-introduction"}>
        <p>
          La etapa de Preparación del Diseño es un paso fundamental en el
          proceso de impresión 3D que marca la transición desde la concepción de
          una idea hasta la materialización de un objeto tridimensional. En esta
          fase, los diseñadores y fabricantes se enfrentan a desafíos clave que
          incluyen la optimización del modelo 3D, la selección de materiales
          adecuados y la configuración de la impresora para lograr resultados
          precisos y funcionales. La importancia de esta etapa radica en su
          capacidad para determinar la calidad y la eficacia de la impresión
          final, así como en la optimización de recursos y la minimización de
          desechos. Con una preparación cuidadosa del diseño, se garantiza que
          la impresión 3D sea un proceso eficiente y exitoso, lo que lleva a la
          creación de objetos de alta calidad que pueden utilizarse en una
          amplia gama de aplicaciones, desde prototipos hasta productos finales.
        </p>
      </div>
      <div className={"GM__" + mode + "__step-card"}>
        <CardSoftwareDesign datosCard={datosCard} />
      </div>
    </div>
  );
}
