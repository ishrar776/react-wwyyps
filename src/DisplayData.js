import React, { useContext } from 'react';
import { GlobalStateContext } from './context/GlobalStateProvider';
export default function DisplayData() {
  const { allData, onlyRow } = useContext(GlobalStateContext);
  return (
    <div>
      <p>{JSON.stringify(allData)}</p>
      <p>{allData.id}</p>
      <p>{allData.rating}</p>
      <p>{JSON.stringify(onlyRow)}</p>
    </div>
  );
}
