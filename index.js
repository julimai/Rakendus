// Module requires
var express = require('express');
var logger = require('morgan');
var routes = require('./routes');

// Instatiate application instance
var app = express();

// Configure the middleware - in this case Morgan Logger
app.use(logger('dev'));

// Let's add a View Engine - Handlebars
app.set('view engine', 'hbs');

// Handle URL root 
app.get('/', routes.index);

app.get('/api', routes.apiIndex);

// Application-specific routes
// app.get('/api/users/:id([0-9]{1,9})?', routes.usersByID);
// app.get('/api/users/:username?', routes.usersByUsername);
app.get('/api/users/:id?', routes.users);
app.get('/api/profile/:id', routes.profilePage);
app.get('/api/posts/:id', routes.postDetails);
app.get('/api/stats', routes.statistics);
app.get('/api/stats/top10/likedusers', routes.top10LikedUsers);
app.get('/api/stats/registrations', routes.userRegistrations);
app.get('/api/stats/genderdivision', routes.genderDivision);

// Default route when nothing else was found
app.get('*', routes.default);

// Initialize the server
var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});
