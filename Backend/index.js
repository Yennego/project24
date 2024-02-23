const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

dotenv.config();

const app = express();

//MongoDB connection URI and JWT secret key
const dbURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

//DB Connection
connectDB();

// Import routes
const usersRouter = require("./routes/users");
const facultiesRouter = require("./routes/faculties");
const documentsRouter = require("./routes/documents");
const departmentsRouter = require("./routes/departments");
const categoriesRouter = require("./routes/categories");

// Middleware
app.use(express.json());

// Use routes
app.use("/api/users", usersRouter);
app.use("/api/faculties", facultiesRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/categories", categoriesRouter);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
