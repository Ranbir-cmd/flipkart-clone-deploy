import React from "react";
import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";
import { EventAvailable as Emi } from "@mui/icons-material";

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const deliveryDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  return (
    <>
      <Typography> {product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 ratings & 1 review
        <Box component="span">
          <img
            src={fassured}
            style={{ width: 77, marginLeft: 20 }}
            alt="fassured"
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28, marginRight: 10 }}>
          ₹{product.price.cost}
        </Box>
        <Box component="span" style={{ color: " #878787", marginRight: 10 }}>
          <strike>₹{product.price.mrp} </strike>
        </Box>
        <Box component="span" style={{ color: "#388e3c", marginRight: 10 }}>
          {product.price.discount} off
        </Box>
      </Typography>
      <Typography style={{ fontSize: 15 }}>
        <strong>Available Offers</strong>
      </Typography>
      <BoxText>
        <Typography style={{ fontSize: 14 }}>
          <StyledBadge />
          <strong>Bank Offer </strong>5% Cashback on Flipkart Axis Bank Card T&C
        </Typography>
        <Typography style={{ fontSize: 14 }}>
          <StyledBadge />
          <strong>Partner Offer </strong>Sign up for Flipkart Pay Later and get
          Flipkart Gift Card worth ₹100 *Know More
        </Typography>
        <Typography>
          <EmiStyled />
          No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999 T&C
        </Typography>
      </BoxText>

      <Table>
        <TableBody>
          <ColumnText>
            <StyledTableCell style={{ color: "#878787" }}>
              Delivery
            </StyledTableCell>
            <StyledTableCell style={{ fontWeight: 600 }}>
              Delivery By {deliveryDate.toDateString()} | ₹40
            </StyledTableCell>
          </ColumnText>
          <ColumnText>
            <StyledTableCell style={{ color: "#878787" }}>
              Seller
            </StyledTableCell>
            <StyledTableCell>
              <Box style={{ color: "#2874f0", fontSize: 16, fontWeight: 600 }}>
                SuperNet
              </Box>
              <Typography style={{ fontSize: 14 }}>
                7 Days Replacement Policy
              </Typography>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers starting from ₹{product.price.cost}
              </Typography>
            </StyledTableCell>
          </ColumnText>
          <ColumnText>
            <StyledTableCell colSpan={2}>
              <CellImg src={adURL} style={{ width: 390 }} alt="supercoin" />
            </StyledTableCell>
          </ColumnText>
          <ColumnText>
            <StyledTableCell style={{ color: "#878787" }}>
              Description
            </StyledTableCell>
            <StyledTableCell>{product.description}</StyledTableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

const BoxText = styled(Box)`
  vertical-align: baseline;

  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #388e3c;
  font-size: 20px;
`;
const EmiStyled = styled(Emi)`
  margin-right: 10px;
  color: #388e3c;
  font-size: 20px;
`;
const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  marginTop: 10,
  fontSize: 14,
  border: "none",

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    colSpan: 1,
  },
}));

const CellImg = styled("img")(({ theme }) => ({
  width: "100%",
  // marginTop: 10,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default ProductDetail;
