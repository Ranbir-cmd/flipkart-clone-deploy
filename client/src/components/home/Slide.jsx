import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Divider, styled, Typography } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ products, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => (
    <Box variant="span">
      {hours} : {minutes} : {seconds} Left
    </Box>
  );

  return (
    <Wrapper>
      <Deal>
        <Typography>{title}</Typography>
        {timer && (
          <Timer>
            <img
              src={timerURL}
              alt="timer"
              style={{ width: 24, marginRight: 10 }}
            />
            <Countdown date={Date.now() + 4.32e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained">View All</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product-img" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  & > p {
    font-size: 24px;
    font-weight: 500;
  }
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: #7f7f7f;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 500;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
  // defining width according to height
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-bottom: 10px;
`;

export default Slide;
