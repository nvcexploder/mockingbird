var express = require('express');
var app 	= express.createServer();
var spawn 	= require('child_process').spawn;

app.use(express.bodyParser());

app.post('/', function(req, res){

	console.log('you said ' + req.body.say);

	var say = spawn('say', ['\''+req.body.say+'\'']);

	say.on('exit', function(){
		res.end('success');	
	});	
});

app.listen(3000);