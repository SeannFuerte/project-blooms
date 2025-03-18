require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 
const app = express();
const userRoute = require('./routes/user_routes.js');
const orderRoute = require('./routes/order_routes.js');
const inventoryRoute = require('./routes/inventory_routes.js');

//  Connect to the database
const { connectDB } = require('./config/db');
connectDB();

//  Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Routes
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/inventory', inventoryRoute);

//  Default Route
app.get('/', (req, res) => {
  res.json({ message: "BLOOMS API Connected" });
});

//  Server Listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
