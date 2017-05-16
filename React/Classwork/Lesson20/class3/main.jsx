var React = require('react');
var ReactDOM = require('react-dom');


var CheckBox = React.createClass({

   getInitialState: function() {
      return {
         checked: false
      }
   },

   handler: function() {
      // функция setState позволяет менять значение state
      this.setState({checked: !this.state.checked})
   },

   render: function() {

      if (this.state.checked) {
         var color = 'red';
      }
      return (
            <div style={{"backgroundColor": color}}>
               <input type="checkbox" onChange={this.handler} defaultChecked={this.state.checked}/>
            </div>
      )
   }
})

var container = document.getElementById('example');

ReactDOM.render(<CheckBox/>, container);