import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index';
// import GlobalStyle from './Styles/global';
import Login from './Pages/Login/index';
import CreateAccount from './Pages/CreateAccount/index';


function App() {

  return (

    <>
      <BrowserRouter>
        <Routes />
        <Login />
      </BrowserRouter>
    </>

  );

}

export default App;
