import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
app.use((err,req,res , next)=>{
  const statusCode = err.statusCode || 500 ;
  const message  = err.message ||"internal server error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})