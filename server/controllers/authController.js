const bcrypt = require("bcrypt");
const User = require("../models/User");


const register = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

   
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const userEmail = email.trim().toLowerCase();

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(userEmail)) {
      return res.status(400).json({
        message: "Invalid email address"
      });
    }

    
    if (password.length < 8 || Buffer.byteLength(password) > 72) {
      return res.status(400).json({
        message: "Password must be at least 8 characters and at most 72 bytes"
      });
    }


    const existingUser = await User.findOne({
      email: userEmail
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name.trim(),
      email: userEmail,
      passwordHash: hashedPassword
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email already registered"
      });
    }

    res.status(500).json({
      message: "Registration failed"
    });
  }
};

module.exports = { register };