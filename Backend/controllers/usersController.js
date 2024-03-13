const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res
        .status(200)
        .json({ message: "Authentication successful", user });
    });
  })(req, res, next);
};

// Users controller functions
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createUser = async (req, res) => {
  let userData = req.body;
  console.log("Request body:", userData);

  try {
    // If userData is not an array, convert it to an array containing a single object
    if (!Array.isArray(userData)) {
      userData = [userData];
    }

    for (const userObj of userData) {
      // Check if the required fields are present
      if (
        !userObj.password ||
        !userObj.email ||
        !userObj.name ||
        !userObj.roles
      ) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Hash the plaintext password using bcrypt
      const hashedPassword = await bcrypt.hash(userObj.password, 10); // Use a saltRounds value of 10

      // Save the user object to the database with the hashed password
      userObj.password = hashedPassword;
    }

    // Insert the user data, including the hashed passwords, into the database
    const createdUsers = await User.insertMany(userData);

    res.status(201).json(createdUsers);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     roles: req.body.roles,
//     password: req.body.password,
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.createUsersBatch = async (req, res) => {
//   try {
//     const users = req.body;
//     const createdUsers = await User.insertMany(users);
//     res.status(201).json(createdUsers);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
