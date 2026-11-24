const bcrypt = require("bcrypt");
const User = require("../models/User");
const { cookieOptions } = require("../config/session");

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

// Login an existing user
const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    // Find the user by email
    const user = await User.findOne({
      email: email.trim().toLowerCase()
    }).select("+passwordHash");

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

   
    const isMatch = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!isMatch || Buffer.byteLength(password) > 72) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }


    req.session.regenerate((error) => {
      if (error) {
        return res.status(500).json({
          message: "Login failed"
        });
      }

      req.session.userId = user._id.toString();

      req.session.save((error) => {
        if (error) {
          return res.status(500).json({
            message: "Login failed"
          });
        }

        res.status(200).json({
          message: "Login successful",
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });
      });
    });

  } catch (error) {
    res.status(500).json({
      message: "Login failed"
    });
  }
};


const logout = (req, res) => {
  // destroy user session
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        message: "Logout failed"
      });
    }

    // remove session cookie
    res.clearCookie("cineverse.sid", cookieOptions);

    return res.status(200).json({
      message: "Logout successful"
    });
  });
};
// Get the currently logged-in user
const getCurrentUser = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({
        message: "Not logged in"
      });
    }

    const user = await User.findById(req.session.userId);

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to get user information"
    });
  }
};

module.exports = { register, login, logout, getCurrentUser };