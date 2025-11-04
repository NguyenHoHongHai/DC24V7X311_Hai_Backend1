const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const contactsRouter = require("./app/routes/contact.route");
app.use("/api/contacts", contactsRouter);

// Route kiểm tra hoạt động
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ContactBook application." });
});

module.exports = app;
