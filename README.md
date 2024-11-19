<em> # App Alurageek </em>
[logo](./img/app.png)
*AluraGeek es una aplicación web que permite a los usuarios gestionar una lista de productos. Los usuarios pueden visualizar, agregar y eliminar productos, utilizando tecnologías frontend modernas y un servidor JSON simulado.

<h2>
AluraGeek es una aplicación web que permite a los usuarios gestionar una lista de productos. Los usuarios pueden visualizar, agregar y eliminar productos, utilizando tecnologías frontend modernas y un servidor JSON simulado.
</h2>

:mushroom: caracteristicas :mushroom:
`Funcionalidad 1`: Visualizar productos existentes. 1-
 `Funcionalidad 2`: Agregar nuevos productos proporcionando nombre, precio e imagen. 2
  `Funcionalidad 3`:Eliminar productos de la lista  3   
   * Manejo dinámico del DOM para actualizar productos sin recargar la página.


:globe_with_meridians: Tecnologias utilizadas

*HTML5/CSS3: Estructura y diseño.
*JavaScript (ES6 Modules): Lógica e interacción.
*json-server: API RESTful simulada.
*Fetch API: Solicitudes HTTP.

:pushpin: Estructura del proyecto

*index.html: Estructura de la aplicación.
*styles/reset.css: Reinicio de estilos.
*styles/style.css: Estilos personalizados.
*js/controllers/main.js: Lógica de agregar y eliminar productos.
*js/services/product-services.js: Solicitudes HTTP (GET, POST, DELETE).
*db.json: Base de datos simulada para json-server.
*package.json: Dependencias y scripts.

:art: Api simulada

json-server simula una API RESTful con las siguientes rutas:

*GET /products: Lista los productos.
*POST /products: Crea un nuevo producto.
*DELETE /products/:id: Elimina un producto.

:dart: Uso de la aplicacion

*Visualizar Productos: Los productos se cargan automáticamente desde el servidor simulado al abrir la página.

*Agregar Producto: Completa el formulario con nombre, precio y URL de la imagen, luego haz clic en "Enviar".

*Eliminar Producto: Haz clic en el ícono de la papelera para eliminar un producto.