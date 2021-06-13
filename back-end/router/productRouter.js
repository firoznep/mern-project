import express from "express";
import { getProduct, getProducts } from "../controller/productsController.js";
const router = express.Router();

router.route("/").get(getProducts);

router.get("/:id", getProduct);

export default router;
