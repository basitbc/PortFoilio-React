import { Grid, Typography } from '@mui/material';
import React from 'react';
import "./styles.css";

const About = ({ischecked}) => {
  const bkcolor= ischecked ? "white": "black";


  return (
    <Grid className="main-cont2" container minHeight={"100vh"} minWidth="100vw" sx={{padding:{xs:"70px 20px",md:" 120px 165px"}, backgroundColor : ischecked? '#2C3639': 'white'}}>
      <Grid container className="inside-cont2">
        <Grid item color={bkcolor} className='in-text21'>
        <hr
        style={{
            height: 2,
            backgroundColor: "black",
            width:"5%"
        }}
    />
          <Typography color={bkcolor} paddingLeft={"25px"} sx={{fontSize:"10px", lineHeight:"10px", letterSpacing:"1px", fontFamily:"'Poppins', sans-serif"}}>SOME INFO</Typography> 
        </Grid>
        <Grid item className='in-text22'><Typography color={bkcolor} sx={{fontSize:"25.6px", letterSpacing:"2px",fontWeight:500, fontFamily:"'Poppins', sans-serif"}} >ABOUT ME</Typography></Grid>
        <Grid container className='skill-in-cont2' sx={{padding:"18px 48px", bgcolor:ischecked?"#3F4E4F":"white"}}>
          <Typography color={bkcolor}  className='text-in-disc' sx={{fontSize:"20px", fontWeight:"500", fontFamily:"'Poppins', sans-serif"}}>I'm a <span style={{color:"#8444DF"}}>web developer</span>  passionate about programming and solving problems through code.I am currently in final year of my undergraduate. Fueled by high energy levels and boundless enthusiasm, I prefer to keep learning, continue challenging myself, and do interesting things that matter.  I love creating things on web where I’m able to actually create enjoyable interactions and experiences for everyone.I am excited to work alongside other amazing programmers and learn so much more.</Typography>
    
        </Grid>
    </Grid>
    <Grid position={"relative"} height={"100px"} width="120vw" sx={{display:{xs:"flex", md:"none"}}}>
      </Grid>
  </Grid>
  )
}

export default About