const express = require('express');
const dotenv = require('dotenv');
const {dbConnect} = require('./db');
const cors = require('cors');
const http = require('http');
const userRoutes = require("./routes/user.routes")
const paymentRoutes = require("./routes/payment.routes");
const cookieParser = require('cookie-parser');
const profileRoutes = require('./routes/profile.routes');
const utilRoutes = require("./routes/utils.routes");
const recruiterRoutes = require("./routes/recruiter.routes");
const io = require("./websocket/socket-server-recruiter");
const messageRoutes = require("./routes/messages.routes");



dotenv.config();
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

const server = http.createServer(app);

io.attach(server);

server.listen(5050,()=>console.log("backend running"))

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/utils", utilRoutes);
app.use("/api/v1/recruiter", recruiterRoutes);
app.use("/api/v1/messages", messageRoutes);


dbConnect();

