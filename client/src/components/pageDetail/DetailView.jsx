import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, Grid, styled } from "@mui/material";
import ProductImage from "./ProductImage";
import ProductDetail from "./ProductDetail";

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    // dispatching only when otherwise it will create infinite loop
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  console.log(product);
  return (
    <Component>
      {product && Object.keys(product).length && (
        <GridContainer container>
          {/* left box  */}
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <ProductImage product={product} />
          </Grid>

          {/* right box  */}
          <RightContainer item lg={8} md={6} sm={6} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </GridContainer>
      )}
    </Component>
  );
};

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;
const GridContainer = styled(Grid)`
  background: #fff;
  display: flex;
`;
const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding: 10px;
`;
export default DetailView;
