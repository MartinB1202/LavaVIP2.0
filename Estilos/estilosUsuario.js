import { StyleSheet } from "react-native"




const styles = StyleSheet.create({

    padre:{
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    
    profile: {
        width:100,
        height: 100,
        borderRadius:50,
        borderColor: 'white'
    },

    tarjeta: {
        margin: 20,
        backgroundColor: '#121111',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: 'white',
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
        backgroundColor: '#d7e7eb',
        borderRadius: 30,
        marginVertical: 10,
        textAlign: 'center'
    },
    
    PadreBoton: {
        alignItems: 'center'
    },

    cajaBoton:{
        backgroundColor:'white',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20
    },

    TextoBoton:{
        textAlign:'center',
        color: '00000'
    },

   
}

)

export default styles;