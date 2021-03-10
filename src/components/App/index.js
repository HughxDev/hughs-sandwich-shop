import React, { useState } from "react";
import "./App.css";

import AppHeader from "../AppHeader";
import OrderForm from "../OrderForm";
import ActiveOrders from "../ActiveOrders";

export default function App() {
  const [activeOrders, setActiveOrders] = useState({});

  return (
    <div className="app-container">
      <AppHeader />
      <OrderForm
        activeOrders={activeOrders}
        setActiveOrders={setActiveOrders}
      />
      <hr />
      <ActiveOrders
        activeOrders={activeOrders}
        setActiveOrders={setActiveOrders}
      />
    </div>
  );
}
