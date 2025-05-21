import React, { useState } from "react";
import {StyleSheet, View, Image, TouchableOpacity,  TextInput, Text, Alert,  ScrollView,StatusBar} from "react-native";
import appfirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { auth} from "../credenciales";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import styles from "../Estilos/estilosRegistro";
import { LinearGradient } from "expo-linear-gradient";


const db = getFirestore(appfirebase);

export default function Registro(props){

const[email, setEamail] = useState();
const[contrasena, setContrasena] = useState();
const[cliente, setCliente] = useState();
const[direccion, setDireccion] = useState();
const[telefono, setTelefono] = useState();


const registroUsuario = async ()=>{
    try{
        const credUsuario = await createUserWithEmailAndPassword(auth, email, contrasena);
        const usuario = credUsuario.user;

        await setDoc(doc(db, "usuarios", usuario.uid),{
            nombre: cliente,
            direccion: direccion,
            email: email,
            telefono: telefono,
            creado: new Date()
        });

        Alert.alert("Registro Exitoso");
        props.navigation.navigate('Login');
    }catch(error){
      console.log(error);
    }


}

    return (
        
        
        <ScrollView 
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator= {false}>
       
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
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Nombre Completo' style={{paddingHorizontal:15}}
                    onChangeText={(text)=>setCliente(text)}/>
                    
                </View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Direccion' style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setDireccion(text)} 
                    />
                </View>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Telefono' style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setTelefono(text)} 
                    />
                </View>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Correo' style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setEamail(text)} 
                    />
                </View>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder='contraseña' style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setContrasena(text)} secureTextEntry={true}
                    />
                </View>
                

                <View style={styles.PadreBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={registroUsuario}>
                        <Text style={styles.TextoBoton}>Registrate</Text>
                    </TouchableOpacity>
                    
                </View>
                    <TouchableOpacity style={{alignItems: "center", paddingTop: 40}}
                    onPress={()=> props.navigation.navigate('Login')} >
                        <Text>¿Ya tienes cuenta? INICIA SESION</Text>
                    </TouchableOpacity>
                
            </View>
        </LinearGradient>
       
        </ScrollView>

    );
}


