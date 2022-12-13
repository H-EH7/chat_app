const express = require("express");
const bodyParser = require("body-parser");

const testRoutes = require("./routes/test");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// CORS 설정 오류 해결
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/root", testRoutes);

const server = app.listen(port);

const io = require("socket.io")(server, {
  // CORS 설정 오류 해결
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected!");
});
