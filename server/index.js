const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.post("/pay", async (req, res) => {
  console.log(req.body.token); // Log the token received from the client-side
  await Stripe.charges.create({
    source: req.body.token.id, // Use the token ID from the request body
    amount: req.body.amount,   // Use the amount from the request body
    currency: "usd",         // Set the currency to "rupie"
  });
});

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
  });