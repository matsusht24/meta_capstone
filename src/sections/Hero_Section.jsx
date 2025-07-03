import React from "react";
import { Link } from "react-router-dom";
function Hero_Section() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <h4>
          We are a family owned Mediteranean restaurant focused on traditional
          recipes served with a modern twist.{" "}
        </h4>
        <Link className="hero-button" to="/booking">Reserve a Table</Link>
      </div>
      <div className="hero-image">
        <img
          src="/images/restauranfood.jpg"
          alt="A plate of food"
        />
      </div>
      
    </section>
  );
}

export default Hero_Section;
