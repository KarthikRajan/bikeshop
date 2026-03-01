const express = require("express");
const path = require("path");
const app = express();

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Serve the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("🚴 Bike shop running on http://localhost:3000");
});