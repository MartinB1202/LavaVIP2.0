import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import {Text, StyleSheet, View, TouchableOpacity, FlatList, Platform, Image, Alert, ScrollView} from "react-native";
import CartadeCarrito from "../componentes/CartadeCarrito";
import { useRoute } from "@react-navigation/native";
import { useCarrito } from "../componentes/ContextoCarro";
import {useFonts, Amiri_400Regular } from "@expo-google-fonts/amiri";
import { obtenerDatosUsuario, enviarPedido } from "../funciones/obtenerU";
import { preciodef } from "../funciones/preciodef";


export default function Carrito(){

    let [fontLoaded] = useFonts({
        Amiri_400Regular,
      });
      
const route = useRoute();
const params = route.params || {};
const {item, carga} = params 
const [tipoEntrega, setTipoEntrega] = useState(null);


const {carrito, totalSum, vaciarCarrito} = useCarrito();


const confirmarCompra = async() =>{
    if(!tipoEntrega){
    Alert.alert("Selecciona un tipo de entrega antes de confirmar");
    return;
    }
    try{

        const datosU = await obtenerDatosUsuario();
        await enviarPedido({
            carrito, 
            total: total,
            datosU,
            tipoEntrega,
        });
        vaciarCarrito();
    }catch(error){
        console.log('Error', error);
    }
};


const total = preciodef(totalSum(), tipoEntrega);

  if (!fontLoaded) return null;

  if (carrito.length === 0) {
    return (
      <View>
       
        <View style={styles.contenedorImagen}>
          <Image source={require('../assets/Carritovacio.png')} style={styles.imagen2} />
        </View>
      </View>
    );
  }
    
     


        return (
        <LinearGradient style={styles.contenedorP} 
        colors={['#121111', '#4C4C4C', '#6A6A6A', '#828282', '#ADADAD', '#ACB6BD']}
        
        >
            <ScrollView>
            <View style={styles.subcontenedor1}>
                <Text style={styles.textoT}>Mi carrito</Text>             
            </View>
            
            <View>            
            <FlatList data={carrito}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <CartadeCarrito item={item} carga={item.carga} index={index} />}
            />
            </View>

                
    <View style={styles.precioyt}>
                <Text style={styles.texto}>Selecciona tipo de entrega:</Text>
        
        
        <TouchableOpacity
                style={[
                    styles.opcionEntrega,
                    tipoEntrega === 'domicilio' && styles.seleccionado
             ]}
             onPress={() => setTipoEntrega('domicilio')}>
                <Text style={styles.textoEntrega}>Entrega a domicilio $45.00</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
            style={[
                 styles.opcionEntrega,
                 tipoEntrega === 'tienda' && styles.seleccionado
             ]}
            onPress={() => setTipoEntrega('tienda')}>
                <Text style={styles.textoEntrega}>Recoger en tienda</Text>
        </TouchableOpacity>
           
           
    </View>



            <View style={styles.contenedortotal}>
            <View style ={styles.precioyt} >
                <Text style={styles.texto}>SubTotal:  ${total}</Text>
            
            </View >
            <View style={styles.divisor}/>
            <View style ={styles.precioyt}>
                <Text style={styles.texto}>Precio Total: ${total}</Text>    
            </View>   
            </View>
          

            <TouchableOpacity style={styles.contenedorBoton} onPress={()=>confirmarCompra()}>
                <Text style={styles.textoboton}>CONFIRMACION</Text>
            </TouchableOpacity>
            </ScrollView>
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

    

}

const styles = StyleSheet.create({
   
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
    },
    
    contenedorImagen0:{
        alignItems: 'flex-end'
    },

    contenedorImagen:{
        alignItems: 'center',
        marginTop: 100
    },

    imagen1:{
        width: 200,
        height: 200,
        
        
    },

    imagen2:{

        width: 400,
        height: 400,
        marginTop: 110
    },

    opcionEntrega:{
        borderRadius: 20,
        backgroundColor: 'black',
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
      
        
    },  

    seleccionado:{
     backgroundColor: '#2E7B8C',
     borderColor: 'white',
     borderWidth: 1, 
     
   },
   
  

   textoEntrega:{
       fontSize: 20,
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontFamily: 'Amiri_400Regular',
       
    
   }

});


