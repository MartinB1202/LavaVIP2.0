// navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Casa from '../pantallas/Casa';
import DetalleArticulo from '../pantallas/DetalleArticulo';
import TabsNavigator from './TabNavigator';


const Stack = createNativeStackNavigator();

export default function StackN() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabsNavigator} options={{
        headerShown: false
      }} />
      <Stack.Screen name="DetalleArticulo" component={DetalleArticulo} options={{
        title: "Detalles",
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor: '#162225'
          
        }
        
      }} />
    </Stack.Navigator>
  );
}
