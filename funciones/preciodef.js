
export const preciodef = (totalSum, tipoEntrega)=>{
    if(tipoEntrega === 'domicilio'){
        return totalSum + 45;
    }
    return totalSum;

}