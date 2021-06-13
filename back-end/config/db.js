import "colors";
import mongoose from "mongoose";

const mongoDbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() =>
      console.log(
        `Mongoose is connected ${mongoose.connection.host}`.bgGray.brightGreen
      )
    )
    .catch((e) => console.log(`Error from: ${e}`.red));
};

export default mongoDbConnect;
