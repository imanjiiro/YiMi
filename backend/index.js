const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend работает 🔥" });
});

app.get("/api/user", (req, res) => {

  res.json({ userId: "dev-preview" });
});

app.listen(3001, () => console.log("API на http://localhost:3001"));

