import React from "react";
import Header from "../Header";
import YouTube from "react-youtube";
import CardImpresion from "../cards/CardImpresion";
export default function StepFive({ title, activeStep, setActiveStep }) {
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
        titulo: "Paso 1: Lijado y Desbaste",
        parrafo: "Comienza por lijar suavemente la superficie impresa para eliminar imperfecciones y capas visibles. Utiliza papel de lija de grano fino para un acabado más suave."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 2: Eliminación de Soportes",
        parrafo: "Si el objeto impreso tiene soportes de impresión, retíralos con cuidado utilizando herramientas adecuadas, como alicates o cuchillas, asegurándote de no dañar la pieza principal."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 3: Pintura y Acabados",
        parrafo: "Aplica pintura o recubrimientos para personalizar y proteger la superficie del objeto. Puedes utilizar pinturas acrílicas, esmaltes, o incluso técnicas de aerografía para lograr el efecto deseado."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 4: Ensamblaje (si es necesario)",
        parrafo: "Si tu diseño consta de múltiples piezas, ensámblalas utilizando adhesivos o técnicas de unión adecuadas. Asegúrate de que las piezas encajen de manera precisa."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 5: Acabados Especiales",
        parrafo: "Considera la aplicación de acabados especiales, como pulido, anodizado o recubrimientos texturizados, para lograr efectos únicos y mejorar las propiedades del objeto."
      },
      {
        img: "https://api.dicebear.com/7.x/bottts/png",
        titulo: "Paso 6: Evaluación Final",
        parrafo: "Inspecciona el objeto después del post-procesamiento para asegurarte de que cumple con tus estándares de calidad y diseño. Realiza ajustes si es necesario."
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
        El post-procesamiento es una etapa esencial y a menudo creativa en el mundo de la impresión 3D. Después de que el objeto impreso ha emergido de la impresora, el post-procesamiento entra en juego para perfeccionar y personalizar aún más el producto final. Esta fase abarca una amplia gama de técnicas, desde el lijado y la pintura hasta el ensamblaje y la aplicación de acabados especiales. El post-procesamiento no solo se trata de mejorar la estética del objeto, sino también de optimizar sus propiedades funcionales. Puede implicar la eliminación de soportes de impresión, la unión de múltiples piezas impresas o la aplicación de recubrimientos protectores. En última instancia, el post-procesamiento ofrece una oportunidad emocionante para llevar la creatividad y la precisión a un nivel superior, permitiendo a los diseñadores y fabricantes refinar sus creaciones y adaptarlas a una amplia variedad de aplicaciones, desde la industria hasta el arte. En este contexto, exploraremos los conceptos fundamentales y las técnicas clave que definen el mundo del post-procesamiento en la impresión 3D.
        </p>
      </div>
      <div className={"GM__" + mode + "__step-video"}>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
      <div className={"GM__" + mode + "__step-card"}>
        <CardImpresion datosCard={datosCard} />
      </div>
      <article>
      <h1>Cómo Identificar y Solucionar Problemas Comunes en la Impresión 3D</h1>

      <p>
        La impresión 3D es una tecnología fascinante que permite crear objetos tridimensionales a partir de modelos digitales. Sin embargo, como con cualquier tecnología, pueden surgir desafíos en el camino. En este artículo, exploraremos problemas comunes que pueden ocurrir antes, durante y después del proceso de impresión 3D, y aprenderemos a solucionarlos de manera efectiva.
      </p>

      <h2>Antes de la Impresión</h2>

      <p>
        Antes de presionar el botón de impresión, es importante estar preparado. Aquí hay algunos problemas comunes a considerar:
      </p>

      <h3>1. Diseño Defectuoso</h3>
      <p>
        Un diseño 3D con errores puede llevar a problemas de impresión. Asegúrate de que tu modelo esté bien diseñado y sin defectos.
      </p>

      <h3>2. Problemas de Soportes</h3>
      <p>
        Algunos modelos requieren soportes para imprimir correctamente. Asegúrate de agregarlos en las áreas necesarias y configura correctamente su densidad.
      </p>

      <h2>Durante la Impresión</h2>

      <p>
        Durante el proceso de impresión, es fundamental supervisar el progreso y abordar cualquier problema a medida que surja.
      </p>

      <h3>3. Adherencia Deficiente</h3>
      <p>
        Si la primera capa no se adhiere correctamente a la cama de impresión, la impresión podría fracasar. Ajusta la nivelación y la temperatura de la cama si es necesario.
      </p>

      <h3>4. Atascos de Filamento</h3>
      <p>
        Los atascos de filamento pueden interrumpir la impresión. Asegúrate de que el filamento se alimente suavemente y no esté obstruido.
      </p>

      <h2>Después del Post-Procesamiento</h2>

      <p>
        Una vez que el objeto esté impreso y procesado, aún pueden surgir problemas que necesitan atención.
      </p>

      <h3>5. Superficie Áspera</h3>
      <p>
        Si la superficie de tu objeto impreso es áspera, puedes aplicar técnicas de lijado para suavizarla y mejorar la estética.
      </p>

      <h3>6. Piezas que no Encajan</h3>
      <p>
        Si estás ensamblando múltiples piezas impresas y no encajan correctamente, revisa las dimensiones y realiza ajustes en el diseño.
      </p>

      <p>
        Identificar y solucionar estos problemas comunes es esencial para lograr impresiones 3D exitosas. Con práctica y paciencia, te convertirás en un experto en la impresión 3D.
      </p>
    </article>
    </div>
  );
}
