import React from "react";
import { formatPrice } from "../../util";
import "./MenuItem.css";

import Button from "../Button";

export default function MenuItem(props) {
  const { menuItem, addToOrder } = props;
  const menuItemId = menuItem.name.toLowerCase().replace(" ", "-");

  const renderImage = (menuItemName) => {
    let url = "";

    switch (menuItemName) {
      case "Vegetarian":
        url = "https://i.imgur.com/dBtfRft.jpg";
        break;
      case "BLT":
        url = "https://i.imgur.com/heemaJw.jpg";
        break;
      case "Turkey":
        url = "https://i.imgur.com/i2y0TWN.jpg";
        break;
    }

    return (
      <img className="menu__image" src={url} width="150" height="150" alt="" />
    );
  };

  return (
    <div className="menu__item">
      {renderImage(menuItem.name)}
      <dt>
        <label htmlFor={menuItemId}>{menuItem.name}</label>
      </dt>
      <dd>{formatPrice(menuItem.price)}</dd>
      <dd>Contains: {Object.keys(menuItem.ingredients).join(", ")}</dd>
      <dd>
        <Button
          id={menuItemId}
          onClick={(event) => {
            event.preventDefault();
            addToOrder(menuItem);
          }}
        >
          Add
        </Button>
      </dd>
    </div>
  );
}
