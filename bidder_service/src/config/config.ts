import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || '';

export const config = {
  server: {
    port: SERVER_PORT,
    env: NODE_ENV
  },
};
