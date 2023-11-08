import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import OptionPractice from '../drawer/OptionPractice';

const steps = [
  {
    label: 'Incio',
    description: `Se bridnara una breve introduccion, conceptos y temas a tratar.`,
  },
  {
    label: 'Preparación del Diseño',
    description:
      'El software de diseño 3D desempeña un papel crucial en el proceso de impresión 3D, ya que permite a los usuarios crear y modificar modelos tridimensionales antes de imprimirlos.',
  },
  {
    label: 'Configuración de la Impresora',
    description: `Paso a paso para configurar de manera adecuada y siguiendo las normativas
    brindadas por cada impresora.`,
  },
  {
    label: 'Impresion',
    description: `Paso a paso para lograr una impresion de un diseño en formato stl u otro formato.`,
  },
  {
    label: 'Post-procesamiento',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Mantenimiento y cuidado',
    description: `Se brindara el paso a paso que se debe completar para un buen cuidado de tu impresora 3d.`,
  },
  {
    label: 'Proyectos Avanzados',
    description: `Se bridnara una breve introduccion, conceptos y temas a tratar..`,
  },
  {
    label: 'Recuros adicionales',
    description:
      'Recursos adicionales dentro de la plataforma.',
  },
  {
    label: 'Ver Resultados',
    description:
      'Muestra de resultados.',
  },

];

export default function Practice() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                <OptionPractice activeStep={activeStep} setActiveStep={setActiveStep} finalizado={index === steps.length - 1 ? 'Finish' : 'Continue'}/>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}