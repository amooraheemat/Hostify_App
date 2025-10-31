import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Config/db.js";
import userRoutes from "./routes/user.route.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => connectDB(),
console.log(`Server running on port ${PORT}`));
