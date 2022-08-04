import { products } from "./constant/data.js";
import Products from "./model/product-schema.js";

const DefaultData = async () => {
  try {
    await Products.deleteMany({});
    await Products.insertMany(products);
    console.log("products inserted into db");
  } catch (error) {
    console.log(`Error while inserting default data`, error.message);
  }
};

export default DefaultData;
