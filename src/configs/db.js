const mongoose=require("mongoose");
const connect= ()=>{
    return mongoose.connect("mongodb+srv://ayshasinara:123.4@cluster0.kjqbq.mongodb.net/web15-todo?retryWrites=true&w=majority")
}
module.exports=connect