import jwt from "jsonwebtoken";

function generateUserToken(id) {
  return jwt.sign({ id }, process.env.JWT_USER_SECRET, { expiresIn: "30d" });
}

export default generateUserToken;
