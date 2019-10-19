const express = require("express");
const app = express();
app.listen(8000);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);
require('./server/models/task.js');


