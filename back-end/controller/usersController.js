import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateUserToken from "../utils/generateUserToken.js";

const getUser = expressAsyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // res.send({ firstName, lastName, email, password });
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateUserToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const getUserProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.send({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});
export { getUser, getUserProfile };
