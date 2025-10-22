import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Menu from './models/Menu.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lounge_db';

const items = [
  { name: 'Club Sandwich', category: 'Food', description: 'Triple-decker with fries', price: 1200 },
  { name: 'Grilled Suya', category: 'Food', description: 'Spicy beef skewers', price: 1500 },
  { name: 'Coke', category: 'Drink', description: '330ml', price: 300 },
  { name: 'Signature Cocktail', category: 'Drink', description: 'House special', price: 2500 }
];

const seed = async () => {
  await mongoose.connect(MONGODB_URI);
  await Menu.deleteMany({});
  await Menu.insertMany(items);
  console.log('Seeded menu items');
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });
