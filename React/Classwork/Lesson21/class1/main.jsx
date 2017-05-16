var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({

   clickHandler: function(e){
      var div = document.getElementById('div');
      div.classList.toggle('red');
   },
   render: function() {

      return (
            <div id="div" className="black">
               <button onClick={this.clickHandler}>Change color of element</button>
            </div>
      )
   }
});

var container = document.getElementById('example');

ReactDOM.render(<Component/>, container);