import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoDbConnect from "./config/db.js";
import { errorHandle, notFound } from "./middleware/errorHandler.js";
import productRouter from "./router/productRouter.js";
const app = express();

dotenv.config();
app.use(cors());

mongoDbConnect();

app.get("/", (req, res) => {
  res.json({ name: "Muslim" });
});

app.use("/api/products", productRouter);

app.use(notFound);

app.use(errorHandle);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () =>
  console.log(
    `Server is running in "${process.env.NODE_ENV}-mode" on "Port-${PORT}"`
      .bgGray.brightYellow
  )
);
