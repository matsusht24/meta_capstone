import React from "react";
import Menu_Card from "../component/Menu_Card";

function Highlights() {
  return (
    <section>
      <div>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div>
        <Menu_Card item={{
      name: "Greek Salad",
      price: 12.99,
      desc: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      img: "",
    }} />
        <Menu_Card item={{
      name: "Bruchetta",
      price: 5.99,
      desc: "Our Burshetta is made from grilled bread that has been smeared with garlic and seasoned with salt and oluve oil.",
      img: "",
    }} />
        <Menu_Card
          item={{
            name: "Lemon Dessert",
            price: 5.0,
            desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            img: "",
          }}
        />
      </div>
    </section>
  );
}

export default Highlights;
