import React from "react";

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
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img
          alt="A plate of food"
        />
      </div>
      
    </section>
  );
}

export default Hero_Section;
