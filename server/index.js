var express = require('express');
var path = require('path');

var admin = require('./routes/admin');

var app = express();

var port = 3000;

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static( path.join(__dirname, '../public') ));
 
//routing
app.use('/admin', admin);

//요청이 없으면 모두다 react
app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

var server = app.listen(port, () => {
   console.log('Express listening on port', port);
});