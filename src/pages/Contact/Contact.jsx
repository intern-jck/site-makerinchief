import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState({
    site: 'makerinchief',
    name: '',
    emailFrom: ''
  });

  const updateMessage = (event) => {
    const {name, value} = event.target;
    const updatedInput = {[name]: value};

    setMessage((message) => ({
      ...message,
      ...updatedInput
    }));
  };

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(message)

    emailjs.send('general_service', 'general_template', message, 'SD1OuUMnwSggZy3IS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='Contact'>
      <h1>Contact</h1>
      <h2>Send a message with your questions or comments!</h2>

      <form className='contact-form' onSubmit={sendEmail}>

        <div>
          <label>Name</label>
          <input type="text" name="name" value={message.name} onChange={updateMessage}/>
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="emailFrom" />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" rows='10'/>
        </div>

        <button type="submit" value="Send">
          SEND
        </button>

      </form>
    </div>
  );
};

export default Contact;