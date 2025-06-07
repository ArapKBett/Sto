# ArapStore

ArapStore is an e-commerce platform built with React, Node.js, Express, and MongoDB, hosted on Render. It features products in categories like cars, electronics (phones, PCs, software, accessories), and clothes & apparel. Sold items are automatically removed from display after 15 minutes.

## Setup

### Backend
1. Navigate to `server/`.
2. Run `npm install`.
3. Create a `.env` file with `MONGO_URI=your_mongodb_connection_string` and `PORT=5000`.
4. Run `npm start` for production or `npm run dev` for development.

### Frontend
1. Navigate to `client/`.
2. Run `npm install`.
3. Run `npm start` for development or `npm run build` for production.

### MongoDB
- Use MongoDB Atlas to create a database and obtain the connection string.
- Ensure the `MONGO_URI` is set in the backend `.env` file.

### Deployment
- See `render.yaml` for Render deployment configuration.
- Push the project to a GitHub repository.
- Create two Render services: one for the backend (Node.js) and one for the frontend (Static Site).
- Set `MONGO_URI` in the Render backend service environment variables.

## Features
- Browse products by category.
- Mark products as sold, with automatic removal after 15 minutes.
- Responsive design with a clean UI.
