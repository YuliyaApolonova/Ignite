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

   start: function(){
      this.timer = setInterval(this.count, 1000);
   },

   stop: function(){
      if(this.timer){
         clearInterval(this.timer);
      }
   },

   reset: function(){
      if(this.timer){
         clearInterval(this.timer);
      }
      this.setState({counter:0});
   },

   render: function() {

      return (
            <div>
               <p>Left: {this.state.counter}</p>
            <button onClick={this.start}>Start</button>
               <button onClick={this.stop}>Stop</button>
               <button onClick={this.reset}>Reset</button>
            </div>
      )
   }
})

var container = document.getElementById('example');

ReactDOM.render(<Timer/>, container);