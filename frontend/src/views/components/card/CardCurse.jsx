import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
const mode = "ModeLight";
export default function CardCurse({name, id}) {
  return (
    <Card  sx={{backgroundColor: "light-gray",  width: "300px",  margin: "15px"}}>
      <CardActionArea className={"GM__" + mode + "__main-curses-cardcon-card"}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link to={"curso/"+id}>
            <Button>Ver Curso</Button>
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    
  );
}