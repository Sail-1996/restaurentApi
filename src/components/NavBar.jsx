import { AppBar, Toolbar,makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

const useStyle=makeStyles({
    header:{
        background:'#111111'
    },
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        marginRight:'20px',
        textUnderlineOffset:"none"
       
    }
})



export default function NavBar() {
    const classes=useStyle()
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact >Code</NavLink>
                <NavLink className={classes.tabs} to="/all" exact >All User</NavLink>
                <NavLink className={classes.tabs} to="/add" exact >Add User</NavLink>
            </Toolbar>
        </AppBar>
    ) 
}
