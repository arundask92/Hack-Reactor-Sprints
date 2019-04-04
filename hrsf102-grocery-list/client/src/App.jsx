import React, { Component } from "react";
import ReactDom from "react-dom";
import GroceryList from "./Components/GroceryList/GroceryList.jsx";
import $ from "jquery";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //   groceryList: {
      //     items: [
      //       { name: "pizza", quantity: 10 },
      //       { name: "burrito", quantity: 5 },
      //       { name: "ice cream", quantity: 3 }
      //     ]
      //   }
      groceryList: []
    };
  }

  componentDidMount() {
    // var appInstance = this;
    $.ajax({
      url: "http://localhost:3000/groceries",
      method: "GET",
      success: data => {
        console.log("data", data);
        this.setState({
          groceryList: data
        });
      },
      error: err => {
        console.log("err", err);
      }
    });
  }

  render() {
    return (
      <div>
        <GroceryList
          // groceryList={this.state.groceryList.items}
          groceryList={this.state.groceryList}
        />
      </div>
    );
  }
}

export default App;
