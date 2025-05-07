import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCarrito } from "../componentes/ContextoCarro";




export default function DetalleArticulo(props) {
  
 const route = useRoute();
 const {item} = route.params 
 const [cargaSelec, setCargaSelec] = useState() 
 const {agregarAlCarrito} = useCarrito();
  
  return (
    
    <LinearGradient
    colors={['#121111', '#4C4C4C', '#6A6A6A', '#828282', '#ADADAD', '#ACB6BD']}

    style={styles.padre}
    > 
      <Image style={styles.Cimagen} source={{uri: item.imagen}}/>
      
      
      <View style={styles.contenido}>
      <Text style={styles.titulo}>{item.tipoProd}</Text>
      <Text style={styles.descrip}>{item.Descripcion}</Text>
      <Text style={styles.precio}>Precio: ${item.precioProd}.00</Text>
      
      <TouchableOpacity style={[styles.agrega, cargaSelec === 'Carga Pequeña'
        && styles.seleccionado
      ]} onPress={()=>{
        if(cargaSelec === 'Carga Pequeña'){
          setCargaSelec(null);
        }else{
          setCargaSelec('Carga Pequeña');
        }
        
        }}><Text style={styles.agregaT}>{item.CargaP}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.agrega, cargaSelec === 'M'
        && styles.seleccionado
      ]} onPress={()=>{
        if(cargaSelec === 'M'){
          setCargaSelec(null);
        }else{
          setCargaSelec('M');
        }
        
        }}><Text style={styles.agregaT}>{item.CargaM}</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity style={[styles.agrega, cargaSelec === 'G'
        && styles.seleccionado
      ]} onPress={()=>{
        if(cargaSelec === 'G'){
          setCargaSelec(null);
        }else{
          setCargaSelec('G');
        }
        
        }}><Text style={styles.agregaT}>{item.CargaG}</Text>
      
      </TouchableOpacity>



      <TouchableOpacity style={styles.botoncarro}
      onPress={()=> {if(!cargaSelec){
        Alert.alert("Selecciona una carga antes de continuar");
        return;}
        agregarAlCarrito(item, cargaSelec);
        props.navigation.navigate('Carrito');
          }}>
        <Text style={styles.textCarro}>Agrega al carrito</Text>

      </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const estilosWeb = {

  padre: {
     flex: 1,
    
   },

   Cimagen:{
     width: "30%",
     height: "54%", 
     marginTop: 40,
     marginLeft: 700,
     
    
   },
 
   contenido:{
     marginHorizontal: 20,
     marginVertical: 20,
     justifyContent: 'center'
   },
 
   titulo:{
     fontSize: 20,
     color: 'white',
     fontWeight: '500'
 
   },
 
   descrip:{
     color: 'white'
   },  
 
   precio:{
     color: 'white'
   },
 
   agrega:{
     borderRadius: 20,
     backgroundColor: 'white',
     marginTop: 20,
     marginLeft: 50,
     marginRight: 50
   },
 
   agregaT:{
     textAlign: 'center'
   },
 
   seleccionado:{
     backgroundColor: '#2E7B8C',
     borderColor: 'white',
     borderWidth: 1
   },
 
   
   botoncarro:{
     marginTop: 80,
     alignContent: 'center',
     alignItems: 'center',
     borderRadius: 10,
     backgroundColor: '#fff',
     height: 70,
     padding: 24
   },
 
   textCarro:{
    
   }
 
 
 };
 
 
 const estilosApp = {
 
   padre: {
     flex: 1
   },
 
   Cimagen:{
     width: "100%",
     height: 360, 
     marginTop: 20
    
   },
 
   contenido:{
     marginHorizontal: 20,
     marginVertical: 20,
     justifyContent: 'center'
   },
 
   titulo:{
     fontSize: 20,
     color: 'white',
     fontWeight: '500'
 
   },
 
   descrip:{
     color: 'white'
   },  
 
   precio:{
     color: 'white'
   },
 
   agrega:{
     borderRadius: 20,
     backgroundColor: 'white',
     marginTop: 20,
     marginLeft: 50,
     marginRight: 50
   },
 
   agregaT:{
     textAlign: 'center'
   },
 
   seleccionado:{
     backgroundColor: '#2E7B8C',
     borderColor: 'white',
     borderWidth: 1
   },
 
   
   botoncarro:{
     marginTop: 80,
     alignContent: 'center',
     alignItems: 'center',
     borderRadius: 10,
     backgroundColor: '#fff',
     height: 70,
     padding: 24
   },
 
   textCarro:{
    
   }
 
 
 
 }
 
 
 




const styles = StyleSheet.create(
 Platform.OS === 'web' ? estilosWeb: estilosApp
)

