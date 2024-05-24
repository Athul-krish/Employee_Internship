import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddEmployee from './AddEmployee'

const ViewEmployee = () => {
  var[users,SetUsers]=useState([])
  var[Update,setUpdate]=useState(false)
  var[singleValue,setsingleValue]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3007/view")
    .then((res)=>{
      console.log(res.data);
      SetUsers(res.data);

    })
  },[])

const updateValues = (val)=>{
  console.log("Updated");
  setUpdate(true);
  setsingleValue(val)
}


  const deleteValue = (id)=>{
    console.log(id);
    axios.delete("http://localhost:3007/remove/"+id)
    .then((res)=>{
      alert(res.data)
      window.location.reload(true)
    })
    .catch((err)=>{console.log(err)})
  }

  
   // return (
  //   <div>
var finalJSX=<TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee_Name</TableCell>
            <TableCell>Employee_Age</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Salary </TableCell>
          </TableRow>
         </TableHead>
         <TableBody>
          {users.map((val,i)=>{
            return(
              <TableRow>
                <TableCell>{val.ename}</TableCell>
                <TableCell>{val.eage}</TableCell>
                <TableCell>{val.eposition}</TableCell>
                <TableCell>{val.esalary}</TableCell>
                <TableCell><Button color='primary' variant='contained' onClick={()=>updateValues(val)}>Update</Button></TableCell>
                <TableCell><Button color='error' onClick={()=>deleteValue(val._id)}>Delete</Button></TableCell>
              </TableRow>
            )
          })}
         </TableBody>
         </Table>
         </TableContainer> 
    
  


if(Update)finalJSX = <AddEmployee data={singleValue} method = 'put'/>
return finalJSX
 }
export default ViewEmployee
