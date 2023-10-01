const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://vibhasheladiya3936:azHqS6BCvCKsIqMV@cluster0.gxfoxkv.mongodb.net/blog?retryWrites=true&w=majority');
const express =require('express');
const app=express();
app.get('/',function(req,res){
    console.log("hello");
})
app.listen(9000,function(){
    console.log("server is running");
});