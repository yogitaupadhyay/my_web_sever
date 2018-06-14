const express=require('express');
const ejs =require('ejs');
const fs=require('fs');
var app=express();
app.use(express.static(__dirname +'/public'));
app.set('view engine','ejs');
app.use((req,res,next)=>{
  var now=new Date().toString();
  console.log("time:",now);
  console.log("method:",req.method);
  console.log("url:",req.originalUrl);
  console.log("name:",req.params.name);
    console.log("baseurl:",req.baseurl);
      console.log("id:",req.params.id);
  var log=now+req.method+req.originalUrl;
  fs.appendFile('server.log',log+"\n",(err)=>{
    if(err){
      console.log('error has occured');
    }
  });
next();
});
app.use((req,res,next)=>{
  res.render('maintainance');
});
//////////////////////////////mostbasic way/////////////
app.get('/' ,(req,res)=>{
//  res.send('hellow man');
//  res.send('<h1>hellow man</h1>');
res.render('home.ejs',{
  year:new Date().getFullYear(),
  welcomemsg:"welcome to my website",
  heading:"node js"
});
});
app.get('/about',(req,res)=>{
res.render('about.ejs',{
title:"about this page",
heading:"about page",
  year:new Date().getFullYear()
})
});
app.get('/bad',(req,res)=>{
  res.send({
    errormsg:'something unexpectesd has occured'
  });
});
app.listen(3000,()=>{
  console.log('server is upto 30000');
});
