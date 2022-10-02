import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const sportsImgs=[
  {
    img:'/src/img/basketball.jpg',
    name:'농구'
  },
  {
    img:'/src/img/baseball.jpg',
    name:'야구'
  },
  {
    img:'/src/img/badminton.jpg',
    name:'배드민턴'
  },
  {
    img:'/src/img/gym.jpg',
    name:'헬스'
  },
  {
    img:'/src/img/running.jpg',
    name:'달리기'
  },
  {
    img:'/src/img/others.jpg',
    name:'기타'
  }
]

export default function SportsCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={sportsImgs[0].img}
          alt="BasketBall"
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="div">
            농구
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}