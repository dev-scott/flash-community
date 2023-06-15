


import mongoose from "mongoose";
import { Schema } from "mongoose";



const ProjetSchema = new Schema(
    
  {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }


)

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


// export default mongoose.model("Projet",projetSchema);

export const Projet = mongoose.models.Projet || mongoose.model("Projet" , ProjetSchema);

export const User = mongoose.models.User || mongoose.model('User', UserSchema);





const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
