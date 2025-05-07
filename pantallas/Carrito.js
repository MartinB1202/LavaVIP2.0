import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {Text, StyleSheet, View, TouchableOpacity, FlatList, Platform} from "react-native";
import CartadeCarrito from "../componentes/CartadeCarrito";
import { useRoute } from "@react-navigation/native";
import { useCarrito } from "../componentes/ContextoCarro";
import {useFonts, Amiri_400Regular } from "@expo-google-fonts/amiri";


export default function Carrito(){

    let [fontLoaded] = useFonts({
        Amiri_400Regular,
      });
      if(!fontLoaded){
        return null;
      }


    const route = useRoute();
    const params = route.params || {};
    const {item, carga} = params 
    const {carrito} = useCarrito();



    if(carrito.length===0){
        return(
            <View>
                <Text>No hay productos en el carrito</Text>
            </View>
        );
    }

        return (
        <LinearGradient style={styles.contenedorP} 
        colors={['#121111', '#4C4C4C', '#6A6A6A', '#828282', '#ADADAD', '#ACB6BD']}
        
        >
            <View style={styles.subcontenedor1}>
                <Text style={styles.textoT}>Mi carrito</Text>             
            </View>
            
            <View>            
            <FlatList data={carrito}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <CartadeCarrito item={item} carga={item.carga} />}
            />
            </View>

                
                

           

            <View style={styles.contenedortotal}>
            <View style ={styles.precioyt} >
                <Text style={styles.texto}>SubTotal:</Text>
            
            </View >
            <View style={styles.divisor}/>
            <View style ={styles.precioyt}>
                <Text style={styles.texto}>Precio Total:</Text>    
            </View>   
            </View>
            <TouchableOpacity style={styles.contenedorBoton}>
                <Text style={styles.textoboton}>CONFIRMACION</Text>
            </TouchableOpacity>
            
        </LinearGradient>

    );

}

const estilosWeb = {
    contenedorP: {
        flex: 1
    },  

    subcontenedor1:{
        alignItems: 'center',
        marginTop: 30
    },

    textoT: {
        fontFamily: 'Amiri_400Regular',
        fontSize: 100,
        color: 'white'
    },

    precioyt:{
       
        justifyContent: 'space-between',
        marginHorizontal: 20,

    }, 

    texto:{
        color: 'white',
        fontSize: 18,
    },

    divisor:{
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20
    },

    contenedorBoton:{
        backgroundColor: 'black',
        marginVertical: 10,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20
        
        
    }, 
    
    textoboton:{
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        padding: 10
    }

    
}

const estilosApp = {
    contenedorP: {
        flex: 1
    },  

    subcontenedor1:{

        alignItems: 'center',
        marginTop: 30
    },

    textoT: {
        fontFamily: 'Amiri_400Regular',
        fontSize: 70,
        color: 'white'
    },

    precioyt:{
       
        justifyContent: 'space-between',
        marginHorizontal: 20,

    }, 

    texto:{
        color: 'white',
        fontSize: 18,
    },

    divisor:{
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20
    },

    contenedorBoton:{
        backgroundColor: 'black',
        marginVertical: 10,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20
        
        
    }, 
    
    textoboton:{
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontFamily: 'Amiri_400Regular'
    }


}

const styles = StyleSheet.create(
   
Platform.OS === 'web' ? estilosWeb: estilosApp

);


