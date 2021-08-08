import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import {addUser} from "../Service/api"
import { useHistory } from "react-router";
const useStyles = makeStyles({
  container: {
    width: "50%",

    margin: "0% 0 0 25%",
    marginBottom: "20px",
    "&>*": {
      marginTop: "20px",
    },
  },
});
const initialValues = {
  employeeID: "",
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "male",
  dateOfBirth: "15/02/1996",
  maritalStatus: "unmarried",
  idProof: "",
  phoneNo: "",
  landLineNo: "",
  email: "",
  permanentAddress: "",
  localAddress: "",
};
export default function AddUser() {
  const [user, setUser] = useState(initialValues);
 
  const {
    employeeID,
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
    maritalStatus,
    idProof,
    phoneNo,
    landLineNo,
    email,
    permanentAddress,
    localAddress,
  } = user;
  const classes = useStyles();
  const history=useHistory();
  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const addUserDetails=async()=>{
           await addUser(user);
           history.push('./all')
  }
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel>Emoloyee ID</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="employeeID"
              value={employeeID}
            />
          </FormControl>
          <FormControl>
            <InputLabel>First Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="firstName"
              value={firstName}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Middle Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="middleName"
              value={middleName}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Last Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="lastName"
              value={lastName}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel>Gender</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="gender"
              value={gender}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Date Of Birth</InputLabel>
            <Input
              type="date"
              onChange={(e) => onValueChange(e)}
              name="dateOfBirth"
              value={dateOfBirth}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Marital maritalStatus</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="maritalStatus"
              value={maritalStatus}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Id Proof</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="idProof"
              value={idProof}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel>Phone No </InputLabel>
            <Input
              type="number"
              onChange={(e) => onValueChange(e)}
              name="phoneNo"
              value={phoneNo}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Land Line</InputLabel>
            <Input
              type="number"
              onChange={(e) => onValueChange(e)}
              name="landLineNo"
              value={landLineNo}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Permanent Address</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="permanentAddress"
              value={permanentAddress}
            />
          </FormControl>
        </Grid>
        <FormControl>
          <InputLabel>Local Address</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="localAddress"
            value={localAddress}
          />
        </FormControl>
      </Grid>
      <Button type="submit" variant="contained" color="primary" onClick={()=>addUserDetails()}>
        Add User
      </Button>
    </FormGroup>
  );
}
