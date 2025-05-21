import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Alert,ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCarrito } from "../componentes/ContextoCarro";





export default function DetalleArticulo(props) {
  const route = useRoute();
  const { item } = route.params;
  const [cargaSelec, setCargaSelec] = useState(null);
  const { agregarAlCarrito } = useCarrito();

  // Función para mostrar nombre de carga o tamaño
  const obtenerEtiqueta = (primario, secundario, tercero) => primario || secundario || tercero;

  // Función para obtener el precio correspondiente
  const obtenerPrecio = (carga) => {
    switch (carga) {
      case 'Carga Pequeña':
        return item.precioProd || item.PrecioInd;
      case 'M':
        return item.PrecioMat;
      case 'G':
        return item.PrecioKing;
      default:
        return 0;
    }
  };

  const manejaSeleccion = (etiqueta) => {
    setCargaSelec(prev => prev === etiqueta ? null : etiqueta);
  };

  const confirmarAgregar = () => {
    if (!cargaSelec) {
      Alert.alert("Selecciona una carga antes de continuar");
      return;
    }
    agregarAlCarrito(item, cargaSelec);
    props.navigation.navigate('Carrito');
  };

  return (
    <LinearGradient
      colors={['#121111', '#4C4C4C', '#6A6A6A', '#828282', '#ADADAD', '#ACB6BD']}
      style={styles.padre}
    >
      <ScrollView>
        <Image style={styles.Cimagen} source={{ uri: item.imagen }} />

        <View style={styles.contenido}>
          <Text style={styles.titulo}>{item.tipoProd}</Text>
          <Text style={styles.descrip}>{item.Descripcion}</Text>
          <Text style={styles.precio}>
            Precio: ${obtenerPrecio(cargaSelec) || '00'}.00
          </Text>

          {/* Carga pequeña / Individual */}
          <TouchableOpacity
            style={[styles.agrega, cargaSelec === obtenerEtiqueta(item.CargaP, item.Individual, item.Tenis) && styles.seleccionado]}
            onPress={() => manejaSeleccion(obtenerEtiqueta(item.CargaP, item.Individual, item.Tenis))}
          >
            <Text style={styles.agregaT}>
              {obtenerEtiqueta(item.CargaP, item.Individual, item.Tenis)}
            </Text>
            <Text style={styles.agregaT}>Precio: ${item.precioProd || item.PrecioInd || item.PrecioT}.00</Text>
          </TouchableOpacity>

          {/* Matrimonial */}
          <TouchableOpacity
            style={[styles.agrega, cargaSelec === obtenerEtiqueta(item.CargaM, item.Matrimonial, item.Zapatos) && styles.seleccionado]}
            onPress={() => manejaSeleccion(obtenerEtiqueta(item.CargaM, item.Matrimonial, item.Zapatos))}
          >
            <Text style={styles.agregaT}>
              {obtenerEtiqueta(item.CargaM, item.Matrimonial, item.Zapatos)}
            </Text>
            <Text style={styles.agregaT}>Precio: ${item.precioProd || item.PrecioMat|| item.PrecioZ}.00</Text>
          </TouchableOpacity>

          {/* King Size */}
          <TouchableOpacity
            style={[styles.agrega, cargaSelec === obtenerEtiqueta(item.CargaG, item.Kingsize, item.Botas) && styles.seleccionado]}
            onPress={() => manejaSeleccion(obtenerEtiqueta(item.CargaG, item.Kingsize, item.Botas))}
          >
            <Text style={styles.agregaT}>
              {obtenerEtiqueta(item.CargaG, item.Kingsize, item.Botas)}
            </Text>
            <Text style={styles.agregaT}>Precio: ${item.precioProd || item.PrecioKing || item.PrecioB}.00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoncarro} onPress={confirmarAgregar}>
            <Text style={styles.textCarro}>Agrega al carrito</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </LinearGradient>
  );
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

