import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../credenciales";
import { doc, getDoc, Timestamp, addDoc, collection } from "firebase/firestore";

/**
 * Obtiene los datos del usuario autenticado desde Firestore
 */
export const obtenerDatosUsuario = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (usuarioFirebase) => {
      if (usuarioFirebase) {
        try {
          const refUsuario = doc(db, "usuarios", usuarioFirebase.uid);
          const docSnap = await getDoc(refUsuario);
          if (docSnap.exists()) {
            resolve(docSnap.data());
          } else {
            reject("No se encontró el usuario");
          }
        } catch (error) {
          reject(error);
        }
      } else {
        reject("Usuario no autenticado");
      }
    });
  });
};

/**
 * Crea un nuevo pedido en Firestore
 */
export const enviarPedido = async ({ carrito, total, datosU, tipoEntrega }) => {
  // Transformar cada producto antes de enviarlo
  const productosTransformados = carrito.map((item) => {
    const { tipoProd, carga, CargaP, CargaM, CargaG, Individual, Matrimonial, Kingsize, Zapatos, Tenis, Botas, imagen } = item;

    // Función para obtener precio según la carga seleccionada
    const obtenerPrecio = () => {
      switch (carga) {
        case CargaP:
          return item.precioProd;
        case Individual:
          return item.PrecioInd;
        case CargaM:
          return item.precioProd;
        case Matrimonial:
          return item.PrecioMat;
        case CargaG:
          return item.precioProd;
        case Kingsize:
          return item.PrecioKing;
        case Zapatos: 
          return item.PrecioZ;
        case Tenis:
          return item.PrecioT;
        case Botas: 
          return item.PrecioB;
        default:
          return 0;
      }
    };

    return {
      tipo: tipoProd,
      carga: carga,
      precio: obtenerPrecio(),
      imagen: imagen,
    };
  });

  const pedido = {
    productos: productosTransformados,
    fecha: Timestamp.now(),
    total: total,
    entrega: tipoEntrega,
    estado: "pendiente",
    cliente: {
      nombre: datosU?.nombre,
      direccion: datosU?.direccion,
      telefono: datosU?.telefono,
      correo: datosU?.email,
    },
  };

  await addDoc(collection(db, "pedidos"), pedido);
};
