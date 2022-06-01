const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51L5jPwChQ2qUt7avciXaFZsXPb9zsxCh1YY3FtwKg4LhoPnRUJa3CQwUnYCBUkXzu0nBNGc0XOfCP33hYJrFzOC0000dc7L1I1");

// API

// API config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    console.log("payment received ". total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-8ad6c/us-central1/api