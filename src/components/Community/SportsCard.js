import  React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import basketball from '../../img/basketball.jpg'
import baseball from '../../img/baseball.jpg'
import badminton from '../../img/badminton.jpg'
import gym from '../../img/gym.jpg'
import others from '../../img/others.jpg'
import soccer from '../../img/soccer.jpg'

const sportsImgs=[
  {
    img:basketball,
    name:'농구',
    link:'/basketball'
  },
  {
    img:baseball,
    name:'야구',
    link:'/baseball'
  },
  {
    img:badminton,
    name:'배드민턴',
    link:'/badminton'
  },
  {
    img:gym,
    name:'헬스',
    link:'/gym'
  },
  {
    img:soccer,
    name:'축구',
    link:'/soccer'
  },
  {
    img:others,
    name:'기타',
    link:'/others'
  }
]

export default function SportsCard(props) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {sportsImgs.map((item,idx)=>
        <Grid key={idx} item xs={2} sm={4} md={4}>
        <Link to={item.link}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.img}
            />
          <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      )}
    </Grid>
  );
}