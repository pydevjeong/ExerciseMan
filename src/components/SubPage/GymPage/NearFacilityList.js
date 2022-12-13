import React, { useEffect, } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea,CardMedia } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";

<<<<<<< HEAD
const NearFacilityList = ({ facility_id,name, facilityId ,location, tel,gymPicture,vid  }) => {
=======
// 보여지는 개수를 정해두고 로딩이 뜨면서 추가적인 정보가 보이면서 창이 내려가게 만들기
const NearFacilityList = ({ facility_id,name, facilityId ,location, tel,gymPicture,vid }) => {
>>>>>>> 34b6230e45c7fa41b2cfde5d7f147302332e7c23
  const navigate=useNavigate()
  const params={gym:`${name}`}

  useEffect(()=>{
  },[])

  const cardClicked=(e)=>{
    e.preventDefault();
<<<<<<< HEAD
    navigate(`/facilityDetail?${createSearchParams(params)}`,{state:{"name":`${name}`,"id":`${facility_id}`,"location":`${location}`,"tel":`${tel}`,"gymPicture":`${gymPicture}`,"vid":`${vid}`}})
=======
    // 미완성 기능 -> 오류 생김 22/10/16 -> 완성 22/10/21
    navigate(`/facilityDetail?${createSearchParams(params)}`,{state:{"name":`${name}`,"id":`${facility_id}`,"location":`${location}`,"tel":`${tel}`,"gymPicture":`${gymPicture}`,"vid":`${vid}`}})
>>>>>>> 34b6230e45c7fa41b2cfde5d7f147302332e7c23
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
