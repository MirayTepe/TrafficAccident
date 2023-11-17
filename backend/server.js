const express = require("express");
const connectDb = require("./config/dbConnection.js");
const errorHandler = require("./middleware/errorHandler.js");
const dotenv = require("dotenv").config();
const accidentRoutes = require("./routes/accidents.js");
const reasonRoutes = require("./routes/reasons.js");
const userRoutes = require("./routes/users.js");
const streetRoutes = require("./routes/streets.js");

const app = express();
app.use(express.json());

connectDb();

const port = process.env.PORT || 5000;

app.use("/api/accidents", accidentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/streets", streetRoutes);
app.use("/api/reasons", reasonRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
