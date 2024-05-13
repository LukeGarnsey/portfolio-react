const express = require('express');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env') });
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3002;

const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:587,
  secure:false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
transporter.verify(function(error, success){
  if(error)
    console.log(error);
  else
    console.log("transporter is ready");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/send-email', async(req, res)=>{
  try{
    const mailOptions = {
      to: process.env.EMAIL,
      subject: `${req.body.name} sent message from ${req.body.email}`,
      text: req.body.message
    };
    const result = await transporter.sendMail(mailOptions);
    res.status(201).json({message:"sent"});
  }catch(error){
    res.status(500).json({error: 'Failed to Send Email'});
  }
})


if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get("/lg.png", (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/public/images/lg.png'));
  });
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}else{
  app.get("/lg.png", (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/public/images/lg.png'));
  })
}

app.listen(PORT, ()=>{
  console.log(`SErver running on port ${PORT}`);
});