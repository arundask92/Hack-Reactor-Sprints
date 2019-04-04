import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import data from './dummy_data.js';
import Balance from './components/Balance.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h1>Balance Search</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
