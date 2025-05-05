import * as React from 'react';
import MainNavigator from './navegacion/MainNavigator';
import { StatusBar } from 'react-native';
import { View } from 'react-native-web';



export default function App(){
  return (
    <>
      {/* Esto cambia el color del texto/íconos del sistema */}
      <StatusBar 
        barStyle="light-content"
        
      />

      {/* Tu navegador principal */}
      <MainNavigator />
    </>
  );
}
