const express=require('express')
const path=require('path')
const bodyparser=require('body-parser')
const session=require('express-session')
const{v4:uuidv4}=require('uuid')
const app=express()

const router=require('./router')

app.use(express.urlencoded({extended:true}))

const port=process.env.PORT||3000

app.set('view engine', 'ejs')
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assests',express.static(path.join(__dirname,'public/assests')))
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

app.use('/route',router)
app.get('/', (req,res) => {
    res.render('base',{title:"Login system"})
})
app.listen(port, ()=>{
    console.log('listening to port 3000 at http://localhost:3000')
})