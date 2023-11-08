import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function CardWithCarousel({ cardData }) {
  let navigate = useNavigate();

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % cardData.img.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      (prevActiveStep - 1 + cardData.img.length) % cardData.img.length
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleDoubleClick = (id) => {
    navigate('impresoras/'+id);
    return null;
  };

    return (
      <Card key={cardData.id} sx={{ maxWidth: 345 }} onDoubleClick={()=>handleDoubleClick(cardData.id)}>
        <CardActionArea variant="div">
          <Box sx={{ maxWidth: "425px", flexGrow: 1 ,  display: "flex", flexDirection: "column" }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {cardData.img.map((dato, datoIndex) => (
                <div key={dato.path}>
                  {Math.abs(activeStep - datoIndex) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={dato.path}
                      alt={dato.path}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={cardData.img.length}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === cardData.img.length - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardData.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardData.parrafo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  

export default function CardPrinter({ datosCard, count }) {
  return datosCard.slice(0, count).map((cardData) => (
    <CardWithCarousel key={cardData.id} cardData={cardData} />
  ));
}