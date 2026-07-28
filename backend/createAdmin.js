const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {
  try {
    const existingAdmin = await Admin.findOne({ username: "admin" });

    if (existingAdmin) {
      console.log("✅ Admin already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      username: "admin",
      password: hashedPassword,
    });

    console.log("✅ Admin Created Successfully");
    process.exit();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

createAdmin();