import React from 'react'
import "./contact.css";

export default function Contact() {
  return (
    <div id="contact">
        <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="message" placeholder="Message" id="" cols="30" rows="5"></textarea>
            <button type="submit">Submit</button>
        </form>
        <div className="tnc">
            <h2>&copy; Copyright</h2>
            <p>made solely by Harsh Agnihotri</p>
        </div>
    </div>
  )
}
