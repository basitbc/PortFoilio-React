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
import './styles.css'
import SwitchButton from '../SwitchButton';
const Footer = ({callback, ischecked}) => {
    const [isActive, setIsActive] = useState(0);

  return (
  <>
  <Grid sx={{display:{md:"none", width:"100vw", xs:"flex",backgroundColor:ischecked?"transparent":"transparent"}, justifyContent:"flex-end", position:"fixed", zIndex:999}} >
  <SwitchButton callback={callback}/>
  </Grid>
    <Grid className='outer-container1' sx={{display:{md:"none", xs:"flex"}, backgroundColor:ischecked?"#6B5B95":"#8444DF"}} >
    <Grid container className='inner-container1' flexDirection={"row"}>
   <Link to='/' style={{textDecoration:"none"}}>
   <Grid item className='item-container1' onClick={()=>{setIsActive("1")}} backgroundColor= {isActive === "1"  ? 'salmon' :ischecked?"#7F8C8D":"#9252ed"}>
        <Typography color={"white"}>
        <HomeRoundedIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <Grid className='text-container1' id='text-container1'>
        <Typography  marginLeft="15px" className='text1' fontSize={"15px"}>
          HOME
        </Typography>
        </Grid>
    </Grid>
   </Link>
   <Link to='/about' style={{textDecoration:"none"}}>
   <Grid item className='item-container1' onClick={()=>{setIsActive("2")}} backgroundColor= {isActive === "2" ? 'salmon' :ischecked?"#7F8C8D":"#9252ed"}  >
        <Typography color={"white"} >
        <PersonRoundedIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <div className='text-container1' id='text-container1'>
        <Typography className='text1' marginLeft="15px" fontSize={"15px"} color="white">
          ABOUT
        </Typography>
        </div>
    </Grid>
   </Link>
   <Link to='/skills' style={{textDecoration:"none"}}>
   <Grid item className='item-container1' onClick={()=>{setIsActive("3")}} backgroundColor= {isActive === "3"  ? 'salmon' :ischecked?"#7F8C8D":"#9252ed"}  >
        <Typography color={"white"}  >
        <CodeRoundedIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <Grid className='text-container1' id='text-container1'>
        <Typography className='text1' marginLeft="15px" fontSize={"15px"} color="white">
           SKILLS
        </Typography>
    </Grid>
    </Grid>
   </Link>
   <Link to='/works' style={{textDecoration:"none"}}>
   <Grid item className='item-container1' onClick={()=>{setIsActive("4")}} backgroundColor= {isActive === "4" ? 'salmon' :ischecked?"#7F8C8D":"#9252ed"}  >
        <Typography color={"white"}  >
        <BadgeIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <Grid className='text-container1' id='text-container1'>
        <Typography className='text1' marginLeft="15px" fontSize={"15px"} color="white">
          WORKS
        </Typography>
    </Grid>
    </Grid>
   </Link>
   <Link to='/contact' style={{textDecoration:"none"}}>
   <Grid item className='item-container1' onClick={()=>{setIsActive("5")}} backgroundColor= {isActive === "5" ? 'salmon':ischecked?"#7F8C8D":"#9252ed"}  >
        <Typography color={"white"}  >
        <CallRoundedIcon sx={{fontSize:"30px"}}/>
        </Typography> 
        <Grid className='text-container1' id='text-container1'>
        <Typography className='text1' marginLeft="15px" fontSize={"15px"} color="white">
           CONTACT
        </Typography>
    </Grid>
    </Grid>
   </Link>
   </Grid>
   </Grid>
   </>
  )
}

export default Footer