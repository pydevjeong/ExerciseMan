import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { CardActionArea } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";


// 보여지는 개수를 정해두고 로딩이 뜨면서 추가적인 정보가 보이면서 창이 내려가게 만들기
const NearFacilityList = ({ name, location, tel }) => {
  const navigate=useNavigate()
  const params={gym:`${name}`}
  // console.log(name,location,tel);
  const cardClicked=(e)=>{
    e.preventDefault();
    navigate({
      'pathname':'/closeFacilty',
      search:`?${createSearchParams(params)}`
    })
  }

  return (
    <Container>
      <Card style={{marginTop:"10px"}}>
        <CardActionArea onClick={cardClicked}>
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
              {tel}
            </Typography>
            <Typography variant="body2">{location}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default NearFacilityList;
