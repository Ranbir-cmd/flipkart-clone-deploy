import axios from "axios";

const URL = "";

export const authenticatesSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api", error);
  }
};

export const authenticatesLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error);
    // for error handling we need error data, from this data we could show error message
    return error.response;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    const response = await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling paytm api", error.message);
  }
};
