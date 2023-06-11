import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', UserSchema);





const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
