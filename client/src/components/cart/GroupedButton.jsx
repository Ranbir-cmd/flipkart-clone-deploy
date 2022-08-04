import { ButtonGroup, Button, styled } from "@mui/material";
import React from "react";

const GroupedButton = () => {
  return (
    <ButtonGroup style={{ marginTop: 30 }}>
      <StyledButton>+</StyledButton>
      <Button disabled>1</Button>
      <StyledButton>-</StyledButton>
    </ButtonGroup>
  );
};

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

export default GroupedButton;
