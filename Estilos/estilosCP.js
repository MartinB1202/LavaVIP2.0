import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const estilosWeb = {
    contenedor:{
      flex:1,
      alignItems: 'center'
    
    },
    contenedorI:{
      height: 310, 
      width: width * 0.38,
      borderColor: "#ccc",
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
      backgroundColor: "#fff",
      marginLeft: 25,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        }, 
        shadowOpacity:0.25,
        shadowRadius: 4,
        elevation:5
  
    },
    covertura:{
     width: 205,
     height: 300,
     borderRadius: 10,
     backgroundColor: 'transparent'
    },
  
    titulo:{
      fontSize:18,
      color:"black",
      fontWeight: "600",
      marginLeft: 30,
  
    },
    
    contenido:{
      paddingLeft: 15
    }
  }
  
  
  const estilosApp ={
    contenedor:{
      flex:1,
      
    },
    covertura:{
      height:205,
      width: width * 0.38,
      borderColor: '#000',
      marginLeft: 25,
      marginTop: 30,
  
      backgroundColor: '#fff',        // Fondo blanco para contraste
      borderColor: '#ccc',            // Color del borde
      borderWidth: 2,                 // Grosor del borde
      borderRadius: 10,               // Bordes redondeados (opcional)
      padding: 5 ,
      
      shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        }, 
        shadowOpacity:0.2,
        shadowRadius: 4,
        elevation:5
     
    },
  
    titulo:{
      fontSize:18,
      color:"black",
      fontWeight: "600",
      marginLeft: 30,
  
    },
    
    contenido:{
      paddingLeft: 15
    },
    imagen:{
      width: 200,
      height: 200
    }
  
  
  }
  const styles = StyleSheet.create(
    
  Platform.OS === 'web' ? estilosWeb: estilosApp
  
  )

  export default styles;