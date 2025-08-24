import mongoose from "mongoose";

const createUserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  phoneNumber: { type: Number },
});

export default mongoose.models.Users ||
  mongoose.model("Users", createUserSchema);
