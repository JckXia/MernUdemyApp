//User logins to google here
const passport=require('passport');

module.exports=(app)=>{

  app.get('/',(req,res)=>{
    res.send({message:Welcome});
  })
  //Exporting functions from tis file
app.get('/auth/google',passport.authenticate('google',{
  scope:['profile','email']
}));

//User vists this route. Strategy sees that it has the code in the url
app.get('/auth/google/callback',passport.authenticate('google'));

app.get('/api/current_user',(req,res)=>{
    res.send(req.user);
});

app.get('/api/logout',(req,res)=>{
  //Takes the cookie which contains user id, and kills it
    req.logout();
    res.send(req.user);
});

};
