import React from 'react';
import Login from '../pantallas/Login';
import Registro from '../pantallas/Registro';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, CherryCreamSoda_400Regular} from '@expo-google-fonts/cherry-cream-soda'
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StatusBar } from 'react-native';
const Stack = createStackNavigator();


export default function DrawerLogin() {
  
  let [fontLoaded] = useFonts({
    CherryCreamSoda_400Regular,
  });
  if(!fontLoaded){
    return null;
  }
  
  return (
   

      <Stack.Navigator >
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "LAVAVIP", // Título que aparece en el header
                  
                  headerTintColor: "white", // Color del texto del header
                  headerTitleAlign: 'center', // Centra el título
                  headerStyle: { 
                    backgroundColor: '#ADADAD',
                    
                    height: 105
                  }, // Color de fondo del header
                  headerTitleStyle:{
                    fontFamily: 'BungeeShade_400Regular',
                    fontSize: 45, 
                    color: 'white'

                  },
                  headerShown: false
                
                  }}
        />

        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{
            title: "LAVAVIP",
            headerTintColor: "white", 
                  headerTitleAlign: 'center',  
                  headerStyle: { 
                    backgroundColor: '#162225',
                    
                    height: 105
                  },
                  headerTitleStyle:{
                    fontFamily: 'CherryCreamSoda_400Regular',
                    fontSize: 45, 
                    color: 'white'
          
                  },      
           

          }}
           // Color de fondo del header
          
        />
      </Stack.Navigator>
   
  );
}