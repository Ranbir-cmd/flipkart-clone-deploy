import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmMerchantKey, paytmParams } from "../server.js";
import formidable from "formidable";
import https from "https";

export const addPaymentGateway = async (req, res) => {
  try {
    // checksum generate
    let paytmCheckSum = await paytmchecksum.generateSignature(
      paytmParams,
      paytmMerchantKey
    );
    let params = {
      ...paytmParams,
      CHECKSUMHASH: paytmCheckSum,
    };
    res.status(200).json(params);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const paytmResponse = (request, response) => {
  // checksum validate
  const form = new formidable.IncomingForm();
  let paytmCheckSum = request.body.CHECKSUMHASH;
  delete request.body.CHECKSUMHASH;
  let isVerifySignature = paytmchecksum.verifySignature(
    request.body,
    paytmMerchantKey,
    paytmCheckSum
  );
  if (isVerifySignature) {
    let paytmParams = {};
    paytmParams["MID"] = request.body.MID;
    paytmParams["ORDERID"] = request.body.ORDERID;
    paytmchecksum
      .generateSignature(paytmParams, paytmMerchantKey)
      .then(function (checksum) {
        paytmParams["CHECKSUMHASH"] = checksum;
        let post_data = JSON.stringify(paytmParams);
        let options = {
          hostname: "securegw-stage.paytm.in",
          port: 443,
          path: "/order/status",
          headers: {
            "Content-Type": "application/json",
            "Content-length": post_data.length,
          },
        };
        let res = "";
        let post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            res += chunk;
          });
          post_res.on("end", function () {
            let result = JSON.parse(res);
            response.redirect("https://ranbirsfllipkart.herokuapp.com");
          });
        });
        post_req.write(post_data);
        post_req.end();
      });
  } else {
    console.log("Checksum mismatched!");
  }
};
