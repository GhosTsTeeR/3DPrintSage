import React from "react";
import Header from "../Header";
import YouTube from 'react-youtube';
import CardIntroduction from "../cards/CardIntroduction";
export default function StepOne({title, activeStep, setActiveStep}) {
  const mode =  "ModeLight"
    const opts = {
      playerVars: {
        autoplay: 0, 
      },
    };
    const onReady = (event) => {
      // Acciones que se realizan cuando el reproductor está listo
    };
    const videoId = 'SB6yynxhJUo';
    const datosCard = [
      {
        titulo: "Aprender los conceptos básicos de la impresión 3D",
        datos: [
          { subtitulo: "Impresión 3D", texto: "La impresión 3D, también conocida como fabricación aditiva, es una tecnología revolucionaria que ha transformado la forma en que se crean objetos tridimensionales." },
          { subtitulo: "Modelado 3D", texto: "El modelado 3D es el proceso de diseñar el objeto en un entorno digital, definiendo su forma, dimensiones y detalles." },
          { subtitulo: "Slicing (Rebanado)", texto: "El slicing es la preparación del modelo digital para la impresión 3D, dividiéndolo en capas que la impresora pueda construir." },
          { subtitulo: "Impresora 3D", texto: "La impresora 3D es la máquina que materializa el modelo digital, agregando material capa por capa para crear el objeto real." },
          { subtitulo: "Filamento o Material de Impresión", texto: "El filamento es el material que se funde y deposita para formar las capas del objeto." },
          { subtitulo: "Capa o Layer", texto: "Las capas son las unidades fundamentales de construcción en la impresión 3D." },
          { subtitulo: "Adhesión a la Plataforma", texto: "La adhesión es crucial para garantizar que el objeto se construya correctamente y no se desplace durante la impresión." },
          { subtitulo: "Soportes", texto: "Los soportes son estructuras temporales que ayudan a mantener la integridad de los objetos durante la impresión 3D." },
          { subtitulo: "Post-Procesamiento", texto: "El post-procesamiento es el conjunto de actividades realizadas después de la impresión 3D para refinar y mejorar el objeto impreso." },
        ],
      },
      {
        titulo: "Introducción al Proceso de Impresión 3D",
        datos: [
          { subtitulo: "Proceso de Impresión 3D:", texto: "La impresión 3D, también conocida como fabricación aditiva, es un proceso innovador que permite la creación de objetos tridimensionales capa por capa, a partir de modelos digitales. " },
          { subtitulo: "Modelado 3D", texto: "odelado 3D define la forma, las dimensiones y los detalles del objeto que se imprimirá." },
          { subtitulo: "Slicing (Rebanado)", texto: "El slicing es necesario para preparar el modelo 3D para la impresión, definiendo cómo la impresora construirá el objeto capa por capa." },
          { subtitulo: "Impresora 3D", texto: "La impresora 3D es la máquina que materializa el modelo digital, agregando material capa por capa para crear el objeto real." },
          { subtitulo: "Filamento o Material de Impresión", texto: "El material de impresión es depositado y solidificado para construir el objeto." },
          { subtitulo: "Adhesión a la Plataforma", texto: "La adhesión es crucial para garantizar que el objeto se construya correctamente y no se desplace durante la impresión." },
          { subtitulo: "Capas (Layers)", texto: "Las capas son las unidades fundamentales de construcción en la impresión 3D." },
          { subtitulo: "Soportes", texto: " Los soportes son estructuras temporales que ayudan a mantener la integridad de los objetos durante la impresión." },
          { subtitulo: "Post-Procesamiento", texto: "El post-procesamiento es el conjunto de actividades realizadas después de la impresión 3D para obtener el objeto final deseado." },
        ],
      },
      {
        titulo: "Conocer los diferentes tipos de impresoras 3D",
        datos: [
          { subtitulo: "Impresoras 3D Fused Deposition Modeling (FDM)", texto: " FDM es uno de los métodos de impresión 3D más comunes y económicos. El material se funde y se deposita capa por capa." },
          { subtitulo: "Impresoras 3D Stereolithography (SLA)", texto: " SLA es conocido por su alta precisión y se utiliza comúnmente en aplicaciones de prototipado y joyería." },
          { subtitulo: "Impresoras 3D Digital Light Processing (DLP)", texto: " DLP es similar a SLA y es conocido por su velocidad de impresión y alta resolución." },
          { subtitulo: "Impresoras 3D Selective Laser Sintering (SLS)", texto: "SLS es ideal para la producción de piezas funcionales y de alta resistencia." },
          { subtitulo: "Impresoras 3D Stereolithography (SLA)", texto: " SLA es conocido por su alta precisión y se utiliza comúnmente en aplicaciones de prototipado y joyería." },
          { subtitulo: "Impresoras 3D Electron Beam Melting (EBM)", texto: " EBM se usa comúnmente en aplicaciones de fabricación de componentes metálicos." },
          { subtitulo: "Impresoras 3D Binder Jetting", texto: "Material Jetting es conocido por su alta resolución y capacidad para imprimir múltiples materiales." },
          { subtitulo: "Impresoras 3D Laminated Object Manufacturing (LOM)", texto: " LOM es asequible y se utiliza en aplicaciones de prototipado rápido." },
          { subtitulo: "Impresoras 3D Composite-Based Additive Manufacturing (CBAM)", texto: "CBAM se utiliza para producir objetos de gran escala y resistentes." },
          { subtitulo: "Impresoras 3D de Alimentación Continua", texto: "La alimentación continua permite la impresión ininterrumpida de objetos largos." },
        ],
      },
      {
        titulo: "Aprender a utilizar software de diseño 3D",
        datos: [
          { subtitulo: "Software de Diseño 3D", texto: "El software de diseño 3D es una herramienta poderosa que permite a los diseñadores crear modelos tridimensionales de objetos y escenarios en un entorno digital." },
          { subtitulo: "Tinkercad", texto: "Tinkercad es un software de modelado 3D en línea, fácil de usar y adecuado para principiantes. Ofrece una interfaz intuitiva basada en bloques y formas para crear modelos 3D." },
          { subtitulo: "Fusion 360", texto: "Fusion 360 es una aplicación de modelado 3D de Autodesk. Se utiliza en una amplia gama de campos, desde la ingeniería hasta la impresión 3D, y ofrece herramientas avanzadas para el diseño paramétrico." },
          { subtitulo: "Blender", texto: " Blender es una aplicación de código abierto para modelado 3D, animación y renderizado. Aunque es versátil y ampliamente utilizado en la animación, también es útil para diseñar modelos 3D para impresión." },
          { subtitulo: "OpenSCAD", texto: "OpenSCAD es un software de modelado 3D paramétrico y de código abierto. En lugar de utilizar una interfaz gráfica, los modelos se crean mediante código, lo que lo hace ideal para diseñadores con experiencia en programación." },
          { subtitulo: "SketchUp", texto: "SketchUp es un software de modelado 3D fácil de aprender y ampliamente utilizado en la arquitectura y el diseño de productos. Ofrece versiones tanto gratuitas como de pago." },
          { subtitulo: "FreeCAD", texto: "FreeCAD es un software de código abierto diseñado para modelado paramétrico 3D y CAD. Está dirigido principalmente a diseñadores e ingenieros." },
          { subtitulo: "Mallas y NURBS", texto: "La elección entre mallas y NURBS depende de las necesidades del proyecto y el nivel de detalle requerido." },
          { subtitulo: "Extrusión y Revolución", texto: "La extrusión y la revolución son técnicas fundamentales para crear formas 3D simples." },
          { subtitulo: "Texturización y Mapeo UV", texto: " La texturización y el mapeo UV son esenciales para dar realismo a los modelos 3D." },
          { subtitulo: "Iluminación y Renderizado", texto: "La iluminación y el renderizado son cruciales para producir imágenes realistas y visualmente atractivas." },
          { subtitulo: "Animación", texto: "La animación se utiliza en películas, videojuegos y presentaciones para contar historias y transmitir información de manera dinámica." },
          { subtitulo: "Esculpir 3D", texto: "La escultura 3D es útil para crear formas orgánicas y detalladas." },

        ],
      },
      {
        titulo: "Solución de Problemas Comunes en la Impresión 3D",
        datos: [
          { subtitulo: "Warping (Deformación)", texto: "El warping puede resultar en piezas inutilizables y es causado por diferencias de temperatura y adhesión inadecuada." },
          { subtitulo: "Layer Separation (Separación de Capas)", texto: "La adhesión inadecuada puede deberse a problemas de temperatura, flujo de material o ajustes incorrectos." },
          { subtitulo: "Over-Extrusion (Sobre-Extrusión)", texto: "La sobre-extrusión suele estar relacionada con la configuración incorrecta de la tasa de flujo de material." },
          { subtitulo: "Under-Extrusion (Sub-Extrusión)", texto: "La sub-extrusión puede ser causada por boquillas obstruidas, temperaturas inadecuadas o un flujo de material insuficiente." },
          { subtitulo: "Clogging (Obstrucción)", texto: "Las obstrucciones pueden afectar seriamente la calidad de la impresión y a menudo requieren limpieza o reemplazo de la boquilla." },
          { subtitulo: "Stringing (Formación de Hilos)", texto: "El stringing puede deberse a la temperatura de impresión, la velocidad de retracción y la configuración de relleno." },
          { subtitulo: "Bridging (Puentes Incompletos)", texto: "Los puentes incompletos pueden requerir ajustes en la velocidad de impresión y la temperatura." },
          { subtitulo: "Overhangs (Salientes)", texto: "Los salientes pueden ser un desafío para la impresión 3D debido a la gravedad y la falta de soporte." },
          { subtitulo: "Supports (Soportes)", texto: "Los soportes son esenciales para ciertos diseños y se deben configurar correctamente para su posterior eliminación." },

        ],
      },
    ];
  return (
    <div className={"GM__"+mode+"__step"}>
      <Header title={title} activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className={"GM__"+mode+"__step-video"}>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
      <div className={"GM__"+mode+"__step-card"}>
        <CardIntroduction datosCard={datosCard}/>
      </div>
    </div>
  );
}
