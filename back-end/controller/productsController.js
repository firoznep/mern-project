import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProduct = expressAsyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);
  //   let product = products.find((f) => req.params.id === f._id);

  if (product) {
    res.json(product);
  } else {
    // res
    //   .status(404)
    //   .json({ message: "page not found!" })
    //   .contentType("application/json");

    const errr = new Error(`NOT FOUND... ${req.originalUrl}`);
    res.status(404);
    res.json({ message: errr.message });
  }
});

export { getProducts, getProduct };
