import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  databaseUri: process.env.DATABASE_URL,
};
