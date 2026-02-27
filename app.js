const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>🚴 Welcome to Karr's Bike Shop</h1>
    <p>Mountain Bike - ₹25,000</p>
    <p>Road Bike - ₹30,000</p>
    <p>Electric Bike - ₹60,000</p>
  `);
});

app.listen(3000, () => {
  console.log("Bike shop running on port 3000");
});