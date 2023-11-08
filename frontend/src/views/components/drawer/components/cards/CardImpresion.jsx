import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CardImpresion({ datosCard }) {
  console.log(datosCard.img)
  return datosCard.map((item, index) => (
    <Card key={index} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.parrafo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver mas detallado
        </Button>
        <Button size="small" color="primary">
          ver galeria y usos
        </Button>
      </CardActions>
    </Card>
  ));
}
