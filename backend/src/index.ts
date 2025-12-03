import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/api/sarees', (req, res) => {
  res.json([
    { id: 1, name: 'Banarasi Silk Saree', price: 2999, category: 'Silk' },
    { id: 2, name: 'Kanchipuram Saree', price: 4500, category: 'Traditional' },
    { id: 3, name: 'Georgette Saree', price: 1899, category: 'Partywear' }
  ]);
});

app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
