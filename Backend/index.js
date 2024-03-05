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
const stavesRouter = require("./routes/staves");
const documentsRouter = require("./routes/documents");
const departmentsRouter = require("./routes/departments");
const categoriesRouter = require("./routes/categories");
const homeRouter = require("./routes/home");

// Middleware
app.use(express.json());

// Use routes
app.use("/home", homeRouter);
app.use("/api/users", usersRouter);
app.use("/api/staves", stavesRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/categories", categoriesRouter);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
