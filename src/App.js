import React from 'react';
import './style.css';
import GlobalStateProvider from './context/GlobalStateProvider';
import Child from './Child';
export default function App() {
  return (
    <div>
      <GlobalStateProvider>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Child />
      </GlobalStateProvider>
    </div>
  );
}
