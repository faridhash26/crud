var express = require('express');
var app = express();

require('./midlewares')(app);

require('./routes')(app);
require('./services/errorhandlers')(app);



module.exports = app;
