import React from "react";

function Menu_Card({ item }) {
    const { name, price, desc, img } = item;
return (

    <div>
      <img alt={ name}></img>
      <div>
        <div>
          <h3>{name}</h3>
          <h4>{price}</h4>
        </div>

        <p>{desc}</p>

        <button> Order a delivery</button>
      </div>
    </div>
  );
}

export default Menu_Card;
