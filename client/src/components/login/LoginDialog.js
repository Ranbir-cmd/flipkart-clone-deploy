import React, { useState, useContext } from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";

import { authenticatesLogin, authenticatesSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const LoginDialog = ({ open, setOpen }) => {
  const accountInitialValue = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you're new here!",
      subHeading: "Sign up with your mobile number to get started",
    },
  };

  const signupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };

  const loginInitialValues = {
    email: "",
    password: "",
  };

  const [account, setAccount] = useState(accountInitialValue.login);

  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);

  const { acc, setAcc } = useContext(DataContext);

  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setAccount(accountInitialValue.login);
    setError(false);
  };

  const toggleAccount = () => {
    setAccount(accountInitialValue.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    // console.log(signup);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async () => {
    // API CALL
    const response = await authenticatesSignup(signup);
    if (!response) return;
    // and if response comes
    handleClose();

    // context collecting value
    setAcc(signup.firstname);
  };

  const loginUser = async () => {
    const response = await authenticatesLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAcc(response.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <WrapperBox>
        <Box style={{ display: "flex", height: "100%" }}>
          <ImageBox>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ lineHeight: 1.5, marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </ImageBox>

          {/* CONDITIONALY RENDERING LOGIN OR SIGNUP FORM  */}
          {account.view === "login" ? (
            <TextWrapper>
              <TextField
                variant="standard"
                label="Enter Email/Mobile number"
                onChange={(e) => onValueChange(e)}
                name="email"
              />
              {/* showing Error message conditionally */}
              {error && <Error>Please enter valid email</Error>}

              <TextField
                variant="standard"
                label="Enter Password"
                onChange={(e) => onValueChange(e)}
                name="password"
              />
              <Typography style={{ fontSize: 12, color: "#666" }}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center", color: "#666" }}>
                OR
              </Typography>
              <OtpButton>Request OTP</OtpButton>
              <Typography
                style={{
                  fontSize: 14,
                  color: "#2874f0",
                  fontWeight: 600,
                  textAlign: "center",
                  marginTop: 50,
                  cursor: "pointer",
                }}
                onClick={() => toggleAccount()}
              >
                New to Flipkart? Create an account
              </Typography>
            </TextWrapper>
          ) : (
            <TextWrapper>
              <TextField
                variant="standard"
                label="Enter Firstname"
                name="firstname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Lastname"
                name="lastname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Phone number"
                name="phone"
                onChange={(e) => onInputChange(e)}
              />

              <LoginButton onClick={() => onFormSubmit()}>Continue</LoginButton>
            </TextWrapper>
          )}
        </Box>
      </WrapperBox>
    </Dialog>
  );
};

const WrapperBox = styled(Box)`
  height: 70vh;
  width: 90vh;
  padding: 0;
`;
const ImageBox = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  height: 81.9%;
  width: 28%;
  padding: 45px 35px;
  color: #fff;
`;

const TextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  overflow: hidden;
  flex: 1;
  & > div,
  & > p {
    margin-top: 20px;
  }
  & > button {
    margin-top: 12px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  padding: 10px;
`;
const OtpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  padding: 10px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Error = styled(Typography)`
  color: #ff6161;
  font-size: 10px;
  font-weight: 600;
  margin-top: 5px;
  line-height: 0;
`;
export default LoginDialog;
