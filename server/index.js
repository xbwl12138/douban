var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uE = bodyParser.urlencoded({extended:false});
var crypto = require("crypto");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

var dbCollection = mongoose.model("meituans",{
    uemail:String,
    upass:String,
    uname:String,
    utoken:String
})

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
     
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
    })

app.post("/zhuce",uE,function(req,res){
    let uEmail = req.body.uEmail;
    let uPass = req.body.uPass;
    let uName = req.body.uName;
    let md5Pass=crypto.createHash('md5').update(uPass).digest('hex');

    mongoose.connect("mongodb://localhost:27017/fawang",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");
            // 创建token 用来保存用户的登录信息
            // jwt.sign(要保存的数据，私钥（一堆越乱越好的乱码）)
            var obj={
                loginok:true,
                uemail:uEmail //用户名
            }
            var mi="zkxhcksdjhfkjhweljfku1233";
            var uToken=jwt.sign(obj,mi);

            var uservalue = new dbCollection({
                uemail:uEmail,
                upass:md5Pass,
                uname:uName,
                utoken:uToken
            })
            // console.log(uservalue+"--------//////////")
            dbCollection.find({uemail:uEmail}).then((ok)=>{
                console.log(ok.length)
                if(ok.length>0){
                    console.log("邮箱重复")
                    res.send({status:200,mes:"邮箱重复",linkId:3})
                }else if(ok.length==0){
                    uservalue.save().then((ok)=>{
                        console.log("存储成功")
                        console.log(uToken)
                        res.send({status:200,mes:"注册成功",linkId:0,uName,uToken})
                    },(err)=>{
                        console.log("存储失败")
                        res.send({status:500,mes:"注册失败",linkId:1})
                    })
                }
            },(err)=>{
                res.send({status:500,mes:"查询失败，超时",linkId:4})
            })
            
        }
    })
})
app.post("/denglu",uE,function(req,res){
    mongoose.connect("mongodb://localhost:27017/fawang",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");
            // 获取数据(密码就是获取到的token)
            let uEmail = req.body.uEmail;
            let uPass = req.body.uPass;
            // 加密
            // let md5Pass=crypto.createHash('md5').update(uPass).digest('hex');
            
            dbCollection.find({uemail:uEmail,utoken:uPass}).then((ok)=>{
                console.log("查询成功");
                if(ok.length==0){
                    res.send({status:200,mes:"用户不存在",linkId:1})
                }else if(ok.length == 1){
                    res.send({status:200,mes:"用户存在",linkId:0,uEmail:uEmail})
                }
            },(err)=>{
                res.send({status:500,mes:"查询超时",linkId:3}) 
            })
        }
    })
})
app.post("/post",function(req,res){
    res.send("post");
})

app.listen(3000)