"use strict";

var Done = function Done(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Thank you for shopping with us ",
      React.createElement("br", null),
      " ",
      props.user.name
    ),
    React.createElement(
      "div",
      { className: "fields" },
      !props.user ? React.createElement(
        "h4",
        null,
        "Loading..."
      ) : React.createElement(
        "div",
        { className: "form userInfo" },
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Name"
          ),
          ": ",
          props.user.name
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Email"
          ),
          ": ",
          props.user.email
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Password"
          ),
          ":",
          props.user.password
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Adress"
          ),
          ":",
          " ",
          props.user.street
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "City"
          ),
          ": ",
          props.user.city
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "State"
          ),
          ": ",
          props.user.state
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Zip code"
          ),
          ":",
          props.user.zipCode
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Phone"
          ),
          ": ",
          props.user.phone
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Card #"
          ),
          ":",
          props.user.cardNumber
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "CVV"
          ),
          ": ",
          props.user.cvv
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Expire"
          ),
          ":",
          props.user.expiration
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Billing Zip code"
          ),
          ":",
          props.user.cardZip
        )
      )
    )
  );
};
window.Done = Done;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0RvbmUvRG9uZS5qc3giXSwibmFtZXMiOlsiRG9uZSIsInByb3BzIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RyZWV0IiwiY2l0eSIsInN0YXRlIiwiemlwQ29kZSIsInBob25lIiwiY2FyZE51bWJlciIsImN2diIsImV4cGlyYXRpb24iLCJjYXJkWmlwIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLFNBQ1g7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDaUMscUNBRGpDO0FBQUE7QUFDeUNDLFlBQU1DLElBQU4sQ0FBV0M7QUFEcEQsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsUUFBZjtBQUNHLE9BQUNGLE1BQU1DLElBQVAsR0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREQsR0FHQztBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBQ21ERCxnQkFBTUMsSUFBTixDQUFXQztBQUQ5RCxTQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUNvREYsZ0JBQU1DLElBQU4sQ0FBV0U7QUFEL0QsU0FKRjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFFR0gsZ0JBQU1DLElBQU4sQ0FBV0c7QUFGZCxTQVBGO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUNvRCxhQURwRDtBQUVHSixnQkFBTUMsSUFBTixDQUFXSTtBQUZkLFNBWEY7QUFlRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBQ21ETCxnQkFBTUMsSUFBTixDQUFXSztBQUQ5RCxTQWZGO0FBa0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFDb0ROLGdCQUFNQyxJQUFOLENBQVdNO0FBRC9ELFNBbEJGO0FBcUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFFR1AsZ0JBQU1DLElBQU4sQ0FBV087QUFGZCxTQXJCRjtBQXlCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBQ29EUixnQkFBTUMsSUFBTixDQUFXUTtBQUQvRCxTQXpCRjtBQTRCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBRUdULGdCQUFNQyxJQUFOLENBQVdTO0FBRmQsU0E1QkY7QUFnQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUNrRFYsZ0JBQU1DLElBQU4sQ0FBV1U7QUFEN0QsU0FoQ0Y7QUFtQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUVHWCxnQkFBTUMsSUFBTixDQUFXVztBQUZkLFNBbkNGO0FBdUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFFR1osZ0JBQU1DLElBQU4sQ0FBV1k7QUFGZDtBQXZDRjtBQUpKO0FBSkYsR0FEVztBQUFBLENBQWI7QUF5REFDLE9BQU9mLElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiJEb25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRG9uZSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8aDE+XG4gICAgICBUaGFuayB5b3UgZm9yIHNob3BwaW5nIHdpdGggdXMgPGJyIC8+IHtwcm9wcy51c2VyLm5hbWV9XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxuICAgICAgeyFwcm9wcy51c2VyID8gKFxuICAgICAgICA8aDQ+TG9hZGluZy4uLjwvaDQ+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0gdXNlckluZm9cIj5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+TmFtZTwvc3Bhbj46IHtwcm9wcy51c2VyLm5hbWV9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+RW1haWw8L3NwYW4+OiB7cHJvcHMudXNlci5lbWFpbH1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhcmtcIj5QYXNzd29yZDwvc3Bhbj46XG4gICAgICAgICAgICB7cHJvcHMudXNlci5wYXNzd29yZH1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhcmtcIj5BZHJlc3M8L3NwYW4+OntcIiBcIn1cbiAgICAgICAgICAgIHtwcm9wcy51c2VyLnN0cmVldH1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhcmtcIj5DaXR5PC9zcGFuPjoge3Byb3BzLnVzZXIuY2l0eX1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhcmtcIj5TdGF0ZTwvc3Bhbj46IHtwcm9wcy51c2VyLnN0YXRlfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFya1wiPlppcCBjb2RlPC9zcGFuPjpcbiAgICAgICAgICAgIHtwcm9wcy51c2VyLnppcENvZGV9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+UGhvbmU8L3NwYW4+OiB7cHJvcHMudXNlci5waG9uZX1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhcmtcIj5DYXJkICM8L3NwYW4+OlxuICAgICAgICAgICAge3Byb3BzLnVzZXIuY2FyZE51bWJlcn1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhcmtcIj5DVlY8L3NwYW4+OiB7cHJvcHMudXNlci5jdnZ9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+RXhwaXJlPC9zcGFuPjpcbiAgICAgICAgICAgIHtwcm9wcy51c2VyLmV4cGlyYXRpb259XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+QmlsbGluZyBaaXAgY29kZTwvc3Bhbj46XG4gICAgICAgICAgICB7cHJvcHMudXNlci5jYXJkWmlwfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xud2luZG93LkRvbmUgPSBEb25lO1xuIl19