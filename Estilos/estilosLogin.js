import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    padre:{
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
        
       
    },
   
    profile: {
        width:400,
        height: 400,
        
        borderColor: 'white',
        marginBottom: 50
    },

    tarjeta: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        }, 
        shadowOpacity:0.25,
        shadowRadius: 4,
        elevation:5
    },

    cajaTexto:{
        paddingVertical: 20,
        backgroundColor: '#cccccc40',
        borderRadius: 30,
        marginVertical: 10,
        
    },
    
    PadreBoton: {
        alignItems: 'center'
    },

    cajaBoton:{
        backgroundColor:'#b0c0c3',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20
    },

    TextoBoton:{
        textAlign:'center',
        color: '00000'
    },

    lavaV:{
        fontSize:75,
        fontFamily: 'CherryCreamSoda_400Regular',
        paddingBottom: 50
        
    }


    
})

export default styles;