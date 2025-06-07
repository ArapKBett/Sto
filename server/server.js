const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const cleanup = require('./middleware/cleanup');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cleanup());

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/sold-items', require('./routes/soldItems'));

// Health check
app.get('/', (req, res) => res.send('ArapStore API'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
