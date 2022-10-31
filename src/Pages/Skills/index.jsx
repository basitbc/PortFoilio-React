import { Grid, Typography } from '@mui/material';
import React from 'react';
import "./styles.css";
import html from "../../Components/Assets/html.png"
import css from "../../Components/Assets/css-3.png"
import js from "../../Components/Assets/js.png"
import react from "../../Components/Assets/physics.png"
import git from "../../Components/Assets/git.png"
import java from "../../Components/Assets/java.png"
import mui from "../../Components/Assets/mui.png"
import spring from "../../Components/Assets/spring.png"
import mysql from "../../Components/Assets/mysql.png"
import node from "../../Components/Assets/nodejs.png"
import python from "../../Components/Assets/python.png"
import jQuery from "../../Components/Assets/jquery.png"
import vscode from "../../Components/Assets/vscode.png"
import algoritms from "../../Components/Assets/algo.png"

const skills =[{skillName:"HTML",
image:html},{skillName:"CSS",
image:css},{skillName:"JAVASCRIPT",
image:js},{skillName:"REACT",
image:react},{skillName:"GIT",
image:git},{skillName:"JAVA",
image:java},{skillName:"MATERIALUI",
image:mui},{skillName:"SPRING",
image:spring},{skillName:"MYSQL",
image:mysql},{skillName:"NODE",
image:node},{skillName:"PYTHON",
image:python},{skillName:"JQUERY",
image:jQuery},{skillName:"VSCODE",
image:vscode},{skillName:"ALGORITHMS",
image:algoritms
}]


const Skills = () => {
  return (
  <Grid className="main-cont" container height="100vh" width="100vw"  sx={{padding:{xs:"70px 20px",md:" 120px 165px"}}}>
      <Grid container className="inside-cont">
        <Grid item className='in-text1'>
        <hr
        style={{
            height: 2,
            backgroundColor: "black",
            width:"5%"
        }}
    />
          <Typography paddingLeft={"25px"} sx={{fontSize:"10px", lineHeight:"10px", letterSpacing:"1px", fontFamily:"'Poppins', sans-serif"}}>CHECK OUT MY</Typography> 
        </Grid>
        <Grid item className='in-text2'><Typography sx={{fontSize:"25.6px", letterSpacing:"2px",fontWeight:500, fontFamily:"'Poppins', sans-serif"}} >SKILLS</Typography></Grid>
        <Grid container className='skill-in-cont'>
          {skills.map(skill=>{
            return(
            <Grid className='skills-box' sx={{margin:{xs:"15px 5px",md:"20px 30px"}}} flexDirection={"column"}>
            <img src={skill.image}  alt="logo"/>
            <Typography fontSize={"11.2px"} fontWeight="bold" className='text-logo-name'>{skill.skillName}</Typography>
          </Grid>
          )
          })}
        </Grid>
    </Grid>
    <Grid position={"relative"} height={"100px"} width="120vw" sx={{display:{xs:"flex", md:"none"}}}>
      </Grid>
  </Grid>
  )
}

export default Skills