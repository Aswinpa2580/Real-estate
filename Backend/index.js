import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import authRoute from "./Routes/Auth.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/auth",authRoute)

const PORT = 4000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
connectDB();

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started on http://localhost:${PORT}`);
  } else {
    console.error("Error:", err);
  }
});
