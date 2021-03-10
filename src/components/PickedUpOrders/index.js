import React from "react";
import "./PickedUpOrders.css";

export default function PickedUpOrders(props) {
  const { pickedUpOrders, renderOrder } = props;

  return (
    <article className="column">
      <h3>Picked Up</h3>
      {Object.keys(pickedUpOrders).map((orderDate, index) => {
        const pickedUpOrder = pickedUpOrders[orderDate];

        return (
          <article key={index} className="order-summary">
            <dl>{renderOrder(orderDate, pickedUpOrder)}</dl>
          </article>
        );
      })}
    </article>
  );
}
