var React = require('react');
var ReactDOM = require('react-dom');

var Text = React.createClass({

   render: function() {
      return (
                <p style={{"color": this.props.color, "fontSize": this.props.fontSize}}> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      )}
})

var container = document.getElementById('example');
ReactDOM.render(<Text color="red" fontSize="30"></Text>, container);