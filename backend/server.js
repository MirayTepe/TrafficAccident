const express = require("express");
const cors = require('cors');
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();
const accidentRoutes = require("./routes/accidentRoutes.js");
const reasonRoutes = require("./routes/reasonRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const districtRoutes = require("./routes/districtRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

connectDb();

const port = process.env.PORT || 5000;

// Routes
app.use("/api/accidents", accidentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/districts", districtRoutes);
app.use("/api/reasons", reasonRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
