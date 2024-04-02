import React from 'react';
import LoginComponent from './LoginComponent';
import { Routes, Route} from 'react-router-dom';
import AfterLoginComponent from './AfterLoginComponent';
import MainComponent from './MainComponent';
function App() {
  return (
    
     
      <div>
        
        <Routes>
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/" element={<MainLayout />} />
         
          <Route path="/AfterLogin" element={<AfterLoginLayout/>}/>
        </Routes>
      </div>
   
  );
}

function MainLayout() {
  return (
    <div>
      <h1>Main Page</h1>
      <MainComponent />
    </div>

  );
}


function LoginLayout() {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginComponent />
    </div>
  );
}


function AfterLoginLayout(){
  return (
    <div>
      <h1> success</h1>
    <AfterLoginComponent/>
    </div>

  )
}


export default App;
