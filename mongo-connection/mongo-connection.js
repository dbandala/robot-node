const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const UserSchema = mongoose.Schema({
    name: String,
    age: Number
});

const UserModel = mongoose.model('users', UserSchema);

// Create Express app
const app = express();

// Middleware to log request data
app.use((req, res, next) => {
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Request Body:', req.body);
  console.log('Request Query:', req.query);
  next();
});

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.get('/getUsers', (req, res) => {
    UserModel.find({}).then((users) => {
        res.json(users);
    }).catch((error) => {
        console.log('Error:', error);
        //res.status(500).json({ error: error });
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
