// Importing what is required
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Creating port and initializing express (app)
const PORT = process.env.PORT || 3001;
const app = express();


// Using middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use api and html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Starting server on the port
app.listen(PORT, () => {
  console.log(`API server is on port ${PORT}!`);
});