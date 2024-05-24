const express = require('express');
const employeeModel = require('./models')
const cors = require("cors")


//initialize
const app = new express()


//
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())


//API
//(Add )
app.post('/add',async(req,res)=>{
     var result = await new employeeModel(req.body) 
     result.save() 
    res.send("Data Added");
})

//(View)
app.get('/view',async(req,res)=>{
    const data = await employeeModel.find()
    res.json(data)
    console.log(data);
})

//(delete)
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("Deleted")

})
//(update)
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data Updated")

})



//port set cheyyanam
app.listen(3007,()=>{
    console.log("PORT 3007 is up and running");
})