var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//sequelize js 
//setting the connection to the database as a function
const sequelize = require('./Sequelize Files/sequelize')
const User = require('./Sequelize Files/sequelizeModel')

//require('./Sequelize Files/sequelizeModel')()
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



// // Note: using `force: true` will drop the table if it already exists
// User.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return User.create({
//     id:1,
//     firstName: 'Johns',
//     lastName: 'Hancock',
//     gender: "Male"
//   });
// });




const firstName = "Saad"

// Find all users
User.findOne({where: {firstName : firstName}}).then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});








// User.create({ id: 2 , firstName: "Saad ", lastName: "Sohail", gender: "Male" }).then(jane => {
//   console.log("Jane's auto-generated ID:", jane.id);
// });




























// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log("Listens at port 3000"))
