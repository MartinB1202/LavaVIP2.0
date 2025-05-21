import React, { Component, useState } from "react";
import {StyleSheet, View, Image, TouchableOpacity,  TextInput, Text, Alert} from "react-native";
import appfirebase from "../credenciales";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../credenciales";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import styles from "../Estilos/estilosLogin";
import {useFonts, CherryCreamSoda_400Regular} from '@expo-google-fonts/cherry-cream-soda'

 


export default function Login(props){

const[email, setEamail] = useState();
const[contrasena, setContrasena] = useState();

const inicia = async()=>{
    try{
        await signInWithEmailAndPassword(auth, email, contrasena)
        Alert.alert('Iniciando sesion','Accediendo...')
    }catch(error){
        Alert.alert(error.mesagge)
        console.log(error);
    }

}

let [fontLoaded] = useFonts({
    CherryCreamSoda_400Regular,
  });
  if(!fontLoaded){
    return null;
  }

    return (
        
          
        <LinearGradient
        colors={['#121111', '#4C4C4C', '#6A6A6A', '#828282', '#ADADAD', '#ACB6BD']}
        start={{x:1, y:1}}
        end={{x:0, y:0}}
        style={styles.padre}>
        <StatusBar
        barStyle='light-content'
        />  

        <View>
        
        <Image source={require('../assets/Lavanderia.png')} style={styles.profile}/>
        </View>
           <View>
            
                
            
            </View> 
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='correo@gmail.com' style={{paddingHorizontal:15}}
                    onChangeText={(text)=>setEamail(text)}/>
                    
                </View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='contraseña' style={{paddingHorizontal:15}} onChangeText={(text)=>setContrasena(text)} secureTextEntry={true}
                    />
                </View>

                <View style={styles.PadreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={inicia}>
                        <Text style={styles.TextoBoton}>Inicia Sesion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cajaBoton} onPress={()=> props.navigation.navigate('Registro')}>
                        <Text style={styles.TextoBoton}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>

        
        </LinearGradient>
       
    );
}


