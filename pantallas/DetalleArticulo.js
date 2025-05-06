import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import appfirebase from '../credenciales';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function DetalleArticulo() {
  
 const route = useRoute();
 const {item} = route.params 
 const [cargaSelec, setCargaSelec] = useState() 
  
  
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
      
      <TouchableOpacity style={[styles.agrega, cargaSelec === 'P'
        && styles.seleccionado
      ]} onPress={()=>{
        if(cargaSelec === 'P'){
          setCargaSelec(null);
        }else{
          setCargaSelec('P');
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



      <TouchableOpacity style={styles.botoncarro}>
        <Text style={styles.textCarro}>Agrega al carrito</Text>

      </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
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

  


})