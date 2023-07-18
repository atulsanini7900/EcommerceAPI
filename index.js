//require express

const express=require('express')
// require mongoose
const mongoose=require('mongoose')

// mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/product", {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Database connection Successfully");
}).catch((err)=>{
    console.log(err);
})