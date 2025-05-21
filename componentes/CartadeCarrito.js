import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import { useCarrito } from "./ContextoCarro";


export default function CartadeCarrito({item, carga, index}){

    const {eliminarDelCarrito} = useCarrito();
    const obtenerPrecio = ()=>{
        switch(carga){
            case item.CargaP:
                return item.precioProd;
            case item.Individual:
                return item.PrecioInd
            case item.CargaM:
                return item.precioProd;
            case item.Matrimonial:
                return item.PrecioMat;
            case item.CargaG:
                return item.precioProd;
            case item.Kingsize:
                return item.PrecioKing;
            case item.Tenis:
                return item.PrecioT;
            case item.Zapatos:
                return item.PrecioZ;
            case item.Botas:
                return item.PrecioB
            
        }

    };

    const PrecioFinal = obtenerPrecio();

    return(
    <View style={styles.contenedor}>
        <Image source={{uri: item.imagen}} style={styles.imagen}></Image>
        

        <View style={ styles.contenedorT}>
           <Text style={styles.titulo}>{item.tipoProd}</Text> 
           <Text style={styles.precio}>$ {PrecioFinal}.00</Text>
           
           <Text>{carga}</Text>
        </View>
        
        <TouchableOpacity>
        <FontAwesome6Icon name="trash-can" color={'red'} 
        size={24} onPress={()=>eliminarDelCarrito(index)} />
        </TouchableOpacity>
    </View>

    
)



}


const styles = StyleSheet.create({
    contenedor:{
        marginVertical: 50,
        flexDirection: 'row'
    },
    
    imagen:{
        width: 150,
        height: 125
    },
    contenedorT:{
        flex: 1,
        
    },

    titulo:{
        fontSize: 20,
        color: 'white',
        fontWeight: "600",
        
    },
    
    precio: {
        color: 'white',
        fontSize: 18,
        marginVertical: 10
    },

})