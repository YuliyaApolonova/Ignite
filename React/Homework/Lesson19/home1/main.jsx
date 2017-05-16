var React = require('react');
var ReactDOM = require('react-dom');

   var ResultTable = React.createClass({

      getDefaultProps: function() {
         return {
            users : [{name:"Anne Montgomery",gender:"Female"},
               {name:"Annie George",gender:"Female"},
               {name:"Gary Butler",gender:"Male"},
               {name:"Lisa Mendoza",gender:"Female"},
               {name:"Marilyn Henry",gender:"Female"},
               {name:"Johnny Tucker",gender:"Male"},
               {name:"Chris Jacobs",gender:"Male"},
               {name:"Benjamin James",gender:"Male"}]
         }
      },

      render: function() {
         // создание дочерних React компонентов на основе значения props
         return (
               <table className="table">
                  <thead>
                  <tr>
                     <th>name</th>
                     <th>gender</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.users.map(function(user, index) {
                     return <ResultItem key={index} name={user.name} gender={user.gender}>1</ResultItem>
                  })}
                  </tbody>
               </table>
         )}
   });

   var ResultItem = React.createClass({
      render: function() {
         return (
               <tr>
                  <td>{this.props.name}</td>
                  <td>{this.props.gender}</td>
               </tr>
         )}
   });

   var container = document.getElementById('example');
   ReactDOM.render(<ResultTable><ResultItem/></ResultTable>, container);