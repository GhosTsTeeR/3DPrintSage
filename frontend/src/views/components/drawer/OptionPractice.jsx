import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import React from 'react';
import StepOne from './components/steps/StepOne';
import StepTwo from './components/steps/StepTwo';
import StepThree from './components/steps/StepThree';
import StepFour from './components/steps/StepFour';
import StepFive from './components/steps/StepFive';
import StepSix from './components/steps/StepSix';
import StepSeven from './components/steps/StepSeven';
import StepEight from './components/steps/StepEight';



export default function OptionPractice({ activeStep, setActiveStep, finalizado }) {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const stepsInfo = [
    {
      step: 0,
      description: <StepOne title= "Introduccion a las impresoras 3D" activeStep={activeStep} setActiveStep={setActiveStep}  />,
    },
    {
      step: 1,
      description: <StepTwo title= "Preparación del Diseño" activeStep={activeStep} setActiveStep={setActiveStep} />,
    },
    {
      step: 2,
      description:<StepThree title= "Configuración de la Impresora" activeStep={activeStep} setActiveStep={setActiveStep} />,
    },
    {
      step: 3,
      description:<StepFour title= "Impresión" activeStep={activeStep} setActiveStep={setActiveStep} />,
    },
    {
      step: 4,
      description:<StepFive title= "Post-Procesamiento" activeStep={activeStep} setActiveStep={setActiveStep} />,
    },
    {
      step: 5,
      description:<StepSix title= "Mantenimiento y Cuidado" activeStep={activeStep} setActiveStep={setActiveStep} />,
    },
    {
      step: 6,
      description:<StepSeven title= "Proyectos Avanzados" activeStep={activeStep} setActiveStep={setActiveStep} />,
    },
    {
      step: 7,
      description:<StepEight title= "Recuros adicionales" activeStep={activeStep} setActiveStep={setActiveStep} />,
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ height: '90vh', width: 'auto' }}
      role="presentation"
  
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {stepsInfo.map((stepInfo) => (
          stepInfo.step === activeStep && (
            <ListItem key={stepInfo.step} disablePadding>
                {stepInfo.description}
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{ mt: 1, mr: 1 }} onClick={toggleDrawer('bottom', true)}>
        Comenzar práctica
      </Button>
      <SwipeableDrawer
        anchor="bottom"
        open={state['bottom']}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
      >
        {list('bottom')}
      </SwipeableDrawer>
    </div>
  );
}