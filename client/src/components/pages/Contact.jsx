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
      <h3>Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group py-1">
          <label htmlFor="name" className="p-1">Name:</label>
          <input style={styles.max} className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        </div>
        <div className="form-group py-1">
          <label htmlFor="email" className="p-1">Email address:</label>
          <input style={styles.max}  className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        </div>
        <div className="form-group py-1">
          <label htmlFor="message" className="p-1">Message:</label>
          <textarea style={styles.max}  className="form-control" name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required />
        </div>
        <button type="submit" className="my-3">Send Email</button>
      </form>
    </div>
  );
}

const styles = {
  max:{
    maxWidth:'500px',
  },
}