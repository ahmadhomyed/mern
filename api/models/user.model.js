import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Favatar-bussinesman-man-profile-icon-vector-illustration_7268049.html&psig=AOvVaw1lzpivZ6cVIufJcvpiMWjl&ust=1713918979086000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCRlfGL14UDFQAAAAAdAAAAABAJ",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
