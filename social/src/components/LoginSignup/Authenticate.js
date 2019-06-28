import React from 'react';
import SignInForm from './SignInForm';

const Authenticate = component => 
class extends React.Component {
    state = {loggedIn: false};
     componentDidMount() {
         if ( (localStorage.getItem('username'))) {
             this.setState({
                 loggedIn: true
             })
         }
     }
    render() {
      return (
          <div>
            {this.state.loggedIn ? <component /> : <SignInForm />}
          </div>
      )
    }
}

export default Authenticate;