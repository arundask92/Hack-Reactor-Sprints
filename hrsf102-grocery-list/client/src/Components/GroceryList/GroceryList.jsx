import React from "react";
import ReactDom from "react-dom";
import GroceryItem from "../GroceryItem/GroceryItem.jsx";

const GroceryList = props => (
  <div>
    {/* <span> {props.item.name} </span>
    <span> {props.item.quantity} </span> */}

    {props.groceryList.map((item, index) => {
      //   console.log(item);
      return <GroceryItem groceryList={item} key={index} />;
    })}
  </div>
);

export default GroceryList;
