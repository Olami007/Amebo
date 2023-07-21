import mongoose from "mongoose";

const { Schema } = mongoose;

const FeedSchema = new Schema(
  {
    body: { type: String, required: true },
    // image: { type: String, required: true },
  },
  { timestamps: true }
);

// export default mongoose.model("Feed", FeedSchema);
module.exports = mongoose.models.Feed || mongoose.model("Feed", FeedSchema);
