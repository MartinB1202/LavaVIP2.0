
export const domoloc = (item) =>{
  
    if(item.entrega == 'domicilio'){
        return `Direccion de entrega: ${item.cliente.direccion}
        Telefono de contacto: ${item.cliente.telefono}`;
    }
    return 'La entrega se realizara en el establecimiento';
 };