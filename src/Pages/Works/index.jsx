import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import "./styles.css";
import Rk from "../../Components/Assets/RK.png";
import presspr from "../../Components/Assets/Presspr.png";
import todolist from "../../Components/Assets/todolist.png";

const projects =[{ProjectName:"Rising Kashmir",
TechnologiesUsed:"REACT, SPRINGBOOT, MATERIALUI, MYSQL",
Discription:["Completely built with hooks and functional components","Uses RESTAPI to get data from database","Used Material UI to design components"],
liveLink:"https://github.com/basitbc/Rising-Kashmir-FrontEnd",
repolink:"https://github.com/basitbc/Rising-Kashmir-FrontEnd",
imagelink:Rk
},{ProjectName:"Press Pr",
TechnologiesUsed:"Html, Css, JavaScript, Django",
Discription:["Building basic design with html css","Uses Django framework as a server side interface","Used form handling and sending queries to mail"],
liveLink:"http://www.presspr.in/",
repolink:"https://github.com/basitbc/presspr1",
imagelink:presspr
},{ProjectName:"Todo List App",
TechnologiesUsed:"REACT, JavaScript",
Discription:["Functionality like delete, edit, sort the todos","Uses local Storage to save the todo","attach the time and date for particular task"],
liveLink:"https://github.com/basitbc/todo-List-React",
repolink:"https://github.com/basitbc/todo-List-React",
imagelink:todolist
}
]


const Works = ({ischecked}) => {
  const bkcolor= ischecked ? "white": "black";
  const primarycolor= ischecked ? "#8444DF": "#8444DF";
  return (
  <Grid className="main-cont5" container sx={{padding:{xs:"70px 20px",md:" 120px 165px"},backgroundColor : ischecked? '#2C3639': 'white'}}>
      <Grid container className="inside-cont5"  >
        <Grid item className='in-text51'>
        <hr
        style={{
            height: 2,
            backgroundColor: bkcolor,
            width:"5%"
        }}
    />
          <Typography color={bkcolor} paddingLeft={"25px"} sx={{fontSize:"10px", lineHeight:"10px", letterSpacing:"1px", fontFamily:"'Poppins', sans-serif"}}>TAKE A LOOK AT MY</Typography> 
        </Grid>
        <Grid item className='in-text52'><Typography color={bkcolor} sx={{fontSize:"25.6px", letterSpacing:"2px",fontWeight:500, fontFamily:"'Poppins', sans-serif"}} >PROJECTS</Typography></Grid>
        <Grid container className='skill-in-cont5' flexDirection={"column"} sx={{padding:{md:"50px 5px"}, boxShadow:{md:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"},borderRadius:{xs:"24px"},bgcolor:ischecked?"#3F4E4F":"white"}}>
          {projects.map(project=>{
            return(
            <Grid className='skills-box5' sx={{margin:{xs:"25px 10px",md:"20px 30px"},padding:{xs:"0 0 30px 0",md:"30px 50px"}, bgcolor:ischecked?"#DDDDDD":"", flexDirection:{xs:"column", md:"row"}, }}>
          <Grid className='img-grid' sx={{height:{md:"250px"}, width:{xs:"100%",md:"350px"}}}>
            <img width={"100%"} style={{borderRadius:"12px"}} src={project.imagelink} alt='imgg'/>
          </Grid>
          <Grid className='text-grid' sx={{padding:{xs:"25px 10px 0 10px"}}}>
            <Typography sx={{fontFamily:"'Poppins', sans-serif", fontSize:"20px", letterSpacing:"1px", lineHeight:"20px", fontWeight:"600", marginBottom:"10px"}}>{project.ProjectName}</Typography>
            <Typography sx={{fontFamily:"'Poppins', sans-serif", fontSize:"16px", letterSpacing:"1px", lineHeight:"20px", fontWeight:"500", marginBottom:"20px"}}>Technologies Used: <span style={{color:"#8444DF"}}>{project.TechnologiesUsed}</span> </Typography>
            <Typography sx={{fontFamily:"'Poppins', sans-serif", fontSize:"14px", letterSpacing:"1px", lineHeight:"18px", fontWeight:"600", marginBottom:{xs:"40px",md:"70px"}}} >
              {project.Discription.map(li=>{
                return(<li style={{marginBottom:"10px"}}>{li}</li>)
              })} 
            </Typography>
            <Grid className='in-botton-grid'>
              <Link style={{textDecoration:"none"}} href={project.liveLink}>
            <Typography sx={{fontFamily:"'Poppins', sans-serif", fontSize:"18px", letterSpacing:"1px", lineHeight:"18px", fontWeight:"600",color:"#8444DF"}} >Live</Typography>
              </Link>
              <Link style={{textDecoration:"none"}} href={project.repolink}>
            <Typography sx={{fontFamily:"'Poppins', sans-serif", fontSize:"18px", letterSpacing:"1px", lineHeight:"18px", fontWeight:"600",color:"#8444DF" }} marginLeft={"30px"}>Repo</Typography>
              </Link>
            </Grid>
          </Grid>
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

export default Works