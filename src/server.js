// server.js

const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: 'rzp_test_a5IHmEsWCCdHsy', // Replace with your Razorpay Key ID
  key_secret: 'W6HpIdEi1KnSz2StD35eXflh', // Replace with your Razorpay Secret Key
});

// Endpoint to create an order
app.post('/api/create-order', async (req, res) => {
  const { amount, currency, receipt } = req.body;

  try {
    const options = {
      amount: amount * 100, // Amount in the smallest currency unit (paisa for INR)
      currency: currency,
      receipt: receipt, // Unique receipt ID
    };

    const order = await razorpay.orders.create(options);
    res.json(order); // Return the order details to the frontend
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
