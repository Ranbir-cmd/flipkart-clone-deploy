import React, { useState, useEffect } from "react";
import { Box, styled, Typography } from "@mui/material";

const CartItemBal = ({ totalItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    totalItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [totalItems]);

  return (
    <Box>
      <Heading>
        <Typography style={{ color: "#878787" }}>Price Details</Typography>
      </Heading>
      <Container>
        <Typography>
          Price({totalItems?.length} items)
          <PriceBox component="span">₹{price}</PriceBox>
        </Typography>
        <Typography>
          Discount
          <PriceBox component="span">-₹{discount}</PriceBox>
        </Typography>
        <Typography>
          Delivery Charges
          <PriceBox component="span">₹40</PriceBox>
        </Typography>
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          Total Amount
          <PriceBox component="span">₹{price - discount + 40}</PriceBox>
        </Typography>
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

const Container = styled(Box)`
  background: #fff;
  padding: 15px 24px;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;
const Heading = styled(Box)`
  background: #fff;
  padding: 15px 24px;
  border-bottom: 1px solid #eee;
`;
const PriceBox = styled(Box)`
  float: right;
`;
const Discount = styled(Typography)`
  color: green;
  font-weight: 500;
`;
export default CartItemBal;
