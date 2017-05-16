var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
var Redirect = router.Redirect;
var Page1 = require('./pages/page1.jsx');
var Page2 = require('./pages/page2.jsx');


class App extends React.Component {
   render() {
      return (
            <div>
               <div id="container" className="panel well">
                  <h1>~ * React Routing * ~ </h1>
                  <ul>
                     <li><Link to="/listView"><button className="btn btn-lg btn-success">ListView</button></Link></li>
                     <li><Link to="/tableView"><button className="btn btn-lg btn-success">TableView</button></Link></li>
                  </ul>
               </div>
               <div className="panel">{this.props.children}</div>
            </div>
      )}
}

class Home extends React.Component {
   render() {
      return (
            <h3>This is the homepage</h3>
      )}
}

function animation() {
   alert('hello!');
}

// конфигурация маршрутизации - набор инструкций, которые устанавливают связь между URL и кодом приложения.
ReactDOM.render(
      <Router history={hashHistory}>
         <Route path='/' component={App}>
            {/*путь по умолчанию (IndexRoute) */}
            <IndexRoute component={Home} />
            <Route path="listView" component={Page1} onEnter={animation}/>
            <Route path="tableView" component={Page2} onEnter={animation}/>
            <Redirect from="*" to="/"/>
         </Route>
      </Router>, document.getElementById('app'));
