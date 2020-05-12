const express=require('express')
const path=require('path')
const bodyParse=require('body-parser')
const baseRoute=require('./router/index.js')
const cors=require('cors')
const session=require('express-session')
const cookieParser=require('cookie-parser')
const db=require('./db/connect')

var app=express()

app.use(cookieParser('session'));
app.use(session({
    secret: '1fdsfdsfdsfewefdscfewfwdsds',
    cookie: {maxAge:1000*60*60*24},
    resave: false,
    saveUninitialized: true
}))

app.use(cors())
app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())

app.use(express.static(path.join(__dirname,'./public')))

app.use('/',baseRoute)


app.listen('3000',()=>{
    console.log('server is running...');
})
