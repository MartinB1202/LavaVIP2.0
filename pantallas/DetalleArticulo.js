import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import appfirebase from '../credenciales';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { useRoute } from '@react-navigation/native';




export default function DetalleArticulo() {
  
 const route = useRoute();
 const {item} = route.params 
  
  
  
  return (
    
    <View>
      <Image style={styles.Cimagen} source={{uri: item.imagen}}/>
      <Text>Ropa en general, esto incluye mezclilla, sueteres, playeras, camisas, pantalones de vestir, etc.</Text>
      <Text>NO PUEDE ENVIAR ROPA INTERIOR YA QUE ESTA NO ESTA INCLUIDA EN NUESTRO SERVICIO DE LAVADO</Text>
      <TouchableOpacity><Text>Carga peque (Menor a 10kg)</Text></TouchableOpacity>
      <TouchableOpacity><Text>Carga mediana (Mayor a 10kg y menor a 20kg)</Text></TouchableOpacity>
      <TouchableOpacity><Text>Carga grande(Mayor a 20 kg)</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  Cimagen:{
    width: "100%",
    height: 360, 
  } 


})