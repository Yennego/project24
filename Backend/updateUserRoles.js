const User = require("./models/user");

// Update roles based on role field
User.updateMany(
  { role: "admin" },
  { $set: { roles: "admin" } },
  { multi: true },
  (err, result) => {
    if (err) {
      console.error("Error updating users:", err);
    } else {
      console.log("Users updated successfully:", result);
    }
  }
);
