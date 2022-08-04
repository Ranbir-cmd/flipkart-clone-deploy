import express from "express";
import { userLogin, userSignup } from "../controller/user-controller.js";
import { getProducts } from "../controller/product-controller.js";
import { getProductDetails } from "../controller/product-controller.js";
import { addPaymentGateway } from "../controller/paytm-controller.js";
import { paytmResponse } from "../controller/paytm-controller.js";

const router = express.Router();

// user route
router.post("/signup", userSignup);
router.post("/login", userLogin);

// product route
router.get("/products", getProducts);
router.get("/product/:id", getProductDetails);

// payment route
router.post("/payment", addPaymentGateway);
router.post("/callback", paytmResponse);

export default router;
