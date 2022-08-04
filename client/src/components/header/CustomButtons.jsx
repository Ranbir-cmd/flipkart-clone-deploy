import React, { useContext } from "react";
import { Badge, Box, Button, styled, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const { acc, setAcc } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <ButtonWrapper>
      {/* conditionally rendering: if we have signup value through context then rendering username otherwise rendering login button  */}
      {acc ? (
        <Profile profilename={acc} setProfilename={setAcc} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 0, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography>More</Typography>
      <CartWrapper to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>

        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </CartWrapper>
      <LoginDialog open={open} setOpen={setOpen} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
    alignItems: "center",
    fontSize: 14,
    fontFamily: "inherit",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const CartWrapper = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  background: #fff;
  color: #2874f0;
  text-transform: none;
  font-weight: 600;
  height: 32px;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
`;

export default CustomButtons;
