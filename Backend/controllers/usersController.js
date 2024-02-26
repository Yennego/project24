const User = require("../models/user");

// Users controller functions
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  let usersData = req.body;

  //check if it's an array of users or a single user object
  if (!Array.isArray(usersData)) {
    // If it's a single user object, convert it to an array
    usersData = [usersData];
  }

  try {
    const createdUsers = await Promise.all(
      usersData.map(async (userData) => {
        const user = new User(userData);
        return await user.save();
      })
    );
    res.status(201).json(createdUsers);
  } catch (err) {
    // Handle any errors
    res.status(400).json({ message: err.message });
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
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
