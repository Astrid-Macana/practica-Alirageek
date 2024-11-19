import { servicesProducts } from "../services/produc sevice.js";

const formulario = document.querySelector("[data-formulario]");
const producContainer = document.querySelector("[data-lista]");
const btndelete = document.querySelectorAll(".delete-button");

function crateCart({name,price,image,id}) {
    const card = document.createElement("div");
     card.classList.add("card");
    // card.className= "producto_item"
    card.innerHTML = `<img  class="card_img" src="${image}" alt="producto">
                        <h3 class="card-title">${name} </h3>
                        <p class="card-price">${price}</p>
                        <button class="delete-button" data-id"${id}>
                            <img class="icono" src="./img/iconoeliminar.png" alt="icono">
                        </button>`
                        // Asigna el evento de eliminación
  addDeleteEvent(card, id);            
    return card

};

const renderProduct= async() =>{
    try {
        const listProduct = await servicesProducts.productList();
        
        listProduct.forEach((product) => {
            
            const productCard = crateCart(product);
            producContainer.appendChild(productCard);
            console.log(listProduct)
         });
    } catch (error) {
        console.log(error)
    }
};

formulario.addEventListener("submit",async (event)=>{
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;
   
    try {
        const newPoduct = await servicesProducts.createProduct(name,price,image);
        const newCard = crateCart(newPoduct);
        producContainer.appendChild(newCard);

    } catch (error) {
        console.log(error)
    }
    formulario.reset();
});

function addDeleteEvent(card, id) {
    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", async () => {
       if (confirm("¿Estas seguro de que quieres eliminar este producto?")) {
        try {
            await servicesProducts.deleteProduct(id);
            card.remove();
            console.log(`Producto con id ${id} eliminado`);
            
          } catch (error) {
            console.error(`Error al eliminar el producto con id ${id}:`, error);
          }
       
       }
    });
  };


// Función para eliminar un producto
// const eliminarProducto = async (id) => {
//     try {
//       // Eliminar el producto del servidor
//       await servicesProducts.deleteProduct(id);
  
//       // Actualizar la lista de productos en la interfaz
//       const productosList = await servicesProducts.productList();
//       producContainer.innerHTML = '';
//       productosList.forEach((producto) => {
//         const productoCard = crateCart(producto);
//         producContainer.appendChild(productoCard);
//       });
//       btndelete.forEach((button) => {
//         button.addEventListener('click', () => {
//           const id = button.dataset.id;
//           eliminarProducto(id);
//         });
//       });
    
//       // Mostrar un mensaje de éxito
//       alert(`El producto con ID ${id} ha sido eliminado.`);
//     } catch (error) {
//       // Mostrar un mensaje de error si ocurre algún problema
//       console.log('Error al eliminar el producto:', error);
//       alert(`No se pudo eliminar el producto con ID ${id}.`);
//     }
//   };

  // Agregar evento de clic a los botones de "Eliminar"
// btndelete.forEach((button) => {
//     button.addEventListener('click', () => {
//       const id = button.dataset.id;
//       eliminarProducto(id);
//     });
//   });

 
renderProduct()

