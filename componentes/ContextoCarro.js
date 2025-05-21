// context/CarritoContext.js
import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (item, carga) => {
    setCarrito(prev => [...prev, { ...item, carga }]);
  };

  const totalSum = () => {
  return carrito.reduce((acc, item) => {
    const { carga } = item;

    const obtenerPrecio = () => {
      switch (carga) {
        case item.CargaP:
          return Number(item.precioProd || 0);
        case item.Individual:
          return Number(item.PrecioInd || 0);
        case item.CargaM:
          return Number(item.precioProd || 0);
        case item.Matrimonial:
          return Number(item.PrecioMat || 0);
        case item.CargaG:
          return Number(item.precioProd || 0);
        case item.Kingsize:
          return Number(item.PrecioKing || 0);
        case item.Tenis:
          return Number(item.PrecioT || 0);
        case item.Zapatos:
            return Number(item.PrecioZ ||0);
        case item.Botas:
            return Number(item.PrecioB || 0);
        default:
          return 0;
      }
    };

    return acc + obtenerPrecio();
  }, 0);
};
  
  const eliminarDelCarrito = (index) => {
    setCarrito(prev => prev.filter((_, i) => i !== index));
  };
  
  const vaciarCarrito = () => {
  setCarrito([]);
};
  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, totalSum, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
