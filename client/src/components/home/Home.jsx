import React from "react";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { getProductsAction } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import AdSlide from "./AdSlide";
import AdBanner from "./AdBanner";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);

  // dispatching api-calling function
  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <AdSlide products={products} title="Deals of the Day" timer={true} />
        <Slide products={products} title="Suggested for You" timer={false} />
        <Slide products={products} title="Recomended Items" timer={false} />
        <AdBanner />
        <Slide products={products} title="Suggested for You" timer={false} />
        <Slide products={products} title="Discounts for You" timer={false} />
      </Container>
    </>
  );
};

const Container = styled(Box)`
  padding: 10px 5px;
  background: #eee;
`;

export default Home;
