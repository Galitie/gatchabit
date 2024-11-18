import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  tokens: Number,
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item", // Reference the Item model
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
