import './App.css';
import Routes from './Routes';
import {Global } from '@emotion/react';
import { global } from './style';



function App() {
  return (
    <div className="App">
      <Global styles={global} />
      <Routes />
    </div>
  );
}

export default App;
