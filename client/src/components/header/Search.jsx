import React, { useState, useEffect } from "react";
import { InputBase, styled, List, ListItem, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const Search = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const onInputChange = (inputtedValue) => {
    setText(inputtedValue);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => onInputChange(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {/* FILTERING PRODUCTS WITH SEARCH INPUT  */}
      {text && (
        <StyledList>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </StyledList>
      )}
    </SearchContainer>
  );
};

const SearchContainer = styled(Box)`
  background: #fff;
  border-radius: 2px;
  margin-left: 10px;
  width: 40%;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  margin-left: auto;
  display: flex;
`;

const StyledList = styled(List)`
  position: absolute;
  background: #fff;
  color: #000;
  margin-top: 36px;
`;
export default Search;
