import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';

class App extends React.Component {
  render(){
    return (<h1>Compiled!</h1>);
  }
}

document.addEventListener("DOMContentLoaded", function() {

  ReactDOM.render(
    <App />,
    document.getElementById("root")
  )
});
