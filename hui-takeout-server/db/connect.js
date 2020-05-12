const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/takeout')
var db=mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('数据库连接成功')
})
