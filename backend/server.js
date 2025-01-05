import express from 'express';
import connectDB from './config/db.config.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Connect to database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
