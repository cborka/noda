//var ip = require('ip');

module.exports = function(req, res, next) {
  console.log('mylogger2=====================================================');
  //console.log(JSON.stringify(req, null, 2));
  console.log(req.ip);
  console.log(req.clientIp);

  next();
};


// var mylogger = function(req, res, next) {
//   console.log('mylogger');
//   next();
// };

// module.exports = mylogger;