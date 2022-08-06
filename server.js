import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import cors from "cors";
import Router from "./routes/route.js";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

const app = express();

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8000;

const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://${username}:${password}@cluster0.5ry3e.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});

DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
// after payment gateway success or failure, the url need to navigate
paytmParams["CALLBACK_URL"] = "https://ranbirsfllipkart.herokuapp.com/callback";
paytmParams["EMAIL"] = "mranbir07@gmail.com";
paytmParams["MOBILE_NO"] = "9876543210";
