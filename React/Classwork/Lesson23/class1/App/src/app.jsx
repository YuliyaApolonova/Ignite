var React = require('react');
var ReactDOM = require('react-dom');

var ParentComponent = React.createClass({
   render: function() {
      return (
            <div>
               <h1>Parent Component</h1>
               <ChildComponent/>
            </div>
      )}
})

var ChildComponent = React.createClass({
   render: function() {
      return (
            <h3>Child Component</h3>
      )}
})

var container = document.getElementById('example');

ReactDOM.render(
      <ParentComponent></ParentComponent>
      , container);

module.exports = ParentComponent;