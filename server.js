require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));


// middleware
require('./config/session')(app);
require('./config/flash')(app);
require('./config/views')(app);
require('./config/parser')(app);
require('./config/morgan')(app);

// routes
require('./routes/home.route')(app);
require('./routes/image_upload.route')(app);


// port
app.listen(3000, () => {
    console.log('App is running on port 3000!');
}); 