import { Button, Grid, Link, Typography } from '@mui/material'
import "./styles.css"
import React, { useEffect, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {ReactComponent as main1} from '../../Components/Assets/main.svg'
import Photo from "../../Components/Assets/Photo.png"

const Home = ({ischecked}) => {
const bkcolor= ischecked ? "white": "black";
const primarycolor= ischecked ? "#8444DF": "#8444DF";
  return (
    <Grid className='home-out-contr' container height="auto" width="auto" sx={{backgroundColor : ischecked? '#2C3639': 'white'}}>
      <Grid className='home-in-contr' container height="100vh" width="auto" sx={{margin:{md:"0 100px 0 20px"},flexDirection:{md:"row", xs:"column"} }} flexWrap="nowrap">
      <Grid className='home-in-left' container  sx={{width:{sm:"470px"},height:{xs:"370px", md:"470px"}, minWidth:{md:"470px"}, padding:{xs:"0 0 0 0",md:"0 30px 0 0"}}}  paddingRight={"30px"}>  
      </Grid>
      <Grid className='home-in-right' fontFamily="'Poppins', sans-serif" container maxHeight="470px" sx={{maxWidth:{xs:"auto", md:"490px"}, alignItems:{xs:"center", md:"flex-start"},padding:{xs:"0px 20px", md:"flex-start"}}} flexDirection={"column"}>
    
      <Typography className='text1' item sx={{fontSize:"14px", letterSpacing:"1px",padding:{xs:"0 0 10px 0",md:"0 0 10px 20px"}, color:bkcolor}}>HI THERE! I'M</Typography>
      <Typography className='text2' sx={{fontSize:{xs:"30px",md:"34px", lg:"37px"},fontWeight:500 , letterSpacing:"1px",padding:{xs:"0 0 10px 0",md:"0 0 10px 20px"}, color:bkcolor}} item><span style={{color:primarycolor}}>BASIT</span> BILAL CHANNA</Typography>
      <Typography className='text3' sx={{fontSize:"16px", lineHeight:"22.4px",letterSpacing:"1px" ,fontWeight:"bold", color:"#5F6F81", textAlign:{xs:"center", md:"justify"}, padding:{xs:"0 0 20px 0",md:"0 0 30px 20px"}, color:bkcolor}} item >A <span style={{color:primarycolor}}>Web Developer</span> passionate about creating interactive applications and experiences on the web.</Typography>
      <Grid item className='cont4' sx={{padding:{xs:"0 0 10px 0",md:"0 0 10px 20px"}}}>
       <Link href='https://drive.google.com/file/d/13CVaCfRa5RD_SQs-__mXZXmYRd5-1UfA/view?usp=sharing'>
        <button style={{color:ischecked?"black":"white"}}>Resume</button>
       </Link>
        <Link href="https://www.linkedin.com/in/basitchanna/"><Grid className='icon-grid' sx={{bgcolor:ischecked?"#8444DF":""}}><LinkedInIcon className='iconn' sx={{color:ischecked?"black":"#8444DF"}} /></Grid></Link>
        <Link href='https://github.com/basitbc'><Grid className='icon-grid' sx={{bgcolor:ischecked?"#8444DF":""}}><GitHubIcon className='iconn' sx={{color:ischecked?"black":"#8444DF"}}/></Grid></Link>
        <Link href='https://www.instagram.com/ba_sit07/'><Grid className='icon-grid' sx={{bgcolor:ischecked?"#8444DF":""}}><InstagramIcon className='iconn' sx={{color:ischecked?"black":"#8444DF"}}/></Grid></Link>
      </Grid>
      </Grid>
      </Grid>
      <Grid position={"relative"} height={"100px"} width="120vw" sx={{display:{xs:"flex", md:"none"}}}>
      </Grid>
    </Grid>
  )
}

export default Home