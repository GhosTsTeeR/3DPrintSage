import React from "react";
import Header from "../Header";
import YouTube from "react-youtube";
import CardMaintenanceCare from "../cards/CardMaintenanceCare";
export default function StepSix({ title, activeStep, setActiveStep }) {
  const mode = "ModeLight";
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    // Acciones que se realizan cuando el reproductor está listo
  };
  const videoId = "DfsAJFOu4S0";
  const datosCard = [
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Paso 1: Limpieza Regular",
      parrafo:
        "Realiza una limpieza periódica de tu impresora 3D. Limpia la cama de impresión, la boquilla y las áreas de movimiento con un cepillo suave y un limpiador no abrasivo para eliminar el polvo y los residuos.",
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Paso 2: Lubricación",
      parrafo:
        "Aplica lubricante a las guías y rodamientos lineales de la impresora para garantizar un movimiento suave de los componentes móviles. Consulta el manual de tu impresora para saber qué tipo de lubricante es adecuado.",
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Paso 3: Nivelación de la Cama",
      parrafo:
        "Verifica y ajusta la nivelación de la cama de impresión. Una superficie nivelada es crucial para una adhesión adecuada y una impresión precisa.",
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Paso 4: Inspección de Cables y Conexiones",
      parrafo:
        "Revise regularmente los cables y las conexiones eléctricas para asegurarte de que estén en buen estado y sin daños. Un cable dañado puede afectar el funcionamiento de la impresora.",
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Paso 5: Actualizaciones de Firmware",
      parrafo:
        "Mantén el firmware de tu impresora 3D actualizado. Las actualizaciones pueden corregir errores, mejorar el rendimiento y añadir nuevas características.",
    },
    {
      img: "https://api.dicebear.com/7.x/bottts/png",
      titulo: "Paso 6: Almacenamiento Adecuado",
      parrafo:
        "Cuando no estés usando la impresora, guárdala en un lugar limpio y libre de polvo. Protege la impresora de cambios bruscos de temperatura y humedad.",
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
          El mundo de la impresión 3D no se trata solo de crear objetos
          asombrosos, sino también de asegurarse de que tu impresora 3D funcione
          de manera óptima a lo largo del tiempo. El mantenimiento y el cuidado
          son aspectos críticos para garantizar que tu equipo de impresión se
          mantenga en condiciones ideales y ofrezca resultados consistentes. En
          este artículo, exploraremos la importancia del mantenimiento
          preventivo, la limpieza regular y las mejores prácticas para prolongar
          la vida útil de tu impresora 3D. Con la atención adecuada, puedes
          disfrutar de un rendimiento confiable y una calidad de impresión
          excepcional en cada proyecto.
        </p>
      </div>
      <div className={"GM__" + mode + "__step-video"}>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
      <div className={"GM__" + mode + "__step-card"}>
        <CardMaintenanceCare datosCard={datosCard} />
      </div>
      <article>
        <h1>
          Cómo Identificar y Solucionar Problemas Comunes en la Impresión 3D
        </h1>

        <p>
          La impresión 3D es una tecnología fascinante que permite crear objetos
          tridimensionales a partir de modelos digitales. Sin embargo, como con
          cualquier tecnología, pueden surgir desafíos en el camino. En este
          artículo, exploraremos problemas comunes que pueden ocurrir antes,
          durante y después del proceso de mantenimiento y cuidado de una
          impresora 3D, y aprenderemos a solucionarlos de manera efectiva.
        </p>

        <h2>Antes del Mantenimiento y Cuidado</h2>

        <p>
          Antes de realizar el mantenimiento y cuidado de tu impresora 3D, es
          importante estar preparado y conocer los posibles problemas:
        </p>

        <h3>1. Falta de Limpieza</h3>
        <p>
          Una impresora 3D sucia puede dar lugar a problemas de funcionamiento.
          Asegúrate de que tu impresora esté limpia y libre de polvo antes de
          realizar cualquier mantenimiento.
        </p>

        <h3>2. Desgaste de Componentes</h3>
        <p>
          Revisa los componentes clave, como las correas, los rodamientos y las
          boquillas. Si detectas desgaste o daños, considera la sustitución o
          reparación.
        </p>

        <h2>Durante el Mantenimiento y Cuidado</h2>

        <p>
          Durante el proceso de mantenimiento y cuidado, es importante seguir
          ciertas pautas para evitar problemas adicionales.
        </p>

        <h3>3. Sobreajuste</h3>
        <p>
          Evita ajustar componentes en exceso durante el mantenimiento, ya que
          esto puede desencadenar problemas de calibración. Realiza ajustes con
          cuidado y registra los cambios que realizas.
        </p>

        <h3>4. Uso de Herramientas Inadecuadas</h3>
        <p>
          Utiliza las herramientas correctas y sigue las recomendaciones del
          fabricante. El uso de herramientas incorrectas puede dañar componentes
          y causar problemas adicionales.
        </p>

        <h2>Después del Mantenimiento y Cuidado</h2>

        <p>
          Una vez que hayas completado el mantenimiento y cuidado, es importante
          verificar que todo esté en orden y funcionando correctamente.
        </p>

        <h3>5. Prueba y Calibración</h3>
        <p>
          Después del mantenimiento, realiza pruebas de impresión y calibración
          para asegurarte de que la impresora funcione como se espera. Ajusta
          los parámetros según sea necesario.
        </p>

        <h3>6. Inspección Final</h3>
        <p>
          Inspecciona cuidadosamente la impresora después del mantenimiento para
          verificar que no haya cables sueltos, piezas faltantes o problemas
          visibles.
        </p>

        <p>
          Identificar y solucionar problemas comunes antes, durante y después
          del mantenimiento y cuidado de tu impresora 3D es esencial para
          mantener un funcionamiento confiable y prolongar su vida útil. Con
          práctica y atención a los detalles, podrás disfrutar de resultados de
          impresión 3D de alta calidad en cada proyecto.
        </p>
      </article>
    </div>
  );
}
