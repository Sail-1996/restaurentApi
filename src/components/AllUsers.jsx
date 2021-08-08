import { TableCell, TableHead, TableRow,Table, TableBody,makeStyles, Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import { deleteUser, getUsers } from '../Service/api'
import {Link} from "react-router-dom"

const useStyles=makeStyles({
    table:{
        width:'60%',
        margin:"50px 0 0 50px"
    },
    thead:{
        '&>*':{
            background:'#000000',
            color:'#ffffff',
            fontSize:"20px"
        }
    },
    row:{
        '&>*':{
            fontSize:'20'
        }
    }
})

export default function AllUsers() {
    const classes=useStyles()
    const [users,setUsers]=useState([])
     useEffect(()=>{
getAllUsers()
     },[])
    const getAllUsers=async()=>{
     const response= await  getUsers()
     console.log(response)
     setUsers(response.data.reverse())
    }

    const deleteUserData = async (_id) => {
        await deleteUser(_id);
        getAllUsers();
    }
    return (
       <Table className={classes.table}>
           <TableHead>
               <TableRow className={classes.thead}>
                   <TableCell>Employee ID</TableCell>
                   <TableCell>First Name</TableCell>
                   <TableCell>Middle Name</TableCell>
                   <TableCell>Last Name</TableCell>
                   <TableCell>Gender</TableCell>
                   <TableCell>Date of Birth</TableCell>
                   <TableCell>Marital Status</TableCell>
                   <TableCell>ID Proof</TableCell>
                   <TableCell>Phone No</TableCell>
                   <TableCell>Land Line</TableCell>
                   <TableCell>Email</TableCell>
                   <TableCell>Address 1</TableCell>
                   <TableCell>Address 2</TableCell>
                   <TableCell>Actions</TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {
                   users.map((user)=>(
                       <TableRow className={classes.row}>
                           <TableCell>{user.employeeID}</TableCell>
                           <TableCell>{user.firstName}</TableCell>
                           <TableCell>{user.middleName}</TableCell>
                           <TableCell>{user.lastName}</TableCell>
                           <TableCell>{user.gender}</TableCell>
                           <TableCell>{user.dateOfBirth}</TableCell>
                           <TableCell>{user.maritalStatus}</TableCell>
                           <TableCell>{user.idProof}</TableCell>
                           <TableCell>{user.phoneNo}</TableCell>
                           <TableCell>{user.landLineNo}</TableCell>
                           <TableCell>{user.email}</TableCell>
                           <TableCell>{user.permanentAddress}</TableCell>
                           <TableCell>{user.localAddress}</TableCell>
                           <TableCell>
                               <Button style={{marginBottom:"10px"}} variant="contained" color="primary" component={Link} to={`/edit/${user._id}`}>Update</Button>
                               <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user._id)}>Delete</Button>
                           </TableCell>
                           <TableCell>
                               
                           </TableCell>
                       </TableRow>
                   ))
               }
           </TableBody>
       </Table>
    )
}
