// require('dotenv').config(); // ✅ must come first

// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // now it's safe

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/create-checkout-session', async (req, res) => {
//   const { amount, type, email } = req.body;

//   if (!amount || !type || !email) {
//     return res.status(400).json({ error: 'Missing required fields.' });
//   }

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'ngn',
//             unit_amount: amount * 100, // convert to kobo
//             product_data: {
//               name: type,
//             },
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       customer_email: email,
//       success_url: `${process.env.CLIENT_URL}/payment-success`,
//       cancel_url: `${process.env.CLIENT_URL}/payment-cancelled`,
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error('Stripe error:', error);
//     res.status(500).json({ error: 'Payment session creation failed.' });
//   }
// });

// const PORT = 4242;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));





// require('dotenv').config(); // ✅ must come first

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/create-checkout-session', async (req, res) => {
//   const { amount, type, email } = req.body;

//   if (!amount || !type || !email) {
//     return res.status(400).json({ error: 'Missing required fields.' });
//   }

//   try {
//     // Paystack expects amount in kobo (so multiply by 100)
//     const response = await axios.post(
//       'https://api.paystack.co/transaction/initialize',
//       {
//         email,
//         amount: amount * 100,
//         metadata: { custom_fields: [{ display_name: "Payment Type", value: type }] },
//         callback_url: `${process.env.CLIENT_URL}/payment-success`,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     // Return Paystack's payment page URL
//     res.json({ authorization_url: response.data.data.authorization_url });
//   } catch (error) {
//     console.error('Paystack error:', error.response?.data || error.message);
//     res.status(500).json({ error: 'Payment initialization failed.' });
//   }
// });

// const PORT = 4242;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
