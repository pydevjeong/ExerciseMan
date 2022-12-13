import React, { useEffect, } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea,CardMedia } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";

const NearFacilityList = ({ facility_id,name, facilityId ,location, tel,gymPicture }) => {
  const navigate=useNavigate()
  const params={gym:`${name}`}

  useEffect(()=>{
  },[])

  const cardClicked=(e)=>{
    e.preventDefault();
    navigate(`/facilityDetail?${createSearchParams(params)}`,{state:{"name":`${name}`,"id":`${facility_id}`,"location":`${location}`,"tel":`${tel}`}})
  }
  
  const cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '220px',
    marginTop:"5px",
    alignItems:"center",
    justifyContent:"center",
}
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
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default NearFacilityList;
