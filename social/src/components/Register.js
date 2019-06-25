import React from 'react';

class Register extends React.Component {
    render () {
      return (
       <div className='register'>
         <h3>Sign Up</h3>
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
  
  export default Register;
  