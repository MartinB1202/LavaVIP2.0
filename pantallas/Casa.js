import React,{useState, useEffect}from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import CartaProd from '../componentes/CartaProd'
import appfirebase from '../credenciales';
import { LinearGradient } from 'expo-linear-gradient';



const db = getFirestore(appfirebase);


export default function Casa() {

  
    
    const [lista, setLista] = useState([]);
  
    useEffect(() => {
      const obtenerArticulos = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'articulo'));
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setLista(docs);
        } catch (error) {
          console.log('Error al obtener artículos:', error);
        }
      };
  
      obtenerArticulos();
    }, []);




  return (
    
    <LinearGradient  colors={['#121111', '#4C4C4C', '#6A6A6A', '#828282', '#ADADAD', '#ACB6BD']}
            
            style={{flex:1}}
            >
    <View>
    <View style={styles.contenedorT}>
      <Text>Categorias</Text>
    </View>
    <View style={{flexDirection: 'row', marginBottom: 70} }>
  
    <FlatList data={lista}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=><CartaProd item={item}/>}
    numColumns={2}

    />
    

    </View>
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

  contenedorT:{
    margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 280,
        
        padding: 10,
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        }, 
        shadowOpacity:0.25,
       
        elevation:4
  }
})