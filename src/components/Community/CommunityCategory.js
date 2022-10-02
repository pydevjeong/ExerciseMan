import React from 'react';
import { Link } from 'react-router-dom';
import SportsCard from './SportsCard';

const sportsImgs=[
  {
    img:'/src/img/basketball.jpg',
    name:'농구',
    link:'/basketball'
  },
  {
    img:'/src/img/baseball.jpg',
    name:'야구',
    link:'/baseball'
  },
  {
    img:'/src/img/badminton.jpg',
    name:'배드민턴',
    link:'/badminton'
  },
  {
    img:'/src/img/gym.jpg',
    name:'헬스',
    link:'/gym'
  },
  {
    img:'/src/img/running.jpg',
    name:'달리기',
    link:'/running'
  },
  {
    img:'/src/img/others.jpg',
    name:'기타',
    link:'/others'
  }
]

const CommunityCategory = () => {
  return (
    <div>
      <h1>스포츠 카테고리</h1>
      {sportsImgs.map((item,idx)=>
      <Link key={idx} to={item.link}>
        <SportsCard img={item.img} name={item.name}/>
      </Link>
      )}
    </div>
  );
};

export default CommunityCategory;