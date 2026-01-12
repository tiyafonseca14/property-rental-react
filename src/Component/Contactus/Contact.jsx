import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="contact">
      <form action="https://formspree.io/f/xqearnlz" method="POST">
        <span id="contacttitle">Contact Us Page</span>
        <div className="list">
          <label htmlFor="name1">Username</label>
          <input name="username" type="text" id="name1" required />
        </div>
        <div className="list">
          <label htmlFor="mail">Email</label>
          <input name="mail" type="text" id="mail" required />
        </div>
        <div className="list">
          <label htmlFor="mess">Message</label>
          <textarea name="message" id="mess"></textarea>
        </div>
        <button id="contactbtn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
