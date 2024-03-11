// middleware authorization
const authorize = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role; // Assuming the user role is stored in req.user.roles

    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    next();
  };
};

module.exports = authorize;

// const jwt = require("jsonwebtoken");

// const authorize = (roles) => {
//   return (req, res, next) => {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//     console.log("authHeader:", authHeader);
//     console.log("token:", token);

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       console.log("decoded:", decoded);
//       if (err) {
//         // More specific error handling based on error type
//         if (err.name === "TokenExpiredError") {
//           return res.status(401).json({ message: "Token has expired" });
//         } else if (err.name === "JsonWebTokenError") {
//           return res.status(403).json({ message: "Invalid token" });
//         } else {
//           console.error("Failed to verify token:", err.message);
//           return res.status(500).json({ message: "Internal server error" });
//         }
//       }

//       const userRole = decoded.roles;
//       console.log("userRole:", userRole);

//       if (!roles.includes(userRole)) {
//         return res.status(403).json({ message: "Unauthorized" });
//       }

//       req.userRole = userRole;
//       next();
//     });
//   };
// };

// module.exports = authorize;
