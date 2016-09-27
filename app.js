var express = require('express');
var mongoose = require('mongoose');

var routes  = require('./routes');

var app     = express();

// Setup mongoose
mongoose.connect('mongodb://localhost:27017/cart');
mongoose.connection.on('connected', function(){
    console.log("MongoDB connection established!")
});
mongoose.connection.on('error', function(){
    console.log("MongoDB connection error. Make sure MongoDB is running!")
});


// Setup route
app.use('/api', routes);
app.get('/', function(req, res) {
    res.send("Hello Friend! <br/> Api located at /api");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// Listener
app.listen(3000);
console.log("Server is up an running ...");