import React, { useContext } from 'react';
import {GlobalStateContext} from './context/GlobalStateProvider';
export default function Child() {
  const { width, message } = useContext(GlobalStateContext);
  return (
    <div>
      <p>{message}</p>
      <p>{width}</p>
    </div>
  );
}
