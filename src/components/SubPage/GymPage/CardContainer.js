import { Container, Grid, ListItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import NearFacilityList from "./NearFacilityList";
import gorilla from '../../../img/gorilla.jpg'
import linegym from '../../../img/linegym.jpg';
import skyview from '../../../img/skyview.jpeg';

const CardContainer = ({ gymData }) => {
  const [limit, setLimit] = useState(3);

  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const gymPicture=[gorilla,linegym,skyview]
  return (
    <Container>
      <h1>스포츠 카테고리</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {gymData.slice(offset, offset + limit).map((data, idx) => (
          <Grid item xs={2} sm={2} md={4} key={idx}>
            <ListItem>
              <NearFacilityList
                idx={idx}
                key={data.facilityId}
                name={data.name}
                location={data.location}
                tel={data.tel}
                gymPicture={gymPicture[idx]}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardContainer;
