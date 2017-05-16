var React = require('react');
var ReactDOM = require('react-dom');

var Form = React.createClass({
   render: function(){
      return(
            <form>
               <label>Name: </label>
               <input className='form-control' type="text" name="name" placeholder="name"/>
               <label>Login: </label>
               <input className="form-control" type="text" name="login" placeholder="login"/>
               <input className='form-control' type="submit"/>
            </form>
      )}
});
      var container = document.getElementById('example');
      ReactDOM.render(<Form></Form>, container);