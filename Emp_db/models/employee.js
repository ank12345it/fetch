const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    address:{type:String},
    age:{type:String},
    domain:{type:String}
    
})

module.exports=mongoose.model('Employee',employeeSchema)