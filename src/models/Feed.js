import mongoose from "mongoose";

const { Schema } = mongoose;

const FeedsSchema = new Schema(
  {
    userId: { type: String },
    userUsername: { type: String },
    userFirstName: { type: String },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

// export default mongoose.model("Feeds", FeedsSchema);
module.exports = mongoose.models.Feeds || mongoose.model("Feeds", FeedsSchema);
