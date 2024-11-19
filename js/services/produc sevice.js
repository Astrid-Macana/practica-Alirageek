const BASE_URL ="https://673bad0296b8dcd5f3f72245.mockapi.io/products";
// http://localhost:3000/products
const productList = async () =>{
        try {
    const response = await fetch(BASE_URL) ;
    const data = await response.json();
    return  data
    } catch (error) {
    console.log("Error al listar productos: ",error)
    }
}

const createProduct = async (name,price,image) => {
    try {
        const response = await fetch(BASE_URL,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,price,image}),
        })

        const data = await response.json();
        return data ;
    } catch (error) {
        console.log("Error al crear el producto: ",error)
    }
}

const deleteProduct = async (id) => {
    try {
        await fetch(`${BASE_URL}/${id}`,{
            method : "DELETE",
            headers: {
                "content-type": "application/json" 
            },
        });
        // if (response.ok) {
        //     console.log('Producto eliminado exitosamente');
           
        //   } else {
        //     console.error('Error al eliminar el producto');
        //   }
    } catch (error) {
        console.log("Error al hacer la solicitud:", error)
    }
}

export const servicesProducts ={
    productList,createProduct,deleteProduct,
}