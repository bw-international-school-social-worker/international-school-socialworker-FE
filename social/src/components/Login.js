import React from 'react';

class Login extends React.Component {
    render () {
      return (
       <div className='login'>
         <h3>Login</h3>
         <form>
           <div>
             <input
             type='text'
             placeholder='Email' 
             />  
           </div>
           <div>
             <input
             type='password'
             placeholder='Password'  
             />
           </div>  
         </form>
       </div>
       );
     }
  }
  
  export default Login;
  