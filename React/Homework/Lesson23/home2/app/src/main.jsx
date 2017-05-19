import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass ({
   getDefaultProps: function() {
      return {
         users : [{first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
            {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
            {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
            {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id: 78908},
            {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249", id:67653},
            {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
            {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
            {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6", id: 34239}]
      }
   },
   getInitialState: function() {
      return {
         loaded: true
      }
   },
   addNew: function(){
      this.setState({loaded: true});
      var form = document.forms.userForm;
      var elems = form.elements;
      var newUser = {};
      newUser.first_name = elems.name.value;
      newUser.last_name = elems.lastName.value;
      newUser.gender = elems.gender.value;
      newUser.id = elems.id.value;
      this.props.users.push(newUser);
      for(var i=0; i<this.props.users.length; i++){ //newUser успеешно добавлен
         console.log(this.props.users[i]);
      }
   },
   render() {
      if(this.state.loaded == true){
         return(
               <div>
                  <table className="table">
                     <thead>
                     <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Gender</th>
                     </tr>
                     </thead>
                     <tbody>
                     {this.props.users.map(function(user, index) {
                        return <TableItem key={user.id} name={user.first_name} lastName={user.last_name}
                                          gender={user.gender}>1</TableItem>
                     })}
                     </tbody>
                  </table>
                  <form name="userForm">
                     <label >name:</label>
                     <input className='form-control' type="text" name="name"/>
                     <label>lastName: </label>
                     <input className='form-control' type="text" name="lastName"/>
                     <label> gender: </label>
                     <input className='form-control' type="gender" name="gender"/>
                     <label>id:</label>
                     <input className='form-control' type="id" name="id"/>
                  </form>
                  <button className='btn btn-primary' onClick={this.addNew}> Add new </button>
               </div>
         )
      }
   }
})

var TableItem = React.createClass({
   render: function() {
      return (
            <tr>
               <td>{this.props.name}</td>
               <td>{this.props.lastName}</td>
               <td>{this.props.gender}</td>
            </tr>
      )}
});

var container = document.getElementById('example');

ReactDOM.render(<App/>, container);