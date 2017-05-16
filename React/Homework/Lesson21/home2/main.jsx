var React = require('react');
var ReactDOM = require('react-dom');
var Counter = React.createClass({

   getInitialState: function() {
      return {
         result: 0,
         inputErr: ''
      }
   },
   input: function(e){
      var regExp = /^[0-9]$/;
      if(!regExp.test(e.target.value)){
         this.setState({inputErr: 'Input error!'});
      }
      else{
         this.setState({inputErr: ''});
      }
   },

   add: function(){
      var regExp = /^[0-9]$/;
      var number1 = document.getElementsByTagName('input')[0];
      var number2 = document.getElementsByTagName('input')[1];
      if(!regExp.test(number1.value)){
         this.setState({inputErr: 'Input error!'});
      }
      else{
         this.setState({result: +number1.value + +number2.value });
      }
   },

   substr: function(){
      var regExp = /^[0-9]$/;
      var number1 = document.getElementsByTagName('input')[0];
      var number2 = document.getElementsByTagName('input')[1];
      if(!regExp.test(number1.value)){
         this.setState({inputErr: 'Input error!'});
      }
      else{
         this.setState({result: number1.value - number2.value });
      }
   },

   mult: function(){
      var regExp = /^[0-9]$/;
      var number1 = document.getElementsByTagName('input')[0];
      var number2 = document.getElementsByTagName('input')[1];
      if(!regExp.test(number1.value)){
         this.setState({inputErr: 'Input error!'});
      }
      else{
         this.setState({result: number1.value * number2.value });
      }
   },

   div: function(){
      var regExp = /^[0-9]$/;
      var number1 = document.getElementsByTagName('input')[0];
      var number2 = document.getElementsByTagName('input')[1];
      if(!regExp.test(number1.value)){
         this.setState({inputErr: 'Input error!'});
      }
      else{
         this.setState({result: number1.value / number2.value });
      }
   },

   render: function() {

      return (
            <div>
              <input type="text" name="number1" onInput={this.input}/>
               <input type="text" name="number2" onInput={this.input}/>
               <p>{this.state.inputErr}</p>
               <button onClick={this.add}>+</button>
               <button onClick={this.substr}>-</button>
               <button onClick={this.mult}>*</button>
               <button onClick={this.div}>/</button>
               <h1>{this.state.result}</h1>
            </div>
      )
   }
})

var container = document.getElementById('example');

ReactDOM.render(<Counter/>, container);