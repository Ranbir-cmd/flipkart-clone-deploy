import React from "react";
import { Box, styled, Typography } from "@mui/material";

const EmptyCart = () => {
  const emptyCart =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <BoxWrapper>
      <BoxContainer>
        <img src={emptyCart} alt="empty-cart" style={{ width: "15%" }} />
        <Typography>Your Cart is Empty</Typography>
        <Typography>Add items to it now</Typography>
      </BoxContainer>
    </BoxWrapper>
  );
};
const BoxWrapper = styled(Box)(({ theme }) => ({
  height: "65vh",
  width: "80%",
  background: "#fff",
  margin: "80px 140px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100vh",
    background: "#000",
    display: "flex",
    margin: "0",
  },
}));
const BoxContainer = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;
export default EmptyCart;
