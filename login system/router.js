var express=require('express')
var router=express.Router()

const credential={
    email:"admin@gmail.com",
    password:"1234",
};


router.post('/logi',(req,res)=>{
  if(req.body.email==credential.email && req.body.password==credential.password){
      console.log(req.body)
      req.session.user=req.body.email;
      
      res.redirect('/route/dashboard')
  }
  else{
      res.end('invalid username')
  }
});
router.get('/dashboard',(req,res)=>{
 if(req.session.user){
     res.render('dashboard',{user:req.session.user})
 }else{
     res.send('unauthorized user')
 }
})

router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err) { res.send('error')}
        else{
            res.render('base',{title:'Express', logout:'LogOut successfull...!'})
        }
    })
})

module.exports=router
