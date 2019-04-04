"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormThree = function (_React$Component) {
  _inherits(FormThree, _React$Component);

  function FormThree(props) {
    _classCallCheck(this, FormThree);

    var _this = _possibleConstructorReturn(this, (FormThree.__proto__ || Object.getPrototypeOf(FormThree)).call(this, props));

    _this.state = {
      cardNumber: "",
      expiration: "",
      cvv: "",
      cardZip: ""
    };
    return _this;
  }

  _createClass(FormThree, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var data = this.state;
      this.props.handleStepThree(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          cardNumber = _state.cardNumber,
          expiration = _state.expiration,
          cvv = _state.cvv,
          cardZip = _state.cardZip;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Payment"
        ),
        React.createElement(
          "div",
          { className: "fields" },
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "card" },
                "Card Number"
              ),
              React.createElement("input", {
                id: "cardNumber",
                className: "form-control",
                placeholder: "Enter card number",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "expiration" },
                "Expiration Date"
              ),
              React.createElement("input", {
                id: "expiration",
                className: "form-control",
                type: "date",
                placeholder: "Enter expiration date",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "cvv" },
                "CVV"
              ),
              React.createElement("input", {
                id: "cvv",
                type: "number",
                className: "form-control",
                placeholder: "Enter cvv",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "cardZip" },
                "Zip Code"
              ),
              React.createElement("input", {
                type: "number",
                id: "cardZip",
                className: "form-control",
                placeholder: "Enter zip code",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "button",
              {
                type: "submit",
                className: "btn btn-dark",
                onClick: this.handleClick.bind(this)
              },
              "Complete Purchase"
            )
          )
        )
      );
    }
  }]);

  return FormThree;
}(React.Component);

window.FormThree = FormThree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1UaHJlZS9Gb3JtVGhyZWUuanN4Il0sIm5hbWVzIjpbIkZvcm1UaHJlZSIsInByb3BzIiwic3RhdGUiLCJjYXJkTnVtYmVyIiwiZXhwaXJhdGlvbiIsImN2diIsImNhcmRaaXAiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiZGF0YSIsImhhbmRsZVN0ZXBUaHJlZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBREQ7QUFFWEMsa0JBQVksRUFGRDtBQUdYQyxXQUFLLEVBSE07QUFJWEMsZUFBUztBQUpFLEtBQWI7QUFGaUI7QUFRbEI7Ozs7aUNBRVlDLEMsRUFBRztBQUNkLFdBQUtDLFFBQUwscUJBQ0dELEVBQUVFLE1BQUYsQ0FBU0MsRUFEWixFQUNpQkgsRUFBRUUsTUFBRixDQUFTRSxLQUQxQjtBQUdEOzs7a0NBRWE7QUFDWixVQUFJQyxPQUFPLEtBQUtWLEtBQWhCO0FBQ0EsV0FBS0QsS0FBTCxDQUFXWSxlQUFYLENBQTJCRCxJQUEzQjtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDMEMsS0FBS1YsS0FEL0M7QUFBQSxVQUNDQyxVQURELFVBQ0NBLFVBREQ7QUFBQSxVQUNhQyxVQURiLFVBQ2FBLFVBRGI7QUFBQSxVQUN5QkMsR0FEekIsVUFDeUJBLEdBRHpCO0FBQUEsVUFDOEJDLE9BRDlCLFVBQzhCQSxPQUQ5Qjs7QUFFUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU8sU0FBUSxNQUFmO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFDRSxvQkFBRyxZQURMO0FBRUUsMkJBQVUsY0FGWjtBQUdFLDZCQUFZLG1CQUhkO0FBSUUsMEJBQVUsS0FBS1EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFKWjtBQUZGLGFBREY7QUFVRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsWUFBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usb0JBQUcsWUFETDtBQUVFLDJCQUFVLGNBRlo7QUFHRSxzQkFBSyxNQUhQO0FBSUUsNkJBQVksdUJBSmQ7QUFLRSwwQkFBVSxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBRkYsYUFWRjtBQW9CRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsS0FBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usb0JBQUcsS0FETDtBQUVFLHNCQUFLLFFBRlA7QUFHRSwyQkFBVSxjQUhaO0FBSUUsNkJBQVksV0FKZDtBQUtFLDBCQUFVLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO0FBTFo7QUFGRixhQXBCRjtBQThCRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsU0FBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usc0JBQUssUUFEUDtBQUVFLG9CQUFHLFNBRkw7QUFHRSwyQkFBVSxjQUhaO0FBSUUsNkJBQVksZ0JBSmQ7QUFLRSwwQkFBVSxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBRkYsYUE5QkY7QUF3Q0U7QUFBQTtBQUFBO0FBQ0Usc0JBQUssUUFEUDtBQUVFLDJCQUFVLGNBRlo7QUFHRSx5QkFBUyxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QjtBQUhYO0FBQUE7QUFBQTtBQXhDRjtBQURGO0FBRkYsT0FERjtBQXVERDs7OztFQS9FcUJFLE1BQU1DLFM7O0FBa0Y5QkMsT0FBT25CLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IkZvcm1UaHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm1UaHJlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXJkTnVtYmVyOiBcIlwiLFxuICAgICAgZXhwaXJhdGlvbjogXCJcIixcbiAgICAgIGN2djogXCJcIixcbiAgICAgIGNhcmRaaXA6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdGVwVGhyZWUoZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjYXJkTnVtYmVyLCBleHBpcmF0aW9uLCBjdnYsIGNhcmRaaXAgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5QYXltZW50PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhcmRcIj5DYXJkIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiY2FyZE51bWJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhwaXJhdGlvblwiPkV4cGlyYXRpb24gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiZXhwaXJhdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBleHBpcmF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdnZcIj5DVlY8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImN2dlwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGN2dlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhcmRaaXBcIj5aaXAgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiY2FyZFppcFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHppcCBjb2RlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb21wbGV0ZSBQdXJjaGFzZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuRm9ybVRocmVlID0gRm9ybVRocmVlO1xuIl19