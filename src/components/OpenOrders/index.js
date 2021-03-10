import React from "react";
import Button from "../Button";

export default function OpenOrders(props) {
  const { openOrders, renderOrder, handlePickedUp } = props;

  return (
    <article className="column">
      <h3>Open</h3>
      {Object.keys(openOrders).map((orderDate, index) => {
        const openOrder = openOrders[orderDate];

        return (
          <article key={index} className="order-summary">
            <dl>
              {renderOrder(orderDate, openOrder)}
              <dd>
                <Button
                  secondary
                  onClick={() => handlePickedUp(orderDate, openOrder)}
                >
                  Picked Up
                </Button>
              </dd>
            </dl>
          </article>
        );
      })}
    </article>
  );
}
