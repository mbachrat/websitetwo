import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import lib from '../imgs/lib.png'
import todo from '../imgs/todo.png'
import FL2 from '../imgs/FL2.png'


function ActionAreaCard() {

const cardInfo = [
  {image:FL2, title: "Instagram-Clone", text:"Create an account, Login, Post an image with a caption, and comment on others posts. Built with React and a firebase backend", link: "https://instagram-clone-8f5dd.firebaseapp.com"},
  {image:lib, title: "Library ", text:"HTML and Javascript library project. Input and delete books, mark as read. - no backend", link: "https://library-faaa9.firebaseapp.com/"},
  {image:todo, title: "To-Do List", text:"Input delete and edit tasks. Created with a PostgreSQL backend", link: "https://fern-plough-8c1.notion.site/TODO-List-Preview-a59457e3243f4bf2bffe8cc1a594cc96"},
  
];

const renderCard = (card, index) => {
  return (
    <a href={card.link} target="blank" className='card-link'>
    <Card sx={{ maxWidth: 345}} >
    <CardActionArea>
      <CardMedia
        component="img"
        height="170"
        sx={{ padding: 6.5 }}
        image={card.image}
        alt={card.title}
      />
      <CardContent className='card-back'>
        <Typography gutterBottom variant="h5" component="div" color="whitesmoke" fontWeight="700">
          {card.title}
        </Typography>
        <Typography variant="body2" color="#7a7a7a">
          {card.text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </a>
  )
}


  return (
   <div className='GridExample'>
    {cardInfo.map(renderCard)}
   </div>
  );
}


export default ActionAreaCard