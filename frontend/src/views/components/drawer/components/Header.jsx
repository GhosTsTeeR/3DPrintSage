import React from 'react';

export default function Header({title, activeStep, setActiveStep}) {
  const mode =  "ModeLight"
  const disabled= activeStep==0?true:false
  return (
    <header className={"GM__"+mode+"__header-step"}>
      <div className={"GM__"+mode+"__header-step-back"}>
        <button disabled={disabled} onClick={()=>setActiveStep((prevActiveStep) => prevActiveStep - 1)}>Anterior</button>
      </div>
      <div className={"GM__"+mode+"__header-step-title"}>
        <h1>{title}</h1>
      </div>
      <div className={"GM__"+mode+"__header-step-next"}>
        <button  onClick={()=>setActiveStep((prevActiveStep) => prevActiveStep +1)}>{activeStep ==7?"Finalizar":"Siguiente"}</button>
      </div>
    </header>
  );
}