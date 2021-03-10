import React, { useState } from "react";
import { formatPrice, formatDate } from "../../util";

import OpenOrders from "../OpenOrders";
import PickedUpOrders from "../PickedUpOrders";

/**
 * Instructions
 *
 * Use JavaScript, React, and CSS to complete the following prompt.
 *
 * DO NOT use other libraries or packages. This includes state management (redux), styling, routing, etc.
 * DO NOT use the codesandbox upload feature. Complete the entire exercise using codesandbox.
 *
 * Prompt
 *
 * You run a restaurant selling sandwiches and need some way of keeping track orders.
 * Create a React app that allows your employees to create new orders and show when they've been picked up.
 *
 * 2. Create a component that display all active orders.
 * [x] A user should be able to see all "open" orders.
 * [x] A user should be able to uniquely identify orders from one another.
 * [x] A user should be able to see all items in an order.
 * [x] A user should be able to see the total cost of the order.
 * [x] A user should be able to mark the order as "picked-up" by clicking a button.
 * [x] A user should be able to clearly distinguish "open" and "picked-up" orders.
 */

export default function ActiveOrders(props) {
  const { activeOrders, setActiveOrders } = props;
  const [pickedUpOrders, setPickedUpOrders] = useState({});

  const renderOrder = (orderDate, order) => {
    return (
      <>
        <dt>{formatDate(orderDate)}</dt>
        {Object.keys(order).map((orderItemName, index) => {
          const orderItemsOrPrice = order[orderItemName];

          if (orderItemName !== "total") {
            const { quantity } = orderItemsOrPrice;

            return (
              <dd key={index}>
                {orderItemName} (×{quantity})
              </dd>
            );
          }

          return (
            <dd key={index}>
              <b className="key">Total</b>: {formatPrice(orderItemsOrPrice)}
            </dd>
          );
        })}
      </>
    );
  };

  const handlePickedUp = (orderDate, order) => {
    const newActiveOrders = { ...activeOrders };
    const newPickedUpOrders = { ...pickedUpOrders };

    delete newActiveOrders[orderDate];
    newPickedUpOrders[orderDate] = order;

    setActiveOrders(newActiveOrders);
    setPickedUpOrders(newPickedUpOrders);
  };

  return (
    <article>
      <h2>Active Orders</h2>
      <div className="row">
        <OpenOrders
          openOrders={activeOrders}
          renderOrder={renderOrder}
          handlePickedUp={handlePickedUp}
        />
        <PickedUpOrders
          pickedUpOrders={pickedUpOrders}
          renderOrder={renderOrder}
        />
      </div>
    </article>
  );
}
