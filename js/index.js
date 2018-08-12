import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { firebaseApp } from './fire';
import { logUser } from './actions';
import reducer from './reducers';

import App from './app.js';
import SignIn from './components/sign_in.js';
import SignUp from './components/sign__up.js';

const store = createStore(reducer);


// firebaseApp.auth().onAuthStateChanged(user => {
//     if (user) {
//         // console.log('user has signed in or up', user);
//         const { email } = user;
//         store.dispatch(logUser(email));
//         browserHistory.push('/app');
//     } else {
//         // console.log('user has signed out or still needs to sign in');
//         browserHistory.replace('signin');
//     }
// });

const Root = () => {
  return (
    <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={App} />
            </Switch>
          </div>
        </Router>
      </Provider>
  );
};

const render = (Component) => {
  ReactDOM.render(
    
      <Component />,
   
    document.getElementById('root'),
  );
};

render(Root);


// document.addEventListener("DOMContentLoaded", function() {
//   ReactDOM.render(
//     <Provider store={store}>
//         <Router>
//           <div>
//             <App />
//             <Switch>
//               <Route path="/signin" component={SignIn} />
//               <Route path="/signup" component={SignUp} />
//               <Route path="/" component={App} />
//             </Switch>
//             <Footer />
//           </div>
//         </Router>
//       </Provider>, document.getElementById('root')
//   )
// });
