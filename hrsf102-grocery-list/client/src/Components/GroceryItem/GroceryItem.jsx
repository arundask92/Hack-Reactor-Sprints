import React from "react";
import ReactDom from "react-dom";
// import GroceryItem from "./GroceryItem/GroceryItem";

const GroceryItem = props => (
  <div>
    <span>{props.groceryList.name} </span>
    <span>{props.groceryList.quantity}</span>
  </div>
);

export default GroceryItem;
