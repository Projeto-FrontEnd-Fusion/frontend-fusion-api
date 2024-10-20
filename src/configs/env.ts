import dotenv from 'dotenv';

dotenv.config();

export default {
  JWT_TOKEN: process.env.JWT_TOKEN || '',
  SECRET_SESSION_KEY: process.env.SECRET_SESSION_KEY || '',
  PORT: process.env.PORT || 8080,
};
