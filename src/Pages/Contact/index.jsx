import {  Dialog, Grid, Slide, TextField, Typography } from '@mui/material';
import "./styles.css";
import React, { useState } from 'react';
import  { sendForm } from 'emailjs-com';
import { useRef } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Contact = ({ischecked}) => {
  const [open, setopen] = useState(false);
const bkcolor= ischecked ? "white": "black";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const handleOpen=(()=>{
  setopen(true);
})

const handleClose=(()=>{
setopen(false);
})


const sendData = (e) => {
  sendForm(
    'service_s8wxwqg',
    'template_vsb9udf',
    form.current,
    'BcGNB127J7CGrvLUa'
  ).then((result) => {
    handleOpen();
    console.log(result.text);
}, (error) => {
    console.log(error.text);
}).finally(()=>{
  document.getElementById("myForm").reset();
})
};
const form = useRef();

  return (
    <Grid className="main-cont3" container minHeight={"100vh"} sx={{padding:{xs:"70px 20px",md:" 120px 165px"}, backgroundColor : ischecked? '#2C3639': 'white'}}>
      <Grid container className="inside-cont3">
        <Grid item className='in-text31'>
        <hr
        style={{
            height: 2,
            backgroundColor: bkcolor,
            width:"5%"
        }}
    />
          <Typography color={bkcolor} paddingLeft={"25px"} sx={{fontSize:"10px", lineHeight:"10px", letterSpacing:"1px", fontFamily:"'Poppins', sans-serif"}}>SAY HELLO</Typography> 
        </Grid>
        <Grid item className='in-text32'><Typography color={bkcolor} sx={{fontSize:"25.6px", letterSpacing:"2px",fontWeight:500, fontFamily:"'Poppins', sans-serif"}} >CONTACT</Typography></Grid>
        <form ref={form} id="myForm">
        <Grid container className='skill-in-cont3' sx={{padding:"18px 48px", bgcolor:ischecked?"#DDDDDD":"", marginBottom:"10px"}}>
         <Typography color={"#8444DF"} fontSize="20px" fontWeight={"600"} marginBottom="30px" textTransform={"uppercase"}>Get in Touch</Typography>
         <Grid container rowGap={2}  className='form1' sx={{justifyContent:"space-between"}}>
            <Grid item xs={12} md={5.5}>
            <TextField
            name="name"
            fullWidth
          required
          id="outlined-required"
          // onChange={(e)=>{setName(e.target.value)}}
          label="Name"
          placeholder='Your Name' 
        />
            </Grid>
            <Grid item xs={12} md={5.5}>
            <TextField
            fullWidth
            name="email"
          required
          // onChange={(e)=>{setEmail(e.target.value)}}
          id="outlined-required"
          label="Email"
          placeholder='Your Email'
        />
        
            </Grid>
            <Grid item xs={12}>
            <TextField
            fullWidth
          required
          // onChange={(e)=>{setSubject(e.target.value)}}
          id="outlined-required"
          label="Subject"
          name='subject'
          placeholder='Subject'
         
        />
            </Grid>

            <Grid item xs={12}>
            <TextField
            fullWidth
          id="outlined-multiline-static"
          // onChange={(e)=>{setMessage(e.target.value)}}
          required
          name="message"
          label="Message"
          multiline
          rows={4}
          placeholder="Write Your Message..."
        />
            </Grid>

         </Grid>
         <Grid>
         <button onClick={()=>{sendData()}} type="button" value={"send"} className='button'>Submit</button>
         {/* <button  className='button'>Submit</button> */}
         </Grid>
        </Grid>
         </form>
    </Grid>
    <Grid position={"relative"} height={"100px"} width="120vw" sx={{display:{xs:"flex", md:"none"}, backgroundColor : ischecked? '#2C3639': 'white'}}>
      </Grid>
      <Dialog
      open={open}  
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: {
          backgroundColor: 'white',
          boxShadow: 'none',
        }
      }}
      >
        <Grid container className="SuccessDialog" display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" padding={"40px"} >
        <CheckCircleIcon color='success' fontSize='large'/>
          <Typography fontFamily= "'Lato', sans-serif" fontWeight={"300"} fontSize="20px">
            Message send Successfully
          </Typography>
        </Grid>
      </Dialog>
      <Grid position={"relative"} height={"100px"} width="120vw" sx={{display:{xs:"flex", md:"none"}}}>
      </Grid>
  </Grid>
  )
}

export default Contact