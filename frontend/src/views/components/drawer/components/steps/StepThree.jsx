import React from "react";
import Header from "../Header";
import YouTube from 'react-youtube';
import CardConfigurationPrinter from "../cards/CardConfigurationPrinter";
export default function StepThree({ title, activeStep, setActiveStep }) {
  const mode = "ModeLight";
  const opts = {
    playerVars: {
      autoplay: 0, 
    },
  };
  const onReady = (event) => {
    // Acciones que se realizan cuando el reproductor está listo
  };
  const videoId = 'r7umA0p6fvw';
  const datosCard = [
    {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 1: Desempaquetado y Ensamblaje",
        parrafo: "Desempaquete la impresora 3D y ensamble las partes siguiendo las instrucciones del fabricante. Asegúrese de que todos los componentes estén correctamente conectados."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 2: Nivelación de la Cama de Impresión",
        parrafo: "Ajuste la cama de impresión para garantizar que esté nivelada y a la distancia adecuada de la boquilla. Esto es esencial para una adhesión adecuada."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 3: Carga de Material",
        parrafo: "Cargue el material de impresión, ya sea filamento PLA, ABS u otro, en la impresora 3D siguiendo las indicaciones del manual. Asegúrese de que el material esté alimentado correctamente."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 4: Configuración de Software",
        parrafo: "Instale y configure el software de control de la impresora 3D en su computadora. Ajuste la temperatura, la velocidad y otros parámetros según sus necesidades y el material utilizado."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 5: Preparación del Archivo de Impresión",
        parrafo: "Prepare su diseño 3D en un formato compatible con la impresora. Use un software de modelado 3D para generar el archivo STL y cargue el archivo en el software de control."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 6: Inicio de la Impresión",
        parrafo: "Inicie la impresión desde el software de control. La impresora calentará la boquilla y la cama antes de comenzar. Asegúrese de que la impresión comience sin problemas."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 7: Monitoreo y Ajustes",
        parrafo: "Monitoree la impresión y realice ajustes según sea necesario. Preste atención a cualquier problema como atascos, y ajuste la velocidad y la temperatura si es necesario."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 8: Retirada y Posprocesamiento",
        parrafo: "Una vez que la impresión esté completa, retire con cuidado el objeto impreso de la cama. Realice cualquier proceso de posprocesamiento necesario, como lijado o pintura."
      }

  ];
  return (
    <div className={"GM__" + mode + "__step"}>
      <Header
        title={title}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div className={"GM__"+mode+"__step-video"}>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
      <div className={"GM__" + mode + "__step-card"}>
        <CardConfigurationPrinter datosCard={datosCard} />
      </div>
    </div>
  );
}
