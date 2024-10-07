const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the SERVER 2 (Backed)" });
});
const PORT = "5000";
app.listen(PORT, () => {
  console.log(`Server running on Port : http://localhost:{$PORT}`);
});
