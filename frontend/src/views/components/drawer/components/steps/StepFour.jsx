import React from "react";
import Header from "../Header";
import YouTube from "react-youtube";
import CardImpresion from "../cards/CardImpresion";
export default function StepFour({ title, activeStep, setActiveStep }) {
  const mode = "ModeLight";
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    // Acciones que se realizan cuando el reproductor está listo
  };
  const videoId = "hKrKfshNVOQ";
  const datosCard = [
    {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 1: Preparación del Archivo STL",
        parrafo: "Comienza por cargar el archivo STL en el software de control de la impresora 3D. Asegúrate de que el modelo se ajuste a tus preferencias de tamaño, posición y orientación."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 2: Configuración de Parámetros",
        parrafo: "Ajusta los parámetros de impresión, como la temperatura de la boquilla, la velocidad de impresión y la densidad de relleno. Estos ajustes variarán según el material y el diseño."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 3: Inicio de la Impresión",
        parrafo: "Inicia la impresión desde el software. La impresora 3D calentará la boquilla y la cama de impresión y comenzará a imprimir capa por capa."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 4: Monitoreo y Ajustes",
        parrafo: "Durante la impresión, monitorea el progreso y realiza ajustes si es necesario. Presta atención a la adherencia del material y a posibles problemas como atascos."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 5: Finalización de la Impresión",
        parrafo: "Una vez que la impresión esté completa, la impresora 3D se detendrá. Espera a que el objeto impreso se enfríe antes de retirarlo de la cama de impresión."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 6: Posprocesamiento (Opcional)",
        parrafo: "Realiza cualquier posprocesamiento necesario, como lijado, pintura o ensamblaje. Esto dependerá de tus necesidades y del diseño final."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 7: Evaluación de la Calidad",
        parrafo: "Inspecciona el objeto impreso para asegurarte de que cumple con tus estándares de calidad. Si es necesario, realiza ajustes en futuras impresiones."
      }
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
          La impresión 3D representa el emocionante punto culminante de un
          proceso creativo y técnico en el mundo del diseño y la fabricación.
          Este paso final da vida a las ideas y diseños tridimensionales
          previamente concebidos. A través de la impresión 3D, un modelo virtual
          se materializa en un objeto físico capaz de cumplir una variedad de
          propósitos, desde prototipos y piezas personalizadas hasta obras de
          arte y componentes industriales. La impresión 3D es una tecnología
          revolucionaria que utiliza una variedad de materiales, desde plásticos
          hasta metales y cerámica, y ofrece una precisión y versatilidad
          sorprendentes. En este proceso, los diseños digitales se convierten en
          realidad tangible capaz de inspirar innovación, acelerar la
          fabricación y abrir nuevas posibilidades en numerosos campos, desde la
          medicina hasta la industria aeroespacial. En este contexto,
          exploraremos los aspectos fundamentales de la impresión 3D, desde la
          preparación del diseño hasta los pasos clave que hacen posible la
          creación de objetos tridimensionales impresionantes y funcionales.
        </p>
      </div>
      <div className={"GM__" + mode + "__step-video"}>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
      <div className={"GM__" + mode + "__step-card"}>
        <CardImpresion datosCard={datosCard} />
      </div>
    </div>
  );
}
