import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { onAuthStateChanged } from 'firebase/auth'; 
import { auth } from '../credenciales'; 
import DrawerLogin from './DrawerLogin';
import TabsNavigator from './TabNavigator';
import { signOut } from 'firebase/auth';
import StackN from './StackN';

// Creamos una instancia del Drawer
const Drawer = createDrawerNavigator();

// Componente principal de navegación
export default function MainNavigator() {

  // Estados para el usuario y para saber si ya se cargó la sesión
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 //signOut(auth)
  // useEffect que escucha si el usuario está logueado o no
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {

      setUser(usuarioFirebase); // Guardamos el usuario en el estado
      setLoading(false); // Ya cargó, dejamos de mostrar loading

    });

    return unsubscribe; // Limpiamos el listener cuando el componente se desmonta
  }, []);


  if (loading) return null; 

  // Retornamos la navegación según si hay un usuario logueado o no
  return (
          user ? ( // Si hay usuario logueado
            <>
            <NavigationContainer>
              <StackN/>
            </NavigationContainer>
            </>
          ) : ( // Si NO hay usuario logueado
            <>
             <NavigationContainer>
              <DrawerLogin/>
            </NavigationContainer>
            
            </>
          )
        
      
  );
}
