const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys=require('...../config/keys');
const app=express();

//App.use hooks up the middleware
//Modify incoming request before they are sent to the backend route handlers
app.use(
  cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());



require('./models/User');
require('./services/passport'); //file inside passpVAort is executed

var MongoDBPort=process.env.MONGODB_URI || "mongodb://localhost:27017/UdemyMERNApp";
mongoose.connect(MongoDBPort);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
  console.log('Listening on port');
});
