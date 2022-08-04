import Products from "../model/product-schema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findOne({ id: id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
