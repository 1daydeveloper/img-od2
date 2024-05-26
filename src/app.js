const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
