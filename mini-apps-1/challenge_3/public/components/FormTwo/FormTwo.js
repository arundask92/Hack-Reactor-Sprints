"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormTwo = function (_React$Component) {
  _inherits(FormTwo, _React$Component);

  function FormTwo() {
    _classCallCheck(this, FormTwo);

    var _this = _possibleConstructorReturn(this, (FormTwo.__proto__ || Object.getPrototypeOf(FormTwo)).call(this));

    _this.state = {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      phone: ""
    };
    return _this;
  }

  _createClass(FormTwo, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var data = this.state;
      // console.log(data);
      this.props.handleStepTwo(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          street = _state.street,
          city = _state.city,
          state = _state.state,
          zipCode = _state.zipCode;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Address"
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
                { htmlFor: "street" },
                "Street Address"
              ),
              React.createElement("input", {
                id: "street",
                className: "form-control",
                placeholder: "Enter street adress",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "city" },
                "City"
              ),
              React.createElement("input", {
                id: "city",
                className: "form-control",
                type: "text",
                placeholder: "Enter city",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "state" },
                "State"
              ),
              React.createElement("input", {
                id: "state",
                className: "form-control",
                placeholder: "Enter state",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "zipCode" },
                "Zip Code"
              ),
              React.createElement("input", {
                type: "number",
                id: "zipCode",
                className: "form-control",
                placeholder: "Enter zip code",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "phone" },
                "Phone Number"
              ),
              React.createElement("input", {
                type: "number",
                id: "phone",
                className: "form-control",
                placeholder: "Enter phone number",
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
              "Submit"
            )
          )
        )
      );
    }
  }]);

  return FormTwo;
}(React.Component);

window.FormTwo = FormTwo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Ud28vRm9ybVR3by5qc3giXSwibmFtZXMiOlsiRm9ybVR3byIsInN0YXRlIiwic3RyZWV0IiwiY2l0eSIsInppcENvZGUiLCJwaG9uZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJkYXRhIiwicHJvcHMiLCJoYW5kbGVTdGVwVHdvIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixxQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBREc7QUFFWEMsWUFBTSxFQUZLO0FBR1hGLGFBQU8sRUFISTtBQUlYRyxlQUFTLEVBSkU7QUFLWEMsYUFBTztBQUxJLEtBQWI7QUFGWTtBQVNiOzs7O2lDQUVZQyxDLEVBQUc7QUFDZCxXQUFLQyxRQUFMLHFCQUNHRCxFQUFFRSxNQUFGLENBQVNDLEVBRFosRUFDaUJILEVBQUVFLE1BQUYsQ0FBU0UsS0FEMUI7QUFHRDs7O2tDQUVhO0FBQ1osVUFBSUMsT0FBTyxLQUFLVixLQUFoQjtBQUNBO0FBQ0EsV0FBS1csS0FBTCxDQUFXQyxhQUFYLENBQXlCRixJQUF6QjtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDa0MsS0FBS1YsS0FEdkM7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxJQURULFVBQ1NBLElBRFQ7QUFBQSxVQUNlRixLQURmLFVBQ2VBLEtBRGY7QUFBQSxVQUNzQkcsT0FEdEIsVUFDc0JBLE9BRHRCOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxTQUFRLFFBQWY7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLG9CQUFHLFFBREw7QUFFRSwyQkFBVSxjQUZaO0FBR0UsNkJBQVkscUJBSGQ7QUFJRSwwQkFBVSxLQUFLVSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QjtBQUpaO0FBRkYsYUFERjtBQVVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU8sU0FBUSxNQUFmO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFDRSxvQkFBRyxNQURMO0FBRUUsMkJBQVUsY0FGWjtBQUdFLHNCQUFLLE1BSFA7QUFJRSw2QkFBWSxZQUpkO0FBS0UsMEJBQVUsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFMWjtBQUZGLGFBVkY7QUFvQkU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLG9CQUFHLE9BREw7QUFFRSwyQkFBVSxjQUZaO0FBR0UsNkJBQVksYUFIZDtBQUlFLDBCQUFVLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO0FBSlo7QUFGRixhQXBCRjtBQTZCRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsU0FBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usc0JBQUssUUFEUDtBQUVFLG9CQUFHLFNBRkw7QUFHRSwyQkFBVSxjQUhaO0FBSUUsNkJBQVksZ0JBSmQ7QUFLRSwwQkFBVSxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBRkYsYUE3QkY7QUF1Q0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLHNCQUFLLFFBRFA7QUFFRSxvQkFBRyxPQUZMO0FBR0UsMkJBQVUsY0FIWjtBQUlFLDZCQUFZLG9CQUpkO0FBS0UsMEJBQVUsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFMWjtBQUZGLGFBdkNGO0FBaURFO0FBQUE7QUFBQTtBQUNFLHNCQUFLLFFBRFA7QUFFRSwyQkFBVSxjQUZaO0FBR0UseUJBQVMsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEI7QUFIWDtBQUFBO0FBQUE7QUFqREY7QUFERjtBQUZGLE9BREY7QUFnRUQ7Ozs7RUExRm1CRSxNQUFNQyxTOztBQTZGNUJDLE9BQU9uQixPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJGb3JtVHdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybVR3byBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0cmVldDogXCJcIixcbiAgICAgIGNpdHk6IFwiXCIsXG4gICAgICBzdGF0ZTogXCJcIixcbiAgICAgIHppcENvZGU6IFwiXCIsXG4gICAgICBwaG9uZTogXCJcIlxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN0ZXBUd28oZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHJlZXQsIGNpdHksIHN0YXRlLCB6aXBDb2RlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+QWRkcmVzczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdHJlZXRcIj5TdHJlZXQgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwic3RyZWV0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgc3RyZWV0IGFkcmVzc1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNpdHlcIj5DaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGNpdHlcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGF0ZVwiPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHN0YXRlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiemlwQ29kZVwiPlppcCBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ6aXBDb2RlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgemlwIGNvZGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwaG9uZSBudW1iZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuRm9ybVR3byA9IEZvcm1Ud287XG4iXX0=