import dotenv from "dotenv";

dotenv.config();

const { DB_URL } = process.env;

export default {
  port: 3000,
  dbUri: DB_URL,
  saltRounds: 5,
};
