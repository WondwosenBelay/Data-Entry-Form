const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/data-entry', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));

// Define a schema for the data
const DataSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    education: String,
    city: String,
    country: String
});

// Create a model for the data
const DataEntry = mongoose.model('DataEntry', DataSchema);

// API route to handle form submission
app.post('/submit', (req, res) => {
    const newData = new DataEntry(req.body);
    newData.save()
        .then(() => res.json({ message: 'Data saved successfully!' }))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
