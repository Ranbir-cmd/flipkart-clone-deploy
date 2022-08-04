import { Box, Typography, styled, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartAction";
import { addEllipsis } from "../../utills/commonUtills";
import GroupedButton from "./GroupedButton";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <BoxContainer>
      <BoxLeft>
        <img src={item.url} alt="product" style={{ height: 130, width: 130 }} />
        <GroupedButton />
      </BoxLeft>
      <BoxRight>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <Typography style={{ color: "#999", fontSize: 14, marginTop: 10 }}>
          Seller: INFINITY KART INDIA
          <Box component={"span"}>
            <img
              src={fassured}
              alt="fassured"
              style={{ width: 60, marginLeft: 20 }}
            />
          </Box>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <Box
            component="span"
            style={{ fontSize: 18, fontWeight: 600, marginRight: 10 }}
          >
            ₹{item.price.cost}
          </Box>
          <Box component="span" style={{ color: " #878787", marginLeft: 10 }}>
            <strike>₹{item.price.mrp} </strike>
          </Box>
          <Box component="span" style={{ color: "#388e3c", marginLeft: 10 }}>
            {item.price.discount} off
          </Box>
        </Typography>
        <StyledButton
          onClick={() => {
            removeItemFromCart(item.id);
          }}
        >
          Remove
        </StyledButton>
      </BoxRight>
    </BoxContainer>
  );
};

const BoxContainer = styled(Box)`
  border-top: 1px solid #eee;
  display: flex;
  background: #fff;
`;

const BoxLeft = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const BoxRight = styled(Box)`
  margin: 20px;
`;
const StyledButton = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;
export default CartItem;
