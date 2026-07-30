const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    console.log("===== LOGIN START =====");
    console.log(req.body);

    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    console.log("Admin:", admin);

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Admin not found",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    console.log("JWT Secret:", process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("Token Created");

    res.json({
      success: true,
      token,
      username: admin.username,
    });
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};