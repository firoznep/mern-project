import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const userProtect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_USER_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized! (bad token)");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Authorization Failed!");
  }
  next();
});

export { userProtect };
