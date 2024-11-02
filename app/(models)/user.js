import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  tokens: Number,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
