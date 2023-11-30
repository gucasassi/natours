// Importing required modules
import colors from "colors";
import dotenv from "dotenv";
import express from "express";

// Load environment variables
dotenv.config(".env");

// Initialize Express app
const app = express();

// Define root handler just for test
app.get("/", (req, res) => {
  res.send("Hi there!");
});

// Define the port to run the server on
const PORT = process.env.APP_PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`.yellow);
});
