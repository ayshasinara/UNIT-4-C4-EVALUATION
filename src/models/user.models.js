const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    
firstName:{type: String, required:true},
lastName:{type:String,required:false},
email:{typ:String, required:true},
password:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
}
)
const todoSchema =new mongoose.Schema({ 
    title:{type:String, required:true},
     user_id:{type:Schema.Types.ObjectId, ref: 'User' }
 },{
     timestamps:true,
     versionKey:false
 })
const User=mongoose.model("user",userSchema)
const Todo=mongoose.model("Todo",todoSchema)
 module.exports={User,Todo}
