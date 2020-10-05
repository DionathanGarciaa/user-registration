import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index';
import GlobalStyle from './Styles/global';



function App() {

  return (

    <>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>

  );

}

export default App;
