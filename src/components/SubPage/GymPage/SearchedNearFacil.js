import React, { useEffect, } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea,CardMedia } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";


// 보여지는 개수를 정해두고 로딩이 뜨면서 추가적인 정보가 보이면서 창이 내려가게 만들기
const SearchedNearFacil = ({ facility_id,name, facilityId ,location, tel,gymPicture,vid }) => {
  const navigate=useNavigate()
  const params={gym:`${name}`}

  useEffect(()=>{
  },[])

  const cardClicked=(e)=>{
    e.preventDefault();
    // 미완성 기능 -> 오류 생김 22/10/16 -> 완성 22/10/21
    navigate(`/facilityDetail?${createSearchParams(params)}`,{state:{"name":`${name}`,"id":`${facility_id}`,"location":`${location}`,"tel":`${tel}`,"gymPicture":`${gymPicture}`,"vid":`${vid}`}})
  }
  
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    transitionDuration: '0.3s',
    height: '30%',
    marginTop:"10px",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:"7%"
}
  return (
    <>
      <Card style={cardStyle}>
        <CardActionArea onClick={cardClicked}>
        <CardMedia
          component="img"
          height="130"
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
             <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {facility_id}
            </Typography>
            <Typography variant="body2">
              {location}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default SearchedNearFacil;
