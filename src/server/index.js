const express = require('express');
const formRoutes = require('./routes/formRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // Parse JSON request bodies
app.use('/api', formRoutes); // Use form routes

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
