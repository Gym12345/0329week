// LoginComponent.js
import React, { useState } from 'react';


function LoginComponent() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  
 


  const handleLogin = async (e) => {
    e.preventDefault();
   
  
    try {
      const response = await fetch('http://localhost:8090/myfirstApp/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ userId, password })
      })
      ;

      if (!response.ok) {
        throw new Error('network error');
      }else{
        const userName=await response.text();
        if(userName !== "noInfo"){
          alert("login successful:"+userName);
          
          window.open('AfterLogin', '_self');
        }
        else{
          alert("invalid login result:"+userName);
        }

        // Handle successful login here, e.g., redirect user to dashboard
        //alert(message);
      }

    } catch (error) {
      alert(error);
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>UserId:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginComponent;
