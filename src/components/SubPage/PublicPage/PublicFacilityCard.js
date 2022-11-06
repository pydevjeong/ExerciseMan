import { Container } from "@mui/system";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";


const PublicFacilityCard = (props) => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const navigate = useNavigate();

  let organizeData = props.makeData;
  let temp = [];
  organizeData.map((e) => {
    return temp.push(e.children);
  });
  let data = [];
  temp.map((arr) => {
    return data.push({
      city: arr[0].value,
      location: arr[4].value,
      zipCode: arr[6].value,
      name: arr[9].value,
    });
  });
  return (
    <Container>
      {data.slice(offset, offset + limit).map((val, idx) => (
        <Card key={idx} style={{ marginTop: "10px" }}>
          <CardActionArea
            onClick={() => {
              navigate("/publicfacilityDetail", {
                state: {
                  name: val.name,
                  city: val.city,
                  location: val.location,
                  zipCode: val.zipCode,
                },
              });
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                정보
              </Typography>
              <Typography variant="h5" component="div">
                {val.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {val.city}
              </Typography>
              <Typography variant="body2">{val.zipCode}</Typography>
              <Typography variant="body2">{val.location}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
};

export default PublicFacilityCard;
