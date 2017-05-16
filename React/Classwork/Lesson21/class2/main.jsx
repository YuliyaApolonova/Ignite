var React = require('react');
var ReactDOM = require('react-dom');
var Timer = React.createClass({

   getInitialState: function() {
      return {
         counter: 1,
      }
   },

   count: function() {
      this.setState({counter: this.state.counter + 1});
   },

   render: function() {

      if (!this.timer) {
         this.timer = setInterval(this.count, 1000);
      }

      return (
            <div>Left: {this.state.counter}</div>
      )
   }
})

var container = document.getElementById('example');

ReactDOM.render(<Timer/>, container);