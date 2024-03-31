import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;