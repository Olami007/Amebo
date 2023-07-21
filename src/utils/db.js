import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("database connected");
  } catch (error) {
    throw new Error("connection failed");
  }
};

export default connect;
