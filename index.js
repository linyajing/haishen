const app = require('express');
var app = express();

app.get('/server', function (req, res) {
    res.send('Hello World!');
});
var server = app.listen(5758, function () { 
    console.log('Example app listening at http://%s:%s', host, port);
});
  