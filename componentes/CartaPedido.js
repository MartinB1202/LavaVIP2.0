import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { domoloc } from "../funciones/funCartaPedido"; 
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../credenciales';
import styles from '../Estilos/estilosCPedido';






export default function CartaPedido({item}) {


  
const elminarPedido = async(idPedido)=>{
  try{
    await deleteDoc(doc(db,'pedidos', idPedido));

  }catch(error){
    console.log('Error al eliminar el pedido', error);
  }
};

  return (

   
 <View>
        
        <View style={styles.contenedor}>
        <Text style={styles.titulo}>Resumen de pedido</Text>
        <View style={styles.contenedorImagen}>
        <Image style={styles.covertura} 
        source={{uri:item.productos[0].imagen}} 
        />
        </View>
        </View>

        <View style={styles.contenido}>
         <Text>Resumen del Pedido</Text> 
          {item.productos.map((producto, i) => (
        <View key={i}>
          <View>
            <Text>Carga: {producto.carga}</Text>
          </View>
        </View>
      ))}
        <Text>Tipo de Entrega: {item.entrega}</Text>
        <Text>{domoloc(item)}</Text>
        <Text>Estado del pedido: {item.estado}</Text>
        <Text>Total: ${item.total}</Text>
        </View>
    
    <TouchableOpacity style={styles.borrar}>
            <FontAwesome6Icon name="trash-can" color={'red'} 
            size={24} 
            onPress={()=>elminarPedido(item.id)} />
            </TouchableOpacity>
    
    </View>
    

  )
}
