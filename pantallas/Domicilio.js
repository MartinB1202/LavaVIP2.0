import React, { Component, useState, useEffect,useCallback } from "react";
import {StyleSheet, View, Image, TouchableOpacity,  TextInput, Text, Alert, ScrollView, FlatList} from "react-native";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { doc, getDoc, getDocs, getFirestore, query, collection, where, orderBy, limit } from "firebase/firestore";
import appfirebase from "../credenciales";
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Estilos/estilosUsuario";
import CartaPedido from "../componentes/CartaPedido";
import { useFocusEffect } from "@react-navigation/native";

//Obtiene 
const db = getFirestore(appfirebase);
const auth = getAuth(appfirebase);


export default function Domicilio(){

const[datosPedido, setDatosPedido] = useState([]);

useFocusEffect(
  useCallback(() => {
    const obtenerPedidos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'pedidos'));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setDatosPedido(docs); // esta debe ser tu función de estado
      } catch (error) {
        console.log('Error al obtener pedidos:', error);
      }
    };

    obtenerPedidos();
  }, [])
);







const cerrarS = async ()=>{
    try{
        signOut(auth);

    }catch(error){
      console.log(error);
    }


}



    return (

    

    
<FlatList
  data={datosPedido}
  keyExtractor={(item, index) => item.id}
  renderItem={({ item }) => 
  <CartaPedido item={item}/>}
  ListEmptyComponent={<Text>No hay pedidos aún</Text>}
/>


    );
}


