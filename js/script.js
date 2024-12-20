//Funcion para crear un array de productos
function ObtenerProductos() {
    const productos = [
        {
            id: 1,
            name: "Producto 1",
            description: "Suculenta Sarmentosa",
            amount: 100
        },
        {
            id: 2,
            name: "Producto 2",
            description: "Suculenta Sedum",
            amount: 200
        },
        {
            id: 3,
            name: "Producto 3",
            description: "Suculenta Echeveria Imbricata",
            amount: 300
        },
        {
            id: 4,
            name: "Producto 4",
            description: "Suculenta Sedum Tokio",
            amount: 400
        },
        {
            id: 5,
            name: "Producto 5",
            description: "Suculenta Echeveria Afinis",
            amount: 500
        },
        {
            id: 6,
            name: "Producto 6",
            description: "Suculenta Echeveria Pallida",
            amount: 600
        }
    ];
    console.log(productos)
    return productos;
}


//Funcion para obtener la descripcion de un producto segun su id
function ObtenerDescripcionProducto(id) {
    const productos = ObtenerProductos();
    const productoEncontrado = productos.find(producto => producto.id === id);    
    if (productoEncontrado) {
        return productoEncontrado.description;
    } else {
        return "Producto no encontrado";
    }
}


//Funcion para expandir la tarjeta de productos y agregar descripcion de manera dinamica
function expandirTarjeta(id) {
    const productos = ObtenerProductos();
    const producto = productos.find(p => p.id === id);
    //manipulacion del DOM
    if (producto) {
      const tarjeta = document.getElementById(`producto${id}`);
      const cardBody = tarjeta.querySelector(".card-body");
      const descripcionContainer = cardBody.querySelector(".description-container");
      const closeBtn = cardBody.querySelector(".close-btn");
  
      // Agrega la descripción
      descripcionContainer.textContent = producto.description;
      descripcionContainer.style.display = "block";
  
      // Expande la tarjeta
      tarjeta.querySelector(".custom-card").classList.add("expanded");
  
      // Muestra el botón de cierre
      closeBtn.style.display = "inline-block";
    }
  }
  
  
  //Funcion para cerrar la tarjeta expandida
  function colapsarTarjeta(id) {
    const tarjeta = document.getElementById(`producto${id}`);
    const cardBody = tarjeta.querySelector(".card-body");
    const descripcionContainer = cardBody.querySelector(".description-container");
    const closeBtn = cardBody.querySelector(".close-btn");
  
    // Oculta la descripción
    descripcionContainer.style.display = "none";
  
    // Colapsa la tarjeta
    tarjeta.querySelector(".custom-card").classList.remove("expanded");
  
    // Oculta el botón de cierre
    closeBtn.style.display = "none";
  }