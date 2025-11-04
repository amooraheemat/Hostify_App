import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./src/Config/db.js";
import userRoutes from "./src/Routes/user.route.js";
import userbook from "./src/Routes/booking.route.js"


dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use('/api/', userbook)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => connectDatabase(),
console.log(`Server running on port ${PORT}`));









// MONGODB_URI="mongodb+srv://hostify:hostify@cluster0.p3hzj7i.mongodb.net/?appName=Cluster0"

// PORT=5000
// JWT_SECRET=dsljlvmdvldjjojlmlddl&^&$%$#^^*&mnbjgj&243354666BMNBVJ^&*%^$%
// JWT_EXPIRES_IN=30d

// # Email (optional)
// EMAIL_HOST=smtp.gmail.com
// EMAIL_PORT=465
// EMAIL_USER=techkrush@gmail.com
// EMAIL_PASS=ewxk qpnn sdyv pxip
