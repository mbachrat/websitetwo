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
  {image:"https://phros.ca/_next/image?url=%2Fphros-symbol.png&w=3840&q=75", title: "PHROS (Work)", text:"Tools for on-demand videos, online classes, in-person sessions, payment processing, and website hosting", link: "https://phros.ca/"},
  {image:"https://mycloudsafari.com/static/7011beb2b08dc8f2d4e6b4dda107bca2/406c0/cs-logo-with-text.webp", title: "Cloud Safari (Work)", text:"Discover your private & local African adventure. Safely pay and plan your trip", link: "https://mycloudsafari.com/"},
  {image:FL2, title: "Instagram-Clone", text:"Create an account, Login, Post an image with a caption, and comment on others posts. Built with React and a firebase backend", link: "https://instagram-clone-8f5dd.firebaseapp.com"},
  {image:lib, title: "Library ", text:"HTML and Javascript library project. Input and delete books, mark as read. - no backend", link: "https://library-faaa9.firebaseapp.com/"},
  {image:todo, title: "To-Do List", text:"Input delete and edit tasks. Created with a PostgreSQL backend", link: "https://fern-plough-8c1.notion.site/TODO-List-Preview-a59457e3243f4bf2bffe8cc1a594cc96"},
  {image:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F612c675a-691a-447c-bce4-7e48e413d693%2FAsset_8w.png?table=block&id=8ff24639-87ed-4a8f-9815-1cd4a72cb51f&spaceId=be9ce557-ae88-4260-a133-e5efb374d110&width=250&userId=bf4c63a2-5f24-41f5-850b-a148f9342ca7&cache=v2", title: "Sinsen Studio", text:"Creative studio I started with a friend. Creating Music videos, covers and other forms of media", link: "https://fern-plough-8c1.notion.site/SINSEN-Studio-8ff2463987ed4a8f98151cd4a72cb51f"},
  
];

const renderCard = (card, index) => {
  return (
    <a href={card.link} target="blank" className='card-link'>
    <Card sx={{ maxWidth: 320}} >
    <CardActionArea>
      <CardMedia
        component="img"
        height="100"
        sx={{  }}
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