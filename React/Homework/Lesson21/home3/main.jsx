var React = require('react');
var ReactDOM = require('react-dom');
var Form = React.createClass({

   getInitialState: function() {
      return {
         result: '',
         nameInputErr: '',
         mailInputErr: '',
         phoneInputErr: '',
         messInputErr: ''

      }
   },
   nameInput: function(e){
      var nameReg = /^[a-zA-Z]+$/;
      if(!nameReg.test(e.target.value)){
         this.setState({nameInputErr: 'Only English letters!!'});
      }
      else{
         this.setState({nameInputErr: ''});
      }
   },

   mailInput: function(e){
      var mailReg = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
      if(!mailReg.test(e.target.value)){
         this.setState({mailInputErr: 'Input correct email!'});
      }
      else{
         this.setState({mailInputErr: ''});
      }
   },

   phoneInput: function(e){
      var phoneReg = /^[0-9]+$/;
      if(!phoneReg.test(e.target.value)){
         this.setState({phoneInputErr: 'Only numbers!'});
      }
      else{
         this.setState({phoneInputErr: ''});
      }
   },

   messInput: function(e){
      var messReg = /^.{20,}$/;
      if(!messReg.test(e.target.value)){
         this.setState({messInputErr: 'Must be > 20 symbols!'});
      }
      else{
         this.setState({messInputErr: ''});
      }
   },
   formSubmit: function(e){

      if((this.state.nameInputErr!='')||(this.state.mailInputErr!='')||(this.state.phoneInputErr!='')||(this.state.messInputErr!='')){
         e.preventDefault();
         this.setState({result: 'Invalid data. Check it!'});
      }
      else{
         this.setState({result: 'Your form is correct!' });
      }
   },

   render: function() {

      return (
            <form action="#" method="post" name="contactForm" onSubmit={this.formSubmit}>
               <label for='name'>Name: </label>
               <input className='form-control' type="text" name="name" onInput={this.nameInput}/>
               <p>{this.state.nameInputErr}</p>
               <label for="email">Email: </label>
               <input className='form-control' type="text" name="email" onInput={this.mailInput}/>
               <p>{this.state.mailInputErr}</p>
               <label for="phone"> Phone: </label>
               <input className='form-control' type="text" name="phone" onInput={this.phoneInput}/>
               <p>{this.state.phoneInputErr}</p>
               <label for="message"> Message: </label>
               <textarea className='form-control' type="text" name="message" onInput={this.messInput} rows="4"/>
               <p>{this.state.messInputErr}</p>
               <input className='btn btn-primary' type="submit" value="send"/>
               <h1>{this.state.result}</h1>
            </form>
      )
   }
})

var container = document.getElementById('example');

ReactDOM.render(<Form/>, container);