var express = require('express'),
    app = express();

app.use(express.static('D:/WEB_DEV/training/AJAX/flickr'));
app.listen(8080);
console.log('server running... \n port : 8080 \n IP : 192.168.0.103')
