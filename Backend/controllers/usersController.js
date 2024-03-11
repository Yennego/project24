const User = require("../models/user");

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

  //check if it's an array of users or a single user object
  if (!Array.isArray(userData)) {
    // If it's a single user object, convert it to an array
    userData = [userData];
  }

  try {
    const createdUsers = await Promise.all(
      userData.map(async (userData) => {
        // Check if the required fields are present
        if (!userData.password || !userData.email || !userData.name) {
          throw new Error("Missing required fields");
        }
        const user = new User(userData);
        return await user.save();
      })
    );
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
