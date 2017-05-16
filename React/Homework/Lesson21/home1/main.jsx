var React = require('react');
var ReactDOM = require('react-dom');
var Counter = React.createClass({

   getInitialState: function() {
      return {
         counter: 1,
      }
   },

   add: function(){
      this.setState({counter: this.state.counter + 1})
   },

   substr: function(){
      this.setState({counter: this.state.counter - 1 })
   },

   render: function() {

      return (
            <div>
               <h1>{this.state.counter}</h1>
               <button onClick={this.add}>+</button>
               <button onClick={this.substr}>-</button>
            </div>
      )
   }
})

var container = document.getElementById('example');

ReactDOM.render(<Counter/>, container);