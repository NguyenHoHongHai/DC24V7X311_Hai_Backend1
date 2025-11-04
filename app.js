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
// --------------------
// Xử lý lỗi 404 và lỗi chung
// --------------------
const ApiError = require("./app/api-error");

// Xử lý lỗi khi không tìm thấy route
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi tập trung
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
