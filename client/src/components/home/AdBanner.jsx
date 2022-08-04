import { Grid, styled } from "@mui/material";
import React from "react";
import { imageURL } from "../../constant/data";

const AdBanner = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      <GridWrapper container lg={12} md={12} sm={12} xs={12}>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="ad-image" style={{ width: "100%" }} />
          </Grid>
        ))}
      </GridWrapper>
      <Image src={url} alt="covid-image" />
    </>
  );
};

const GridWrapper = styled(Grid)`
  margin-top: 10px;
`;
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 110,
  },
}));

export default AdBanner;
