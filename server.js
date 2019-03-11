var express = require('express');
var path = require('path');
var serverdb = require('mongoose');
var localdb = require('mongoose');
var app = express();

var serverurl = 'mongodb+srv://rcp-admin:rcp-admin@rcpcluster-odozl.azure.mongodb.net/rcp-database';
var localurl = 'mongodb://localhost/rcp-database';

serverdb.connect(serverurl, { useNewUrlParser: true });
localdb.connect(localurl, { useNewUrlParser: true });

var serverSchema = serverdb.Schema({
  name: String,
  password: String
});

var localSchema = localdb.Schema({
  name: String,
  password: String
});

var serverModel = serverdb.model('serverModel', serverSchema, 'users');
var localModel = localdb.model('localModel', localSchema, 'users');

app.get('/usersserver', function(req, res){
  serverModel.find(function(err, response){
    res.json(response);
  });
});

app.get('/userslocal', function(req, res){
  localModel.find(function(err, response){
    res.json(response);
  });
});

// app.post();

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules/')));
app.use('/partials', express.static(__dirname + '/public/partials'));
app.listen(8080);
console.log('Listen on port 8080');
