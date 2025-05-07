import * as React from 'react';
import MainNavigator from './navegacion/MainNavigator';
import { StatusBar } from 'react-native';
import { CarritoProvider } from './componentes/ContextoCarro';



export default function App(){
  return (
    <>
    <CarritoProvider>
      {/* Esto cambia el color del texto/íconos del sistema */}
      <StatusBar 
        barStyle="light-content"
        
      />

      {/* Tu navegador principal */}
      <MainNavigator />
      </CarritoProvider>
    </>
  );
}
