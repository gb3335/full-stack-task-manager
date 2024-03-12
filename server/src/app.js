const express = require('express');
const mongoose = require('mongoose');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/task-manager';

// Connect to the database
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', tasksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});