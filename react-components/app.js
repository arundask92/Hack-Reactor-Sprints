//Version 1:
// var GroceryList = () => (
//         <div>
//             <h1>Grocery List</h1>
//             <ul>
//                 <Cucumbers />
//                 <Kale />
//             </ul>
//         </div>
// );

// var Cucumbers = () => {
//     return <li>Cucumbers</li>;
// };

// var Kale = () => {
//     return <li>Kale</li>;
// };

//Refactor:
// var Title = () => (
//     <h1>GroceryList</h1>
// );

// var GroceryListItem = (props) => (
//     <ul>
//         <li>{props.item[0]}</li>
//         <li>{props.item[1]}</li>
//     </ul>
// );

// var GroceryList = () => (
//     <div>
//         <Title />
//         <GroceryListItem item={["cucumbers", "kale"]}/>
//     </div>
// )


// ReactDOM.render(<GroceryList />, document.getElementById("app"));

//Refactor 2: 
// var GroceryListItem = (props) => (
//     <ul>
//         <li>{props.item[0]}</li>
//         <li>{props.item[1]}</li>
//     </ul>
// );


class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bolded: false
        }
    }

    onMouseOver() {
      this.setState((prevState) => ({
          bolded: !prevState.bolded
      }));
    }

    onMouseOut() {
        this.setState((prevState) => ({
            bolded: prevState.bolded
        }));
      }

    render() {
        var style = {
            fontWeight: this.state.bolded ? 'bold' : ''
        }
      return (
          <li style= {style} 
            onMouseOver={this.onMouseOver.bind(this)}
            onMouseOut={this.onMouseOut.bind(this)}>
            {this.props.item}
          </li>
      )
    }
}

var GroceryList = (props) => (
    <div>
        <h1>Grocery List</h1>
      <ul>
          {props.items.map(item => 
            <GroceryListItem item={item} key={item}/>
          )}
      </ul>
    </div>
)


ReactDOM.render(<GroceryList items={["cucumbers", "kale"]}/>, document.getElementById("app"));