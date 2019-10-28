var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/api/products',function(req,res){
 res.sendFile(path.join(__dirname+'/products.json'));
  //__dirname : Ritorna la cartella del progetto
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
