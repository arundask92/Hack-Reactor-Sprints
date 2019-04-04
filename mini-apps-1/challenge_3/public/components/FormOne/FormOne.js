"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormOne = function (_React$Component) {
  _inherits(FormOne, _React$Component);

  function FormOne() {
    _classCallCheck(this, FormOne);

    var _this = _possibleConstructorReturn(this, (FormOne.__proto__ || Object.getPrototypeOf(FormOne)).call(this));

    _this.state = {
      name: "",
      email: "",
      password: ""
    };
    return _this;
  }

  _createClass(FormOne, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var data = this.state;
      this.props.handleStepOne(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          password = _state.password;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "User Information"
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
                { htmlFor: "name" },
                "Name"
              ),
              React.createElement("input", {
                onChange: this.handleChange.bind(this),
                id: "name",
                className: "form-control",
                placeholder: "Enter full name"
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "email" },
                "Email address"
              ),
              React.createElement("input", {
                onChange: this.handleChange.bind(this),
                id: "email",
                className: "form-control",
                type: "email",
                placeholder: "Enter email"
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "password" },
                "Password"
              ),
              React.createElement("input", {
                onChange: this.handleChange.bind(this),
                type: "password",
                id: "password",
                className: "form-control",
                placeholder: "Enter password"
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

  return FormOne;
}(React.Component);

window.FormOne = FormOne;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1PbmUvRm9ybU9uZS5qc3giXSwibmFtZXMiOlsiRm9ybU9uZSIsInN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiZGF0YSIsInByb3BzIiwiaGFuZGxlU3RlcE9uZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsTzs7O0FBQ0oscUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxnQkFBVTtBQUhDLEtBQWI7QUFGWTtBQU9iOzs7O2lDQUVZQyxDLEVBQUc7QUFDZCxXQUFLQyxRQUFMLHFCQUNHRCxFQUFFRSxNQUFGLENBQVNDLEVBRFosRUFDaUJILEVBQUVFLE1BQUYsQ0FBU0UsS0FEMUI7QUFHRDs7O2tDQUVhO0FBQ1osVUFBSUMsT0FBTyxLQUFLVCxLQUFoQjtBQUNBLFdBQUtVLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkYsSUFBekI7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQzJCLEtBQUtULEtBRGhDO0FBQUEsVUFDQ0MsSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT0MsS0FEUCxVQUNPQSxLQURQO0FBQUEsVUFDY0MsUUFEZCxVQUNjQSxRQURkOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLDBCQUFVLEtBQUtTLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRFo7QUFFRSxvQkFBRyxNQUZMO0FBR0UsMkJBQVUsY0FIWjtBQUlFLDZCQUFZO0FBSmQ7QUFGRixhQURGO0FBVUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLDBCQUFVLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRFo7QUFFRSxvQkFBRyxPQUZMO0FBR0UsMkJBQVUsY0FIWjtBQUlFLHNCQUFLLE9BSlA7QUFLRSw2QkFBWTtBQUxkO0FBRkYsYUFWRjtBQW9CRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsVUFBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0UsMEJBQVUsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEWjtBQUVFLHNCQUFLLFVBRlA7QUFHRSxvQkFBRyxVQUhMO0FBSUUsMkJBQVUsY0FKWjtBQUtFLDZCQUFZO0FBTGQ7QUFGRixhQXBCRjtBQThCRTtBQUFBO0FBQUE7QUFDRSxzQkFBSyxRQURQO0FBRUUsMkJBQVUsY0FGWjtBQUdFLHlCQUFTLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCO0FBSFg7QUFBQTtBQUFBO0FBOUJGO0FBREY7QUFGRixPQURGO0FBNkNEOzs7O0VBcEVtQkUsTUFBTUMsUzs7QUFzRTVCQyxPQUFPbEIsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiRm9ybU9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm1PbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIlxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN0ZXBPbmUoZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Vc2VyIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZnVsbCBuYW1lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxud2luZG93LkZvcm1PbmUgPSBGb3JtT25lO1xuIl19