import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ActionAreaCard() {

const cardInfo = [
  {image:"https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q1/why-pm-is-important/why-is-project-management-important-header@2x.png", title: "Finsta", text:"This is a test to explain my project"},
  {image:"https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2016Q4/8-steps-to-build-a-project-management-timeline@2x.png", title: "Restaraunt ", text:"This is a test to explain my project"},
  {image:"https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q1/why-pm-is-important/why-is-project-management-important-header@2x.png", title: "Dashboard", text:"This is a test to explain my project"},
  {image:"https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q1/why-pm-is-important/why-is-project-management-important-header@2x.png", title: "library", text:"This is a test to explain my project"},
  {image:"https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q1/why-pm-is-important/why-is-project-management-important-header@2x.png", title: "Signup", text:"This is a test to explain my project"},
];

const renderCard = (card, index) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={card.image}
        alt={card.title}
      />
      <CardContent className='card-back'>
        <Typography gutterBottom variant="h6" component="div" color="whitesmoke" fontWeight="700">
          {card.title}
        </Typography>
        <Typography variant="body2" color="#7a7a7a">
          {card.text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}


  return (
   <div className='GridExample'>
    {cardInfo.map(renderCard)}
   </div>
  );
}


export default ActionAreaCard