# Ecom_backend

A back-end application for managing e-commerce data, including products, categories, and tags, using Express.js, Sequelize, and PostgreSQL.

## Description

This project is a Back-End E-commerce Application designed to manage product data, categories, and tags using Express.js, Sequelize, and PostgreSQL. It allows users to perform CRUD operations (Create, Read, Update, Delete) on various data entities such as Categories, Products, and Tags. The application efficiently handles database interactions and provides structured API endpoints that can be tested using tools like Insomnia or Postman.

## Acceptance Criteria

- **GIVEN** a functional Express.js API  
  **WHEN** I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file  
  **THEN** I am able to connect to a database using Sequelize.  

- **WHEN** I enter schema and seed commands  
  **THEN** a development database is created and seeded with test data.  

- **WHEN** I enter the command to invoke the application  
  **THEN** my server is started and the Sequelize models are synced to the PostgreSQL database.  

- **WHEN** I open API GET routes in Insomnia Core for categories, products, or tags  
  **THEN** the data for each of these routes is displayed in a formatted JSON.  

- **WHEN** I test API POST, PUT, and DELETE routes in Insomnia Core  
  **THEN** I am able to successfully create, update, and delete data in my database.  


## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory to store your database credentials. The `.env` file should look like this:
   ```
   DB_NAME=your_database_name
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   DB_PORT=5432
   ```

4. Set up the PostgreSQL database:
   - Open the PostgreSQL shell:
     ```bash
     psql -U postgres
     ```
   - Create the database:
     ```sql
     CREATE DATABASE your_database_name;
     ```

5. Seed the database with sample data:
   ```bash
   npm run seeds
   ```

6. Start the server:
   ```bash
   npm start
   ```

7. Test the API endpoints for Categories, Products, and Tags using Insomnia or Postman.

## Screenshots
![Image Alt]()
Video Link:


