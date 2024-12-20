
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

    return productos;
}


// function verificarFormulario() {
//     const inputs = document.querySelectorAll('form input, form textarea');
//     let completo = true;

//     inputs.forEach(input => {
//         if (!input.value.trim()) {
//             completo = false;
//         }
//     });

//     if (completo) {
//         console.log("Todos los campos están completos.");
//     } else {
//         console.log("Faltan completar algunos campos del formulario.");
//     }
// }

// function generarProductos() {
//     const productos = [
//         "Producto 1",
//         "Producto 2",
//         "Producto 3",
//         "Producto 4",
//     ];

//     console.log("Lista de productos:");
//     productos.forEach(producto => console.log(producto));
// }

// function configurarEventosProductos() {
//     const productos = document.querySelectorAll('.producto');
//     productos.forEach(producto => {
//         producto.addEventListener('click', () => {
//             const descripcion = producto.getAttribute('data-descripcion');
//             alert(`Descripción del producto: ${descripcion}`);
//         });
//     });
// }

// function mostrarProductos() {
//     const productos = [
//         { nombre: "Producto 1", descripcion: "Descripción 1" },
//         { nombre: "Producto 2", descripcion: "Descripción 2" },
//         { nombre: "Producto 3", descripcion: "Descripción 3" },
//         { nombre: "Producto 4", descripcion: "Descripción 4" },
//     ];

//     const container = document.getElementById("productosContainer");
//     container.innerHTML = "";

//     productos.forEach(producto => {
//         const template = `
//             <div class="producto" data-descripcion="${producto.descripcion}">
//                 <h3>${producto.nombre}</h3>
//                 <p>${producto.descripcion}</p>
//             </div>
//         `;
//         container.innerHTML += template;
//     });

//     configurarEventosProductos(); 
// }


// document.addEventListener("DOMContentLoaded", () => {
//     generarProductos();
//     mostrarProductos();

//     const formulario = document.querySelector("form");
//     if (formulario) {
//         formulario.addEventListener("submit", (e) => {
//             e.preventDefault();
//             verificarFormulario();
//         });
//     }
// });
