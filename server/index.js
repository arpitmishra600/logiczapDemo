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
const googleRoutes = require("./routes/google.routes");
const session = require('express-session');



dotenv.config();
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use((req, res, next) => {
    res.removeHeader('Cross-Origin-Opener-Policy');
    next();
  });

  app.use(session({
    secret: process.env.SESSION_SECRET, // Replace with your secret
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true, // Prevents client-side access to the cookie
      secure: process.env.NODE_ENV === 'production', // Set to true for HTTPS connections
      sameSite: 'lax', // or 'none' if cross-origin requests need the cookie
    },
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
app.use("/api/v1/google", googleRoutes);


dbConnect();

