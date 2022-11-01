import {  FormControl, Grid, TextField, Typography } from '@mui/material';
import "./styles.css";
import React, { useState } from 'react';
import send, { sendForm } from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });


const handleSubmit = (e) => {
  sendForm(
    'service_s8wxwqg',
    'template_vsb9udf',
    toSend,
    'BcGNB127J7CGrvLUa'
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
};

  return (
    <Grid className="main-cont3" container height="100vh" width="100vw"  sx={{padding:{xs:"70px 20px",md:" 120px 165px"}}}>
      <Grid container className="inside-cont3">
        <Grid item className='in-text31'>
        <hr
        style={{
            height: 2,
            backgroundColor: "black",
            width:"5%"
        }}
    />
          <Typography paddingLeft={"25px"} sx={{fontSize:"10px", lineHeight:"10px", letterSpacing:"1px", fontFamily:"'Poppins', sans-serif"}}>SAY HELLO</Typography> 
        </Grid>
        <Grid item className='in-text32'><Typography sx={{fontSize:"25.6px", letterSpacing:"2px",fontWeight:500, fontFamily:"'Poppins', sans-serif"}} >CONTACT</Typography></Grid>
        <Grid container className='skill-in-cont3' sx={{padding:"18px 48px"}}>
         <Typography color={"#8444DF"} fontSize="20px" fontWeight={"600"} marginBottom="30px" textTransform={"uppercase"}>Get in Touch</Typography>
         <Grid container rowGap={2}  className='form1' style={{justifyContent:"space-between"}}>
      
            <Grid xs={12} md={5.5}>
            <TextField
            fullWidth
          required
          id="outlined-required"
          onChange={(e)=>{setName(e.target.value)}}
          label="Name"
          placeholder='Your Name' 
        />
            </Grid>
            <Grid xs={12} md={5.5}>
            <TextField
            fullWidth
          required
          onChange={(e)=>{setEmail(e.target.value)}}
          id="outlined-required"
          label="Email"
          placeholder='Your Email'
        />
        
            </Grid>
            <Grid xs={12}>
            <TextField
            fullWidth
          required
          onChange={(e)=>{setSubject(e.target.value)}}
          id="outlined-required"
          label="Subject"
          placeholder='Subject'
         
        />
            </Grid>

            <Grid xs={12}>
            <TextField
            fullWidth
          id="outlined-multiline-static"
          onChange={(e)=>{setMessage(e.target.value)}}
          required
          label="Message"
          multiline
          rows={4}
          placeholder="Write Your Message..."
        />
            </Grid>

         </Grid>
         <Grid>
         <button onClick={()=>{handleSubmit()}} className='button'>Send</button>
         </Grid>
        </Grid>
    </Grid>
    <Grid position={"relative"} height={"100px"} width="120vw" sx={{display:{xs:"flex", md:"none"}}}>
      </Grid>
  </Grid>
  )
}

export default Contact