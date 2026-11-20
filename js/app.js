const autos = [
    {
        marca: "Ford",
        modelo: "Mustang GT",
        anio: 2022,
        precio: 65000000,
        tipo: "usado",
        combustible: "nafta",
        imagen: "imagenes/mustang.jpg"
    },
    {
        marca: "Chevrolet",
        modelo: "Camaro SS",
        anio: 2021,
        precio: 70000000,
        tipo: "usado",
        combustible: "nafta",
        imagen: "imagenes/camaro.jpg"
    },
    {
        marca: "Chevrolet",
        modelo: "Corvette Stingray",
        anio: 2023,
        precio: 120000000,
        tipo: "0km",
        combustible: "nafta",
        imagen: "imagenes/corvette.jpg"
    },
    {
        marca: "Porsche",
        modelo: "911 Carrera",
        anio: 2022,
        precio: 150000000,
        tipo: "usado",
        combustible: "nafta",
        imagen: "imagenes/porsche911.jpg"
    },
    {
        marca: "Mercedes-Benz",
        modelo: "AMG GT",
        anio: 2023,
        precio: 135000000,
        tipo: "0km",
        combustible: "nafta",
        imagen: "imagenes/mercedesamg.jpg"
    }
];

/**
 * Da formato a un precio con separador de miles y signo pesos
 * @method formatearPrecio
 * @param {number} precio - Precio del auto
 * @return {string} Precio con formato, por ejemplo $65.000.000
 */
const formatearPrecio = (precio) => {
    return "$" + precio.toLocaleString("es-AR");
};

/**
 * Muestra en el catálogo las tarjetas de los autos recibidos
 * @method mostrarAutos
 * @param {Array} lista - Lista de autos a mostrar
 * @return {void}
 */
const mostrarAutos = (lista) => {
    const contenedor = document.getElementById("contenedor-autos");

    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron autos con esos filtros.</p>";
        return;
    }

    lista.forEach((auto) => {
        contenedor.innerHTML += `
            <article class="auto-card">
                <img src="${auto.imagen}" alt="${auto.marca} ${auto.modelo}">
                <h3>${auto.marca} ${auto.modelo}</h3>
                <p>Año: ${auto.anio}</p>
                <p>Precio: ${formatearPrecio(auto.precio)}</p>
                <p>Tipo: ${auto.tipo}</p>
                <p>Combustible: ${auto.combustible}</p>
            </article>
        `;
    });
};

/**
 * Filtra los autos según la búsqueda, el tipo y el combustible elegidos y los muestra
 * @method filtrarAutos
 * @return {void}
 */
const filtrarAutos = () => {
    const busqueda = document.getElementById("busqueda").value.toLowerCase();
    const tipo = document.getElementById("tipo").value;
    const combustible = document.getElementById("combustible").value;

    const autosFiltrados = autos.filter((auto) => {
        const nombreAuto = (auto.marca + " " + auto.modelo).toLowerCase();
        const coincideBusqueda = nombreAuto.includes(busqueda);
        const coincideTipo = tipo === "todos" || auto.tipo === tipo;
        const coincideCombustible = combustible === "todos" || auto.combustible === combustible;

        return coincideBusqueda && coincideTipo && coincideCombustible;
    });

    mostrarAutos(autosFiltrados);
};

/**
 * Comprueba que los datos del formulario sean correctos. Si un dato es incorrecto,
 * avisa al usuario con un alert y blanquea ese campo
 * @method validarFormulario
 * @return {void}
 */
const validarFormulario = () => {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || !isNaN(nombre)) {
        alert("Ingrese un nombre válido.");
        document.getElementById("nombre").value = "";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Ingrese un email válido.");
        document.getElementById("email").value = "";
        return;
    }

    if (telefono === "" || isNaN(telefono) || Number(telefono) <= 0) {
        alert("Ingrese un teléfono válido, solo con números.");
        document.getElementById("telefono").value = "";
        return;
    }

    if (mensaje === "") {
        alert("Escriba su consulta.");
        return;
    }

    alert("Consulta enviada. Nos pondremos en contacto a la brevedad.");
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("auto-interes").value = "";
    document.getElementById("mensaje").value = "";
};

mostrarAutos(autos);
