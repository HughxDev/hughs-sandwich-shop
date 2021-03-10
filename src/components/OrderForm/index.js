import React, { useState } from "react";
import data from "../../data";

import Menu from "../Menu";
import CurrentOrder from "../CurrentOrder";
import Button from "../Button";

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
 * 1. Create a form where a user can create orders.
 * [x] A user should be able to see each sandwich and how much they cost.
 * [x] A user should be able to add sandwiches to the order using a button.
 * [x] A user should not be able to add a sandwich we don't have ingredients for (see data.json).
 * [x] A user should be able to see all items in an order.
 * [x] A user should be able to see the total cost of the order.
 * [x] A user should be able to complete the order using a button.
 *
 */

export default function OrderForm(props) {
  const { activeOrders, setActiveOrders } = props;
  const [inventory, setInventory] = useState(data.inventory);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({});

  const addToOrder = (menuItem) => {
    const newOrder = { ...order };
    const workingInventory = { ...inventory };
    const requiredIngredients = Object.keys(menuItem.ingredients);
    let hasShortage = false;

    for (let index = 0; index < requiredIngredients.length; index++) {
      const requiredIngredient = requiredIngredients[index];
      const requiredAmountOfIngredient =
        menuItem.ingredients[requiredIngredient];
      const inventoryAfterFilling =
        inventory[requiredIngredient] - requiredAmountOfIngredient;

      if (inventoryAfterFilling < 0) {
        // Although a `clearOrder` method is not implemented, using language that might be presented in a real app
        alert(
          `Sorry, we don’t have enough ingredients to fill this order. Please remove some items or check back again later.`
        );
        hasShortage = true;
        break;
      } else {
        workingInventory[requiredIngredient] = inventoryAfterFilling;
      }
    }

    if (!hasShortage) {
      if (newOrder.hasOwnProperty(menuItem.name)) {
        newOrder[menuItem.name].quantity += 1;
      } else {
        newOrder[menuItem.name] = {
          price: menuItem.price,
          quantity: 1
        };
      }

      setTotal(total + menuItem.price);
      setOrder(newOrder);
      setInventory(workingInventory);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(order).length < 1) {
      alert(`Please add a menu item first.`);
      return;
    }

    const newActiveOrder = {};

    newActiveOrder[new Date().toISOString()] = {
      ...order,
      total
    };

    setActiveOrders({
      ...activeOrders,
      ...newActiveOrder
    });

    setOrder({});
    setTotal(0);

    // alert(`Order submitted!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Menu</h2>
      <Menu menuItems={data.menu} addToOrder={addToOrder} />
      <h2>Current Order</h2>
      <CurrentOrder order={order} total={total} />
      <Button primary>Place Order</Button>
    </form>
  );
}
