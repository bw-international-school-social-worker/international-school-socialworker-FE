import React from 'react';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='App'>

          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>

          <div>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login} />
          </div>

       </div>
     </Router>
     );
   }
}

export default App;
