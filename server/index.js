const express = require('express');
const dotenv = require('dotenv');
const {dbConnect} = require('./db');
const cors = require('cors');
const userRoutes = require("./routes/user.routes")
const paymentRoutes = require("./routes/payment.routes");
const cookieParser = require('cookie-parser');


dotenv.config();
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.listen(5050,()=>console.log("backend running"))

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/payment", paymentRoutes);


dbConnect();

