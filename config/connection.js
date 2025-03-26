const Sequelize = require('sequelize');
require('dotenv').config();

// Log environment variables for debugging (optional, remove in production)
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', // Use 'postgres' for PostgreSQL
    port: process.env.DB_PORT,
    logging: false, // Disable SQL query logging (optional)
  }
);

// Test the connection (optional, for debugging)
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
