import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// export default mongoose.model("User", UserSchema);
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
