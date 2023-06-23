var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var fs = require('fs')
var logger = require('morgan');
var myLogger = require('./lib/logger');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(myLogger.log1);

//let sayHi = myLogger.log2.bind(myLogger);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' }) 
 
// setup the logger
//app.use(morgan('combined', { stream: accessLogStream }))

//app.use(logger('combined'));
app.use(logger('dev'));
app.use(logger(':date[iso] :remote-addr :remote-user :method :url :status :response-time ms - :res[content-length] =', { stream: accessLogStream }));
// app.use(logger(':date[iso] :remote-addr :remote-user :method :url :status :response-time ms - :res[content-length] = :referrer', { stream: accessLogStream }));

//console.log(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(myLogger.log3);


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(myLogger.log3);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
