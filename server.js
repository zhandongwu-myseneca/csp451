const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/feedbackDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Define Feedback schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  rating: Number
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to FeedbackFlow!');
});

app.post('/feedback', async (req, res) => {
  try {
    const { name, message, rating } = req.body;
    const feedback = new Feedback({ name, message, rating });
    await feedback.save();
    res.status(201).send('Feedback added successfully');
  } catch (error) {
    res.status(400).send('Error saving feedback');
  }
});

app.get('/feedback', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    res.status(500).send('Error retrieving feedback');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
