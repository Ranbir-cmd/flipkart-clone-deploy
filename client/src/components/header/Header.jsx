import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader>
      <Toolbar
        style={{
          minHeight: 54,
        }}
      >
        <MenuIconButton style={{ color: "#fff" }} onClick={handleOpen}>
          <Menu />
        </MenuIconButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Component to="/">
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box component="span" style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
              {/* Typography doesnt provide span component thats why using box */}
            </SubHeading>

            <PlusImage src={subURL} />
          </Box>
        </Component>

        {/* imported components  */}
        <Search />
        <CustomButtonsWrapper>
          <CustomButtons />
        </CustomButtonsWrapper>
      </Toolbar>
    </StyledHeader>
    // components
  );
};

// style
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 54px;
`;

const Component = styled(Link)`
  margin-left: 12% !important;
  line-height: 0;
  text-decoration: none;
  color: #fff;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonsWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export default Header;
