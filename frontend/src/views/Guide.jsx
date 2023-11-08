import React, { useState } from 'react';
import Practice from './components/stepper/Practice';

export default function Guide() {

  const [openSection, setOpenSection] = useState(null);
  const [openPractice, setOpenPractice] = useState(false);

  const toggleSection = section => {
    if(openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  }
  const mode = "ModeLight"

  return (
    <div className={"GM__"+mode+"__guide"}>
      <div className={"GM__"+mode+"__guide-docs"}>
        <button className={`GM__${mode}__guide-docs-btn${openSection === 1 ? '-active' : ''}`} onClick={() => toggleSection(1)}>Paso 1: Introducción a las Impresoras 3D</button>
        {openSection === 1 && (
          <div className={"GM__"+mode+"__guide-docs-dropdown"}>
            <p>1.1 Conceptos Básicos: Explicación de qué es una impresora 3D y cómo funciona.</p>
            <p>1.2 Tipos de Impresoras: Descripción de los diferentes tipos de impresoras 3D disponibles.</p>
            <p>1.3 Materiales de Impresión: Información sobre los tipos de materiales que se pueden utilizar en impresión 3D.</p>  
          </div>
        )}

        <button className={`GM__${mode}__guide-docs-btn${openSection === 2 ? '-active' : ''}`} onClick={() => toggleSection(2)}>Paso 2: Preparación del Diseño</button>
        {openSection === 2 && (
          <div className={"GM__"+mode+"__guide-docs-dropdown"}>
            <p>2.1 Software de Diseño: Introducción a herramientas de diseño 3D y software de modelado.</p>
            <p>2.2 Creación o Descarga de Diseños: Cómo crear un diseño desde cero o descargar diseños preexistentes.</p>
            <p>2.3 Formato de Archivo: Explicación sobre el formato de archivo necesario para imprimir en 3D (por ejemplo, STL).</p>
          </div>
        )}

        <button className={`GM__${mode}__guide-docs-btn${openSection === 3 ? '-active' : ''}`} onClick={() => toggleSection(3)}>Paso 3: Configuración de la Impresora</button>
        {openSection === 3 && (
          <div className={"GM__"+mode+"__guide-docs-dropdown"}>
            <p>3.1 Elección del Material: Cómo seleccionar el material adecuado para el proyecto.</p>
            <p>3.2 Nivelación de la Cama: Instrucciones para nivelar correctamente la cama de impresión.</p>
            <p>3.3 Temperatura y Velocidad: Ajuste de la temperatura y velocidad de impresión según el material y el diseño.</p>  
          </div>
        )}
        <button className={`GM__${mode}__guide-docs-btn${openSection === 4 ? '-active' : ''}`} onClick={() => toggleSection(4)}>Paso 4: Impresion</button>
        {openSection === 4 && (
          <div className={"GM__"+mode+"__guide-docs-dropdown"}>
            <p>4.1 Carga del Archivo: Cómo cargar el archivo de diseño en la impresora.</p>
            <p>4.2 Inicio de la Impresión: Instrucciones para iniciar el proceso de impresión.</p>
            <p>4.3 Monitorización: Cómo supervisar y controlar la impresión durante el proceso.</p>  
          </div>
        )}
        <button className={`GM__${mode}__guide-docs-btn${openSection === 5 ? '-active' : ''}`} onClick={() => toggleSection(5)}>Paso 5: Post-procesamiento</button>
        {openSection === 5 && (
          <div className="dropdown">
            <p>5.1 Retirar la Pieza Impresa: Cómo retirar con cuidado la pieza impresa de la cama de impresión. </p>
            <p>5.2 Acabado: Técnicas para mejorar la apariencia de la pieza impresa, como lijado y pintura.</p>
          </div>
        )}
        <button className={`GM__${mode}__guide-docs-btn${openSection === 6 ? '-active' : ''}`} onClick={() => toggleSection(6)}>Paso 6: Mantenimiento y cuidado</button>
        {openSection === 6 && (
          <div className={"GM__"+mode+"__guide-docs-dropdown"}>
            <p>6.1 Limpieza de la Impresora: Instrucciones para mantener la impresora en buen estado.</p>
            <p>6.2 Cambio de Filamento: Cómo reemplazar y gestionar el filamento.</p>
            <p>6.3 Actualizaciones y Mejoras: Información sobre cómo mantener y mejorar la impresora.</p>
          </div>
        )}
        <button className={`GM__${mode}__guide-docs-btn${openSection === 7 ? '-active' : ''}`} onClick={() => toggleSection(7)}>Paso 7: Proyectos Avanzados (obcional)</button>
        {openSection === 7 && (
          <div className={"GM__"+mode+"__guide-docs-dropdown"}>
            <p>7.1 Diseños Avanzados: Introducción a proyectos más complejos y desafiantes.</p>
            <p>7.2 Configuraciones Especiales: Cómo ajustar la impresora para proyectos avanzados.</p>
            <p>7.3 Compartir y Colaborar: Posibilidad de compartir proyectos y colaborar con otros usuarios.</p>
          </div>
        )}
        <button className={`GM__${mode}__guide-docs-btn${openSection === 7 ? '-active' : ''}`} onClick={() => toggleSection(8)}>Paso 8: Recuros adicionales</button>


      </div>
      
      <div className={"GM__"+mode+"__guide-practice"}>
        {
            openPractice?<Practice/>:<div><button onClick={()=>setOpenPractice(true)}>Iniciar Practica</button></div>
        }
        
      </div>

    </div>
  )

}