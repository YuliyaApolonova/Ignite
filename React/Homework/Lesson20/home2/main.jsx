var React = require('react');
var ReactDOM = require('react-dom');

var List = React.createClass ({
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
         inputVal: 10,
         color: 'green'

      }
   },

   handleInputValChange: function(e) {
      if (e.target.value == 0){
         this.setState({inputVal: 10});
      }
      else{
         this.setState({inputVal: e.target.value});
      }
   },

   render() {
      var number = this.state.inputVal;
      return(
            <div>
               <input type="text" onChange={this.handleInputValChange}/>
            <ul className="list-group" style={{"color":this.state.color}}>
               {this.props.users.map(function(user, index) {
                  if (index < number)
                  {return <ResultItem key={user.id} name={user.first_name} lastName={user.last_name}>1</ResultItem>
                  }
               })}
            </ul>
            </div>
      )}
})

var ResultItem = React.createClass({
   getInitialState: function () {
      return {

         color: "green"
      }
   },
   componentWillMount: function () {
      var newColor = function getRandomColor() {
         var h = Math.floor(Math.random() * (255 - 1) + 1);
         var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
         var l = '50%';
         var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
         return randomColor;
      }

      this.setState({color:newColor()});
   },
   render: function() {
      return (
            <li style={{"color":this.state.color}} className="list-group-item">{this.props.name} {this.props.lastName}</li>
      )}
});
var container = document.getElementById('example');
ReactDOM.render(<List></List>, container);
