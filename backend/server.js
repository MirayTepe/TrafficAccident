const express = require("express");
const cors = require('cors');
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();
const accidentRoutes = require("./routes/accidentRoutes.js");
const reasonRoutes = require("./routes/reasonRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const districtRoutes = require("./routes/districtRoutes.js");
const vehicleRoutes = require("./routes/vehicleRoutes.js");
const driverRoutes = require("./routes/driverRoutes.js");
const accidentResultRoutes = require("./routes/accidentResultRoutes.js");
const weatherRoutes = require("./routes/weatherRoutes.js");
const accidentTypeRoutes = require("./routes/accidentTypeRoutes.js");
const globalErrorHandler = require("./middleware/globalErrorHandler.js");

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
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/accidentResults", accidentResultRoutes);
app.use("/api/weathers", weatherRoutes);
app.use("/api/accidentTypes", accidentTypeRoutes);


app.use(globalErrorHandler);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
