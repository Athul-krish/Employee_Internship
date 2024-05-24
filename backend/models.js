const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://athulkrishnapanamakkal:1234@cluster0.oll34kg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB is connected");
})

.catch(()=>{})



let mongoSchema=mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})


var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel;