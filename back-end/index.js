import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import mongoDbConnect from "./config/db.js";
import { errorHandle, notFound } from "./middleware/errorHandler.js";
import productRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

mongoDbConnect();

const __dirname = path.resolve();

app.use("/api/products", productRouter);

app.use("/api/users", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/front-end/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);

app.use(errorHandle);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () =>
  console.log(
    `Server is running in "${process.env.NODE_ENV}-mode" on "Port-${PORT}"`
      .bgGray.brightYellow
  )
);
