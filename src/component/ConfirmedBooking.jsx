import React from 'react'
import { Link } from 'react-router-dom';
function ConfirmedBooking() {
  return (  
    <div><h1>Booking Confirmed</h1>
        <p>Your reservation has been confirmed.</p>
        <p>We look forward to welcoming you!</p>
        <h2>Details:</h2>
        <ul>
            <li>Date: 2023-10-01</li>
            <li>Time: 19:00</li>
            <li>Guests: 4</li>
            <li>Occasion: Birthday</li>
        </ul>   
    <Link to="/">Home</Link>
    </div>
  )
}

export default ConfirmedBooking;