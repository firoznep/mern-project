import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Muslim",
    lastName: "Ansari",
    email: "muslim.a@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    firstName: "Umar",
    lastName: "Khan",
    email: "umar.a@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    firstName: "Ali",
    lastName: "Sayeed",
    email: "ali.a@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    firstName: "Usman",
    lastName: "Don",
    email: "usman.a@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

export default users;
