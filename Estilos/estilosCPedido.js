import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
contenedor:{
      flex:1,
      alignContent: 'center',
      alignItems: 'center'
      
    },
    contenedorImagen:{
        paddingTop: 20
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
      paddingTop: 20
  
    },
    
    contenido:{
      alignContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },
    imagen:{
      width: 200,
      height: 200,

      
    }
  
});


export default styles;  
  