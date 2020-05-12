var express = require('express')
var router = express.Router();
var sms=require('../utils/sms')
var svgCaptcha=require('svg-captcha')
const UsersModel=require('../db/model/userModel')

router.get('/index_category', (req, res) => {
    const data = require('../data/index_category.json')
    res.send({ err: 0, data })
})

router.get('/index_shops',(req,res)=>{
    const data = require('../data/shops.json')
    res.send({err:0, data})
})

router.post('/sendcode',(req,res)=>{
    const {phone}=req.body
    let code=sms.sendCode(phone)
    res.send({err:0,msg:code})
})

router.get('/captcha',(req,res)=>{
    let cap=svgCaptcha.create({
        ignoreChars: '0o1l',
        noise:2,
        color:true
    });
    req.session.captcha=cap.text.toLowerCase();
    res.type('svg');
    console.log('captcha:',req.session)
    res.send(cap.data)
})

//密码登录
router.post('/login_pwd',(req,res)=>{
    const {name,pwd,captcha}=req.body;
    console.log('aaaa:',req.session)
    // res.send({name,pwd,captcha})
    
    if(captcha!==req.session.captcha){
        return res.send({err:1,msg:'验证码不正确'})
    }
    delete req.session.captcha
    UsersModel.findOne({name},(err,user)=>{
        if(user){
            if(user.pwd !== pwd){
                res.send({err:1,msg:'用户名或密码不正确'})
            }else{
                req.session.userid=user._id
                res.send({err:0,msg:{_id:user._id,name:user.name}})
            }
        }else{
            UsersModel.insertMany({name,pwd})
            .then((user)=>{
                req.session.userid=user._id;
                res.send({err:0,msg:{_id:user._id,name:user.name}})
            })
        }
    })
    
})

module.exports = router;