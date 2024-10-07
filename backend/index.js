require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: process.env.PUBLIC_FRONTEND_ORIGIN || "http://localhost:3000",
    methods: "GET, POST, OPTIONS",
    credentials: true,
  })
);

app.get("/api/data", (req, res) => {
  res.json({
    message: `Hello from Backend server! ${process.env.PRIVATE_BACKEND_IP}:${PORT}!`,
  });
});

const PORT = process.env.BACKEND_PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Backend server is running on http://localhost:${process.env.PRIVATE_BACKEND_IP}:${PORT}`
  );
});
