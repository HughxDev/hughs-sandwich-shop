import React from "react";
import { formatPrice } from "../../util";
import "./CurrentOrder.css";

export default function OrderForm(props) {
  const { order, total } = props;

  return (
    <>
      <ul className="current-order__summary">
        {Object.keys(order).map((menuItemName, index) => (
          <li key={index}>
            {menuItemName} (×{order[menuItemName].quantity})
          </li>
        ))}
      </ul>
      <p className="current-order__total">
        <label className="key" htmlFor="total">
          Total
        </label>
        : <output id="total">{formatPrice(total)}</output>
      </p>
    </>
  );
}
