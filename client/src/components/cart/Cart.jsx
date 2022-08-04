import { Grid, Typography, Box, styled, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartItemBal from "./CartItemBal";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utills/paytm";

const Cart = () => {
  const buyNow = async () => {
    const response = await payUsingPaytm({
      amount: 500,
      email: "mranbir07@gmail.com",
    });
    const information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length ? (
        <GridContainer container>
          <CartProductInfo item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Header>

            {/* for every cart item, rendering a component  */}
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton
                onClick={() => {
                  buyNow();
                }}
              >
                Place Order
              </StyledButton>
            </ButtonWrapper>
          </CartProductInfo>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CartItemBal totalItems={cartItems} />
          </Grid>
        </GridContainer>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",

  [theme.breakpoints.down("md")]: {
    padding: "20px 30px",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const ButtonWrapper = styled(Box)`
  background: #fff;
  padding: 16px 24px;
  box-shadow: 0 -2px 10px 0 rgb(0 0 /10%);
  border-top: 1px solid #eee;
`;
const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  padding: 15px 36px;
  width: 250px;
  border-radius: 2px;
`;
const CartProductInfo = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
    paddingRight: 0,
  },
}));

export default Cart;
