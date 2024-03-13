const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");
const session = require("express-session");
const passport = require("./config/passport");
const { authorize } = require("./middleware/authorization");
const dotenv = require("dotenv");
// dotenv.config();

dotenv.config();

const app = express();

// app.use(express.json());

//MongoDB connection URI and JWT secret key
const dbURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

//DB Connection
connectDB();

// Middleware
app.use(express.json());

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Import routes
const usersRouter = require("./routes/users");
const documentsRouter = require("./routes/documents");
const departmentsRouter = require("./routes/departments");
const categoriesRouter = require("./routes/categories");
const homeRouter = require("./routes/home");

// Use routes
app.use("/home", homeRouter);
app.use("/api/users", usersRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/categories", categoriesRouter);

// Route for handling file uploads with authorization middleware
app.use("/api/uploads", authorize(["admin"]), documentsRouter);

// app.get("/api/protected", authorize(["admin"]), (req, res) => {
//   res.json({ message: "This route is protected" });
// });

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
