import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { domoloc } from "../funciones/funCartaPedido"; 

import styles from '../Estilos/estilosCPedido';






export default function CartaPedido({item}) {
 


  return (

   
 <View>
        
        <View style={styles.contenedor}>
        <Text style={styles.titulo}>{item.productos[0].carga}</Text>
        <View style={styles.contenedorImagen}>
        <Image style={styles.covertura} 
        source={{uri:item.productos[0].imagen}} 
        />
        </View>
        </View>

        <View style={styles.contenido}>
        
        <Text>Total: ${item.total}</Text>
        <Text>Tipo de Entrega: {item.entrega}</Text>
        <Text>{domoloc(item)}</Text>
        <Text>Estado del pedido: {item.estado}</Text>
        
        </View>
    </View>
    

  )
}
