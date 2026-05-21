import express from "express";
import router from "./modules/auth/auth.routes.js";
import { connectDB } from "./config/db.js";
import "dotenv/config";

const app = express();
app.use(express.json())
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/", router)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});