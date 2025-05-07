// navigation/TabsNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Casa from '../pantallas/Casa';
import Usuario from '../pantallas/Usuario';
import Domicilio from '../pantallas/Domicilio';
import Carrito from '../pantallas/Carrito';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import Constants from 'expo-constants'
import { Platform } from 'react-native';
import DetalleArticulo from '../pantallas/DetalleArticulo';
import {Amiri_400Regular} from '@expo-google-fonts/amiri'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackN(){

  return(
    <Stack.Navigator >
      
      <Stack.Screen name='Casa' component={Casa} options={{
        headerShown: false
      }}/>

      <Stack.Screen name='DetalleArticulo' component={DetalleArticulo} options={
        {
          headerShown: false
        }
      }/>
  
        
      </Stack.Navigator>


  )


}


export default function TabsNavigator() {

   
   


  return (
    
 
    
    
    
    
    
    <Tab.Navigator
    
    screenOptions={{
      tabBarActiveTintColor: 'white',    // Color cuando está activo
      tabBarInactiveTintColor: 'gray',     //Color cuando NO está activo
      tabBarStyle: {
        paddingBottom: 10, // Espacio extra en toda la barra
        height: 60,        // Altura de la barra
        backgroundColor: '#121111', // Fondo
      },
      tabBarLabelStyle: {
        paddingBottom: 5,  // Espacio para el texto
        fontSize: 12,      // Tamaño del texto
      },
      tabBarIconStyle: {
        marginTop: 5,      // Espacio para los íconos
      
      
      },
      
      
    }}>
      <Tab.Screen name="StackN" component={StackN} options={{
        tabBarIcon: ({color, size})=>(
          <Icon name='home' size={size} color={color}/>
        ),
        headerTitle: 'LAVAVIP',
        headerTitleStyle:{
          fontSize:45

        },
        
        title:'Inicio'

        
      }} />
      <Tab.Screen name="Domicilio" component={Domicilio} options={{
        tabBarIcon: ({color, size})=>(
          <MaterialCommunityIcons name='truck-delivery' size={size} color={color}/>
        ),
        title:'Entregas'
      }} />
     <Tab.Screen name="Carrito" component={Carrito} options={{
        tabBarIcon: ({color, size})=>(
          <FontAwesome6Icon name='cart-shopping' size={size} color={color}/>
        ),
        title:'Carrito',
        headerShown: false
      }} />
      <Tab.Screen name="Usuario" component={Usuario} options={{
        tabBarIcon: ({color, size})=>(
          <FontAwesome6Icon name='circle-user' size={size} color={color}/>
        ),
        headerShown: false,
        
      
      }} />

    
      
      

    </Tab.Navigator>

    
  );
  
}
