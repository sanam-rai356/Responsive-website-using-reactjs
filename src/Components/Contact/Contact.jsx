import React from 'react';
import './Contact.css';
import msg_icon from './../../img/msg-icon.png';
import main_icon from "./../../img/mail-icon.png";
import phone_icon from "./../../img/phone-icon.png";
import location_icon from "./../../img/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc3fe19f-336e-494d-a738-06eed926db22");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="container" id='mainContact'>
        <div className="contact">
            <div className="title">
                <p>Contact Us</p>
                <h2>Get In Touch</h2>
            </div>

            <div className="innerContact">
                <div className="contact_col">
                    <h3>Send us a message <img src={msg_icon}/></h3>
                    <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    <ul>
                        <li><img src={main_icon} />something@gmail.com</li>
                        <li><img src={phone_icon}/>988 685 443</li>
                        <li><img src={location_icon}/>77 Massachsetts Ave, Cambrige</li>
                    </ul>
                </div>
                <div className="contact_col">
                  <form onsubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Name' name="name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required />
                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn darkBTN'>Submit</button>
                    <span>{result}</span>
                  </form>
                 
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
