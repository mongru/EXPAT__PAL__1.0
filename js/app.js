import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import {firebaseApp} from './fire';
import '../scss/main.scss';
//console fun
import 'console-dot-frog';

// -------> COMPONENTS
import Template from './components/template.js';

class App extends React.Component {

  // signOut() {
  //   firebaseApp.auth().signOut();
  // }

  render() {
    console.log('%cWelcome! Happy to see you here :) I\'m still learning and I\'d love to find a place where I could work, learn and become a great front-end dev one day. If you\'re looking for a nice and motivated person to grow your team or just simply feel like saying \'hello\', don\'t hesitate to drop me a line:', 'font-size: 1.2em; line-height: 2em; color: blue;');
    console.frog('monika.grubizna@gmail.com');

    return <Template/>;
  }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {};
}

export default connect(mapStateToProps, null)(App);

// export default App;


// document.addEventListener("DOMContentLoaded", function() {

//   ReactDOM.render(
//     <App/>, document.getElementById("root"))
// });
