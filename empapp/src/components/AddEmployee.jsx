import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddEmployee = (props) => {
  var navigate = useNavigate()
  var[inputs,setInputs]=useState(props.data);
   const inputHandler = (e)=>{
   const { name, value } = e.target
   setInputs((prevData) => ({ ...prevData, [name]: value}) ) 
   console.log(inputs);
   }



   const addHandler = ()=>{
    console.log("clicked");
    if(props.method==="post"){
      axios.post("http://localhost:3007/add",inputs)
      .then((res)=>{
        console.log(res.data)
        alert(res.data)
        navigate('/');
      });
    }

    if(props.method==="put"){
      axios.put("http://localhost:3007/edit/"+inputs._id,inputs)
      alert("Data Updated")
      navigate('/add');
      setTimeout(()=>{
        navigate('/');
      },10);
    } 
   }
  return (
    <div>
      <br /><br /><br /><br />
      <Typography variant='h3'>Add Employee Form</Typography><br /><br />
      <TextField 
           label="Employee Name" 
           size="medium" 
           name='ename'                   //Name
           value={inputs.ename}
           onChange={inputHandler}>
      </TextField><br /><br />

      <TextField 
           label="Employee Age"
           size="medium"
           name='eage'                    //=>Age
           value={inputs.eage} 
           onChange={inputHandler}>
      </TextField><br /><br />


      <TextField 
           label="Employee Position" 
           size="medium" 
           name='eposition'               //=>Position
           value={inputs.eposition}       
           onChange={inputHandler}>
      </TextField><br /><br />

      <TextField 
           label="Employee Salary" 
           size="medium" name='esalary' 
           value={inputs.esalary}         //=>Salary
           onChange={inputHandler}>
      </TextField><br /><br />

      <Button variant='outlined' onClick={addHandler}>Submit</Button>
      
    </div>
  )
}









export default AddEmployee
