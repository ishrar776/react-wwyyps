import React from 'react';
import './style.css';
import GlobalStateProvider from './context/GlobalStateProvider';
import Child from './Child';
import DisplayData from './DisplayData';
export default function App() {
  return (
    <div>
      <GlobalStateProvider>
        <h1>Hello Israr</h1>
        <p>Start editing to see some magic happen :)</p>
        <Child />
        <DisplayData />
      </GlobalStateProvider>
    </div>
  );
}
