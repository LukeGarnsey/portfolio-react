import { useState } from "react";

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) =>{
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      console.log(formData);
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if(response.ok){
        console.log('Email Sent');
        setFormData({name:'', email:'', message:''});
      }else{
        console.log('Failed to send email');
      }
    }catch(error){
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h3>About me</h3>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}