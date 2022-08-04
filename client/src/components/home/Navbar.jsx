import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constant/data";

const Navbar = () => {
  return (
    <Box style={{ background: "#fff" }}>
      <BoxWrapper>
        {navData.map((data) => (
          <BoxContent>
            <img src={data.url} style={{ width: 64 }} alt="" />
            <Text>{data.text}</Text>
          </BoxContent>
        ))}
      </BoxWrapper>
    </Box>
  );
};

const BoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));
const BoxContent = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;
export default Navbar;
