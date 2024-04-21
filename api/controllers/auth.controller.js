import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "./../utilis/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};
export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "user Not Found"));
    }
    const isMatch = bcryptjs.compareSync(password, user.password);
    if (!isMatch) {
      return next(errorHandler(400, "Wrong Password"));
    }
    const { password: pass, ...rest } = user._doc;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
    res.cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 3600),
    });
    res.status(200).json({ rest });
  } catch (err) {
    next(err);
  }
};
