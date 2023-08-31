import React, { useState, useEffect, createContext } from 'react';
const GlobalStateContext = createContext({});
const GlobalStateProvider = ({ children }) => {
  const url = 'https://dummyjson.com/products';
  const [rows, setRow] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((d) => d.json())
      .then((item) => setRow(item.products))
      .catch((error) => console.log(error));
  }, []);
  const width = '100px';
  const message = 'thik hai sab kuch';
  const allData = {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  };
  const onlyRow = rows.filter((item) => item.id === 4);
  return (
    <GlobalStateContext.Provider
      value={{
        width,
        message,
        allData,
        onlyRow,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalStateProvider;
export { GlobalStateContext };
