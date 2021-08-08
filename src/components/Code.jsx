import React from "react";
import { Box ,makeStyles, Typography} from "@material-ui/core";



const useStyle=makeStyles({
    image:{
        width:"50%",
        height:"50%"
    },
    component:{
        margin:"50px"
    }
})
export default function Code() {
    const classes=useStyle();
  return (
      <Box className={classes.component} >
      <Typography variant="h4">Code</Typography>
    <Box style={{display:"flex"}}>
   
    </Box>
    </Box>
  );
}
