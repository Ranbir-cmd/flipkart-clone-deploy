import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utills/paytm";

const ProductImage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = product;

  const goToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

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

  return (
    <LeftContainer>
      <Box
        style={{ padding: "15px 20px", border: "1px solid #eee", width: "90%" }}
      >
        <Image src={product.detailUrl} />
      </Box>
      <StyledButton
        variant="contained"
        style={{ background: "#FF9F00", marginRight: 10 }}
        onClick={() => {
          goToCart();
        }}
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{ background: "#FB641B" }}
        onClick={() => {
          buyNow();
        }}
      >
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  marginRight: "20px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));
const Image = styled("img")({
  width: "95%",
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  marginTop: 10,
  [theme.breakpoints.down("lg")]: {
    width: "47%",
  },
}));

export default ProductImage;
