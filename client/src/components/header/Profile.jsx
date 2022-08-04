import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Profile = ({ profilename, setProfilename }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    // where to open
    setOpen(event.currentTarget);
    // it will return a string. but open should be a boolean value, thats why converted into boolean below
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setProfilename("");
  };

  return (
    <>
      <Box style={{ marginTop: 2, cursor: "pointer" }} onClick={handleClick}>
        <Typography>{profilename}</Typography>
        <MenuWrapper anchorEl={open} open={Boolean(open)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
            }}
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </MenuWrapper>
      </Box>
    </>
  );
};

const MenuWrapper = styled(Menu)`
  margin-top: 5px;
`;
const Logout = styled(Typography)`
  margin-left: 5px;
  font-size: 14px;
`;
export default Profile;
