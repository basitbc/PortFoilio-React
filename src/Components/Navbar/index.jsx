import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import {
   Link
  } from "react-router-dom";
  import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
  import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
  import BadgeIcon from '@mui/icons-material/Badge';
  import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
  import CallRoundedIcon from '@mui/icons-material/CallRounded';
  import "./styles.css";
import SwitchButton from '../SwitchButton';
import { useEffect } from 'react';
  const Navbar = ({callback}) => {
  //  const [ischecked, setIsChecked] = useState(false);
  //  const callback=(checked)=>{
  //    return console.log(checked, "in Navbar");
  //   //  setIsChecked(checked);
  //  }
   

    const hide=(()=>{
        const el = document.getElementsByClassName("text-container")
        for (var i = 0; i < el.length; i++) {
          el[i].style.display = "none";
     }
    })

    const show=(()=>{
      const el = document.getElementsByClassName("text-container")
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "flex";
   }    })
   
   

  return (
   <Grid className='outer-container' sx={{display:{md:"flex", xs:"none"},backgroundColor: "#6B5B95"}}  flexDirection="column" onMouseOver={()=>{show()}} onMouseOut={()=>{hide()}}> 
    <Grid>
    <SwitchButton callback={callback}/>
    </Grid>
    <Grid container className='inner-container' flexDirection={"column"}>
   <Link to='/' style={{textDecoration:"none"}}>
   <Grid item className='item-container' marginBottom={"12px"}>
        
        <Typography color={"white"}>
        <HomeRoundedIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <Grid className='text-container' id='text-container'>
        <Typography  marginLeft="15px" className='text' fontSize={"15px"} color="white">
          HOME
        </Typography>
        </Grid>
    </Grid>
   </Link>
   <Link to='/about' style={{textDecoration:"none"}}>
   <Grid item className='item-container' marginBottom={"12px"}>
        <Typography color={"white"} >
        <PersonRoundedIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <div className='text-container' id='text-container'>
        <Typography className='text' marginLeft="15px" fontSize={"15px"} color="white">
          ABOUT
        </Typography>
        </div>
    </Grid>
   </Link>
   <Link to='/skills' style={{textDecoration:"none"}}>
   <Grid item className='item-container' marginBottom={"12px"} >
        <Typography color={"white"}  >
        <CodeRoundedIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <Grid className='text-container' id='text-container'>
        <Typography className='text' marginLeft="15px" fontSize={"15px"} color="white">
           SKILLS
        </Typography>
    </Grid>
    </Grid>
   </Link>
   <Link to='/works' style={{textDecoration:"none"}}>
   <Grid item className='item-container' marginBottom={"12px"} >
        <Typography color={"white"}  >
        <BadgeIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <Grid className='text-container' id='text-container'>
        <Typography className='text' marginLeft="15px" fontSize={"15px"} color="white">
          WORKS
        </Typography>
    </Grid>
    </Grid>
   </Link>
   <Link to='/contact' style={{textDecoration:"none"}}>
   <Grid item className='item-container' marginBottom={"12px"}>
        <Typography color={"white"}  >
        <CallRoundedIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <Grid className='text-container' id='text-container'>
        <Typography className='text' marginLeft="15px" fontSize={"15px"} color="white">
           CONTACT
        </Typography>
    </Grid>
    </Grid>
   </Link>
   </Grid>
   </Grid>
  )
}

export default Navbar