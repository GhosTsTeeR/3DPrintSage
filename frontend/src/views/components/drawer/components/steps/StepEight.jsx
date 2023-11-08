import React from "react";
import Header from "../Header";

export default function StepEight({ title, activeStep, setActiveStep }) {
    const mode = "ModeLight";
  return (
    <div className={"GM__" + mode + "__step"}>
    <Header
      title={title}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />
    <article>
      <h1>Recursos Adicionales para la Impresión 3D</h1>

      <p>
        La impresión 3D es una tecnología apasionante que ofrece un sinfín de
        posibilidades. Sin embargo, puede ser un proceso desafiante,
        especialmente para principiantes. Para ayudarte en tu viaje de impresión
        3D, nuestra plataforma web ofrece una amplia gama de recursos
        adicionales que te brindarán información, capacitación y soporte. Aquí
        te presentamos algunos de los recursos clave:
      </p>

      <h2>Chatbot de Asistencia</h2>
      <p>
        Nuestro chatbot de asistencia está disponible las 24 horas del día, los
        7 días de la semana, para responder a tus preguntas sobre impresión 3D.
        Desde solucionar problemas técnicos hasta proporcionar consejos y guías,
        nuestro chatbot es tu asistente digital de confianza.
      </p>

      <h2>Búsqueda Dentro de la Plataforma Web</h2>
      <p>
        Nuestra plataforma web cuenta con una función de búsqueda poderosa que
        te permite encontrar rápidamente artículos, cursos y recursos
        relacionados con tus consultas específicas. Simplemente ingresa tus
        palabras clave y obtén resultados relevantes al instante.
      </p>

      <h2>Cursos</h2>
      <p>
        Ofrecemos una variedad de cursos en línea sobre impresión 3D, desde
        conceptos básicos hasta técnicas avanzadas. Estos cursos están diseñados
        para ayudarte a comprender la tecnología, aprender a utilizar software
        de diseño y mejorar tus habilidades de impresión 3D.
      </p>

      <h2>Artículos Informativos</h2>
      <p>
        Nuestra plataforma alberga una amplia biblioteca de artículos
        informativos escritos por expertos en impresión 3D. Estos artículos
        cubren una variedad de temas, desde selección de materiales hasta
        solución de problemas comunes. Siempre encontrarás información valiosa
        para tu proyecto.
      </p>

      <h2>Perfil Personalizado</h2>
      <p>
        Crea un perfil personalizado en nuestra plataforma para hacer un
        seguimiento de tus impresiones, cursos completados y logros. Tu perfil
        personalizado te permite acceder fácilmente a tu historial y obtener
        recomendaciones adaptadas a tus intereses y necesidades.
      </p>

      <h2>Más Recursos</h2>
      <p>
        Nuestra plataforma web ofrece aún más recursos, como foros de comunidad,
        videos instructivos y descargas de modelos 3D gratuitos. Explora y
        descubre todo lo que tenemos para ofrecer.
      </p>

      <p>
        En resumen, estamos comprometidos a brindarte todas las herramientas y
        recursos necesarios para tener éxito en la impresión 3D. Ya sea que
        estés comenzando tu viaje o busques avanzar en tus habilidades, nuestra
        plataforma tiene todo lo que necesitas para triunfar en el mundo de la
        impresión 3D.
      </p>
    </article>
  </div>

  );
}
