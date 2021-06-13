import "colors";
import dotenv from "dotenv";
import mongoDbConnect from "./config/db.js";
import products from "./data/products.js";
import users from "./data/users.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";

dotenv.config();

mongoDbConnect();

const insertData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const insertedUsers = await User.insertMany(users);
    const adminUser = insertedUsers[0]._id;
    const insertedProductsWithUser = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(insertedProductsWithUser);

    console.log("data inserted...successed".green);
    process.exit();
  } catch (e) {
    console.log(`data not inserted!:: ${e}`.red);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("data destroyed!".yellow);
    process.exit();
  } catch (e) {
    console.log(`data not destroyed!:: ${e}`.red);
    process.exit(1);
  }
};

if (process.argv[2] === "-dlt") {
  deleteData();
} else {
  insertData();
}
