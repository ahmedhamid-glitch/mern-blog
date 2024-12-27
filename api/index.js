import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

const PORT = 5174;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
