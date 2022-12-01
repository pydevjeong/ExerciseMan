import React, { useEffect, } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { CardActionArea,CardMedia } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import gorilla from '../../../img/gorilla.jpg'

// 보여지는 개수를 정해두고 로딩이 뜨면서 추가적인 정보가 보이면서 창이 내려가게 만들기
const NearFacilityList = ({ idx,name, facilityId ,location, tel,gymPicture }) => {
  const navigate=useNavigate()
  const params={gym:`${name}`}

  // search:`?${createSearchParams(params)}`,
  useEffect(()=>{
  },[])

  const cardClicked=(e)=>{
    e.preventDefault();
    // 미완성 기능 -> 오류 생김 22/10/16 -> 완성 22/10/21
    navigate(`/facilityDetail?${createSearchParams(params)}`,{state:{"name":`${name}`,"id":`${facilityId}`,"location":`${location}`,"tel":`${tel}`}})
  }
  
  const cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '12vw',
    marginTop:"5px",
    alignItems:"center",
    justifyContent:"center"
}
console.log(gymPicture);
  return (
    <>
      <Card style={cardStyle}>
        <CardActionArea onClick={cardClicked}>
        <CardMedia
          component="img"
          height="140"
          image={gymPicture}
          alt="gym"
        />
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              정보
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {tel}
            </Typography>
            <Typography variant="body2">
              {location}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default NearFacilityList;
