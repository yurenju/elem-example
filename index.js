var express = require('express');
var elem = require('elem');
var app = express();
var ui = elem(__dirname+'/ui');

var production = process.env.NODE_ENV == 'production';

app.use('/elements', ui.loader({production: production}));

// Remove this route and include
// <script src="/elements/loader.js">
// in a template if you don't want to use the bootloader.
app.get('*', ui.boot('/elements'));

app.listen(3000);
