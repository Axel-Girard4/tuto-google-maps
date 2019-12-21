const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/hello/:prenom', function (req, res) {
  var prenom = req.params.prenom
  res.send('Hello ' + prenom + '!' + prenom);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});