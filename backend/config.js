import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://admin:123@major.p5udu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'AKIA3IKWVNNRQKOSAITW',
  secretAccessKey: process.env.secretAccessKey || '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',
};
