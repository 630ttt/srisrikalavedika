const express = require("express");
const router = express.Router();

const { login } = require("../controllers/adminController");

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Admin Route Working",
  });
});

router.post("/login", login);

module.exports = router;