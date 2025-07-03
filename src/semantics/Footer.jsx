import React from 'react'

function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Little Lemon</h3>
          <p>123 Citrus Lane<br />Lemonville, CA 90000</p>
          <p>Phone: (123) 456-7890<br />Email: info@littlelemon.com</p>
        </div>
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon-Fri: 11am - 10pm</li>
            <li>Sat-Sun: 9am - 11pm</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="footer-social">
            <li><a href="https://facebook.com" aria-label="Facebook">Facebook</a></li>
            <li><a href="https://instagram.com" aria-label="Instagram">Instagram</a></li>
            <li><a href="https://twitter.com" aria-label="Twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <small>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer