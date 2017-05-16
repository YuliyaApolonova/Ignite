var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
   propTypes: {
      number1: React.PropTypes.number,
      number2: React.PropTypes.number,
      mode: React.PropTypes.bool
   },

   getDefaultProps: function() {
   return {
      number1: 0,
      number2: 0,
      mode: true
   }
},
     render: function() {
        if (this.props.mode == true) {
           return (
                 <div>
                    {+this.props.number1+ +this.props.number2}
                 </div>
           )
        }
        else {
           return (
                 <div>
                    {this.props.number1 + this.props.number2}
                 </div>
           )
        }
     }

})

var container = document.getElementById('example');

ReactDOM.render(
      <Component number1="3" number2="4" mode='true'></Component>
      , container);