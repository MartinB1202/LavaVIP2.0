import React, { Component, useState, useEffect } from "react";
import {StyleSheet, View, Image, TouchableOpacity,  TextInput, Text, Alert} from "react-native";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import appfirebase from "../credenciales";
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Estilos/estilosUsuario";


//Obtiene 
const db = getFirestore(appfirebase);
const auth = getAuth(appfirebase);


export default function Usuario(){

const[datosU, setDatosU] = useState();


useEffect(() =>{
    const mostrarU = async() =>{
        onAuthStateChanged(auth, async(usuarioFirebase)=>{
            if(usuarioFirebase){
                const refUsuario= doc(db, "usuarios", usuarioFirebase.uid);
                const docSnap = await getDoc(refUsuario);

                if(docSnap.exists()){
                    setDatosU(docSnap.data());
                }else{
                    console.log('No se encontro');
                }
            }
        });
    };
mostrarU();
},[]);

const cerrarS = async ()=>{
    try{
        signOut(auth);

    }catch(error){
      console.log(error);
    }


}



    return (

    

         <LinearGradient 
        colors={['#121111', '#2E7B8C', '#214054', '#222638']}
        start={{x:1, y:1}}
        end={{x:0, y:0}}
         style={styles.padre}>
           
        
                   <View>
                        <Image source={require('../assets/usuario2.jpg')} style={styles.profile}/>
                    
                    </View> 
                    
                    <View style={styles.tarjeta}>
                        <Text style={{textAlign:'center', color: 'white'}}>Hola, </Text>
                        <View style={styles.cajaTexto}>
                            <Text style={{paddingHorizontal:15, textAlign:'center', fontSize:30}}>
                                {datosU?.nombre}
                            </Text>
                        </View>

                        <View style={styles.cajaTexto}>
                            <View style={{paddingHorizontal:15, flexDirection: 'row', alignItems:'center'}}>
                            <MaterialIcons name="smartphone" size={24} color="#000" style={{marginRigth:10}}/>
                            <Text style={{paddingHorizontal:15, paddingLeft: 20}}>
                                Telefono Celular:{"\n"}
                                {datosU?.telefono}
                            </Text>
                            </View>
                        </View>
        
                        <View style={styles.cajaTexto}>
                            <View style={{paddingHorizontal:15, flexDirection: 'row', alignItems:'center'}}>
                            <Icon name="mail" size={24} color="#000" style={{marginRigth:10}}/>
                            <Text style={{paddingHorizontal:15, paddingLeft: 20}}>
                                Correo Electronico:{"\n"}
                                {datosU?.email}
                            </Text>
                            </View>
                        </View>
        
                        <View style={styles.cajaTexto}>
                            <View style={{paddingHorizontal:15, flexDirection: 'row', alignItems:'center'}}>
                            <FontAwesome6 name="map-location" size={24} color="#000" style={{marginRigth:10}}/>
                            <Text style={{paddingHorizontal:15, paddingLeft: 20}}>
                                Direccion del Cliente:{"\n"}
                                {datosU?.direccion}
                            </Text>
                            </View>
                        </View>
        
                        <View style={styles.PadreBoton}>
                            <TouchableOpacity style={styles.cajaBoton} onPress={cerrarS}>
                            <Text style={styles.TextoBoton} >Cierra Sesion</Text>
                            </TouchableOpacity>
                                            
                        </View>
                            
                        </View>
                        
                </LinearGradient>
 
    );
}


