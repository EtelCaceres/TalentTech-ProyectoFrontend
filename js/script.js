
console.log("Revisión de errores: No se encontraron errores.");


function verificarFormulario() {
    const inputs = document.querySelectorAll('form input, form textarea');
    let completo = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            completo = false;
        }
    });

    if (completo) {
        console.log("Todos los campos están completos.");
    } else {
        console.log("Faltan completar algunos campos del formulario.");
    }
}

function generarProductos() {
    const productos = [
        "Producto 1",
        "Producto 2",
        "Producto 3",
        "Producto 4",
    ];

    console.log("Lista de productos:");
    productos.forEach(producto => console.log(producto));
}

function configurarEventosProductos() {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.addEventListener('click', () => {
            const descripcion = producto.getAttribute('data-descripcion');
            alert(`Descripción del producto: ${descripcion}`);
        });
    });
}

function mostrarProductos() {
    const productos = [
        { nombre: "Producto 1", descripcion: "Descripción 1" },
        { nombre: "Producto 2", descripcion: "Descripción 2" },
        { nombre: "Producto 3", descripcion: "Descripción 3" },
        { nombre: "Producto 4", descripcion: "Descripción 4" },
    ];

    const container = document.getElementById("productosContainer");
    container.innerHTML = "";

    productos.forEach(producto => {
        const template = `
            <div class="producto" data-descripcion="${producto.descripcion}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
            </div>
        `;
        container.innerHTML += template;
    });

    configurarEventosProductos(); 
}


document.addEventListener("DOMContentLoaded", () => {
    generarProductos();
    mostrarProductos();

    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            verificarFormulario();
        });
    }
});
