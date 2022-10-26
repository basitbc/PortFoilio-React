import { Button, Grid, Link, Typography } from '@mui/material'
import "./styles.css"
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {ReactComponent as main1} from '../../Components/Assets/main.svg'
import Photo from "../../Components/Assets/Photo.png"

const Home = () => {
  return (
    <Grid className='home-out-contr' container height="auto" width="auto">
      <Grid className='home-in-contr' container height="100vh" width="auto" sx={{margin:{md:"0 100px 0 20px"},flexDirection:{md:"row", xs:"column"} }} flexWrap="nowrap">
      <Grid className='home-in-left' container height="470px" sx={{width:{sm:"470px"}, minWidth:{md:"470px"}}}  paddingRight={"30px"}>  
      </Grid>
      <Grid className='home-in-right' fontFamily="'Poppins', sans-serif" container maxHeight="470px" sx={{maxWidth:{xs:"auto", md:"490px"}, alignItems:{xs:"center", md:"flex-start"},padding:{xs:"5px 15px", md:"flex-start"}}} flexDirection={"column"}>
    
      <Typography className='text1' item paddingBottom={"10px"} sx={{fontSize:"14px", letterSpacing:"1px",paddingBottom:"10px"}}>HI THERE! I'M</Typography>
      <Typography className='text2' paddingBottom={"10px"} sx={{fontSize:{xs:"30px", md:"40px"},fontWeight:500 , letterSpacing:"1px"}} item><span>BASIT</span> BILAL CHANNA</Typography>
      <Typography className='text3' sx={{fontSize:"16px", lineHeight:"22.4px",letterSpacing:"1px" ,fontWeight:"bold", color:"#5F6F81", textAlign:{xs:"center", md:"justify"}}} item >A <span> Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</Typography>
      <Grid item className='cont4'>
        <button variant='contained'>Resume</button>
        <Link href="https://www.linkedin.com/in/basitchanna/"><Grid className='icon-grid'><LinkedInIcon className='iconn'/></Grid></Link>
        <Link href='https://github.com/basitbc'><Grid className='icon-grid'><GitHubIcon className='iconn'/></Grid></Link>
        <Link href='https://www.instagram.com/ba_sit07/'><Grid className='icon-grid'><InstagramIcon className='iconn'/></Grid></Link>
      </Grid>
      </Grid>
      </Grid>
      <Grid position={"relative"} height={"100px"} width="120vw" sx={{display:{xs:"flex", md:"none"}}}>
      </Grid>
    </Grid>
  )
}

export default Home