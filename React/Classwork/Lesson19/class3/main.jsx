var React = require('react');
var ReactDOM = require('react-dom');


var Hello = React.createClass({
   render: function() {

      return (<h1>{+this.props.prop1+ +this.props.prop2}</h1>)
   }
});

var container = document.getElementById('example');

ReactDOM.render(<Hello prop1="2" prop2="9" />, container);