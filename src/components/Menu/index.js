import React from "react";
import "./Menu.css";

import MenuItem from "../MenuItem";

export default function Menu(props) {
  const { menuItems, addToOrder } = props;

  return (
    <dl className="menu">
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} menuItem={menuItem} addToOrder={addToOrder} />
      ))}
    </dl>
  );
}
