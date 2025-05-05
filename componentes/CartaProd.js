import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import styles from '../Estilos/estilosCP';



const { width } = Dimensions.get('window');


export default function CartaProd({item}) {
  
const navigation = useNavigation();
  return (

    <View style={styles.contenedor}>
      
      <TouchableOpacity onPress={()=> navigation.navigate('DetalleArticulo', {item})}>
        
        <View style={styles.contenedorI}>
        <Image style={styles.covertura} 
        source={{uri:item.imagen}} 
        />
        </View>

        <View style={styles.contenido}>
        <Text style={styles.titulo}>{item.tipoProd}</Text>
        </View>


      </TouchableOpacity>
    </View>
    

  )
}
