import React from "react";

function Menu_Card({ item }) {
    const { name, price, desc, img } = item;
return (

    <div className="menu-card">
      <img className="menu-card-img" alt={ name} src={img}></img>
      <div className="menu-card-text">
        <div className="menu-card-header">
          <h3>{name}</h3>
          <h4>{"$" + price}</h4>
        </div>

        <p>{desc}</p>

        <button> Order a delivery</button>
      </div>
    </div>
  );
}

export default Menu_Card;
