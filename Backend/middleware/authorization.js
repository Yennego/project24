// middleware authorization

const jwt = require("jsonwebtoken");

const authorize = (roles) => {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("Failed to verify token:", err.message);
        return res.status(403).json({ message: "Forbidden" });
      }

      const userRole = decoded.role; // Assuming role is stored in the token payload

      if (!roles.includes(userRole)) {
        return res.status(403).json({ message: "Unauthorized" });
      }

      next();
    });
  };
};

module.exports = authorize;

// const userRole = require("../models/user");

// const authorize = (roles) => {
//   return (req, res, next) => {
//     const userRole = req.user.roles;

//     if (!roles.includes(userRole)) {
//       return res.status(403).json({ message: "Unauthorized" });
//     }

//     next();
//   };
// };

// module.exports = authorize;

// middleware/authorization.js
