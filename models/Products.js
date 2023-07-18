const mongoose=require('mongoose');


const product=new mongoose.Schema({
        id:{
            type:Number,
            required: true,
            unique: true
        },
        name:{
            type:String,
            required:true,

        },
        quantity:{
            type:Number,
            
        }
})