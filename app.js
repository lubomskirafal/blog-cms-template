if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};
const createError = require('http-errors');
const cookieSession = require('cookie-session');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(config.mongoDB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'connection error'));
DB.once('open', ()=> {
  console.log('DB conected');
});

const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');
const contactRouter = require('./routes/contact');
const loginRouter = require('./routes/login');
const adminRouter = require('./routes/admin');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
  name: config.nameSession,
  keys: config.keySession,
  maxAge: config.maxAgeSession,
  resave: false
}));

app.use((req, res, next)=>{
  res.locals.path = req.path;
  next();
});

app.use('/', indexRouter);
app.use('/articles', articlesRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);


// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
