 const mongoose=require("mongoose")
 
//mongoose.connect(" mongodb://localhost:27017/loginpage")
 mongoose.connect("mongodb+srv://pranitikubal9:practice_admin@cluster2.gbeqn.mongodb.net/demo")
.then(()=>{
    console.log("mongodb connected");

 })
 .catch(()=>{
    console.log("failed to connect");
 })

 const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    }
 })

 const collection=new mongoose.model("Collection1",LogInSchema) 

 module.exports=collection 
   