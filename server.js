var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules/')));
app.use('/partials', express.static(__dirname + '/public/partials'));
var port = 8000;
app.listen(port);
console.log('Server on ' + port);
