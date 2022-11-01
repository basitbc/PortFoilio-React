import { Grid, Typography } from '@mui/material';
import React from 'react';
import "./styles.css";

const About = () => {
  return (
    <Grid className="main-cont2" container height="100vh" width="100vw"  sx={{padding:{xs:"70px 20px",md:" 120px 165px"}}}>
      <Grid container className="inside-cont2">
        <Grid item className='in-text21'>
        <hr
        style={{
            height: 2,
            backgroundColor: "black",
            width:"5%"
        }}
    />
          <Typography paddingLeft={"25px"} sx={{fontSize:"10px", lineHeight:"10px", letterSpacing:"1px", fontFamily:"'Poppins', sans-serif"}}>SOME INFO</Typography> 
        </Grid>
        <Grid item className='in-text22'><Typography sx={{fontSize:"25.6px", letterSpacing:"2px",fontWeight:500, fontFamily:"'Poppins', sans-serif"}} >ABOUT ME</Typography></Grid>
        <Grid container className='skill-in-cont2' sx={{padding:"18px 48px"}}>
          <Typography className='text-in-disc' sx={{fontSize:"20px", fontWeight:"500", fontFamily:"'Poppins', sans-serif"}}>I'm a front-end web developer with a background in computer systems and network infrastructure. My 8 years of IT experience has given me a strong foundation for web development and building complex solutions. Recently, I graduated from the Juno College Immersive Web Development Bootcamp. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</Typography>
    
        </Grid>
    </Grid>
    <Grid position={"relative"} height={"100px"} width="120vw" sx={{display:{xs:"flex", md:"none"}}}>
      </Grid>
  </Grid>
  )
}

export default About