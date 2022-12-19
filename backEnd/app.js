const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const testRoutes = require("./routes/test");
const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");

const User = require("./models/user");
const Chat = require("./models/chat");

const app = express();
const port = 3000;

const dbName = "test";
mongoose
  .connect(`mongodb://localhost:27017/${dbName}`)
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.log("MongoDB connection is failed...");
    console.log(err);
  });

app.use(bodyParser.json());

// CORS 설정
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// ========================== 라우트 ==========================
app.use("/root", testRoutes);
app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
// ============================================================

const server = app.listen(port);

// ======================= WebSocket ==========================
const io = require("socket.io")(server, {
  // CORS 설정
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected!");
});
// ============================================================
