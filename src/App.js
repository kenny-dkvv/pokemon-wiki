import './App.css';
import Routes from './Routes';
import {Global } from '@emotion/react';
import { all } from './style';



function App() {
  return (
    <div className="App">
      <Global styles={all} />
      <Routes />
    </div>
  );
}

export default App;
