import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import QandA from "../../img/QandA.png";
import community from "../../img/community.png";
import randombox from "../../img/randombox.jpg";

const sportsImgs = [
  {
    img: community,
    name: "커뮤니티",
    link: "/community",
  },
  {
    img: QandA,
    name: "Q & A",
    link: "/QandA",
  },
  {
    img: randombox,
    name: "랜덤음식추천",
    link: "https://peaceful-sands-33500.herokuapp.com",
  },

];

export default function CommunityCard(props) {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sportsImgs.map((item, idx) => (
          <Grid key={idx} item xs={2} sm={4} md={4}>
            <Link style={{textDecoration:"none"}} to={item.link}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={item.img} />
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
