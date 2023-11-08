import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function CardIntroduction({datosCard}) {
  return datosCard.map((item, index) => (
    <Box key={index} sx={{ minWidth: 275, maxWidth: 320 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
            {item.titulo}
          </Typography>
          {item.datos.slice(0, 4).map((dato, datoIndex) => (
            <Typography key={datoIndex} sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
              {dato.subtitulo}:
              <Typography color="text.primary" variant="body2">
                {dato.texto}
              </Typography>
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  ));
}
