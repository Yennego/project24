// middleware/authorization.js

const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/db").jwtSecret;

const authorize = (roles) => {
  return (req, res, next) => {
    // Extract the JWT token from the request headers
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];

    // Check if the token exists
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    try {
      // Verify the token and extract the payload
      const decoded = jwt.verify(token, jwtSecret);

      // Extract the user roles from the decoded payload
      const userRoles = decoded.roles;

      // Check if the user roles include any of the required roles
      if (!userRoles || !roles.some((role) => userRoles.includes(role))) {
        return res.status(403).json({ message: "Unauthorized" });
      }

      // If the user is authorized, proceed to the next middleware
      next();
    } catch (error) {
      // If there's an error verifying the token, return an error response
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};

// module.exports = { authorize };

// const authorize = (roles) => {
//   return (req, res, next) => {
//     const userRoles = req.user && (req.user.role || req.user.roles);
//     console.log("User role", userRoles);
//     console.log("role", roles);
//     console.log("reqUser", req.user);
//     if (!userRoles || !roles.some((role) => userRoles.includes(role))) {
//       return res.status(403).json({ message: "Unauthorized" });
//     }

//     next();
//   };
// };

module.exports = { authorize };
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
