const autos = [
    {
        marca: "Ford",
        modelo: "Mustang GT",
        anio: 2022,
        precio: 65000000,
        tipo: "usado",
        combustible: "diesel",
        imagen: "img/mustang.jpg"
    },
    {
        marca: "Chevrolet",
        modelo: "Camaro SS",
        anio: 2021,
        precio: 70000000,
        tipo: "usado",
        combustible: "nafta",
        imagen: "img/camaro.jpg"
    },
    {
        marca: "Chevrolet",
        modelo: "Corvette Stingray",
        anio: 2023,
        precio: 120000000,
        tipo: "0km",
        combustible: "nafta",
        imagen: "img/corvette.jpg"
    },
    {
        marca: "Porsche",
        modelo: "911 Carrera",
        anio: 2022,
        precio: 150000000,
        tipo: "usado",
        combustible: "nafta",
        imagen: "img/porsche911.jpg"
    },
    {
        marca: "Porsche",
        modelo: "Cayman",
        anio: 2020,
        precio: 95000000,
        tipo: "usado",
        combustible: "nafta",
        imagen: "img/porschecayman.jpg"
    },
    {
        marca: "Mercedes-Benz",
        modelo: "AMG GT",
        anio: 2023,
        precio: 135000000,
        tipo: "0km",
        combustible: "nafta",
        imagen: "img/mercedesamg.jpg"
    }
];

const formatearPrecio = (precio) => {
    return "$" + precio;
};

const mostrarAutos = () => {
    const contenedor = document.getElementById("contenedor-autos");

    contenedor.innerHTML = "";

    autos.forEach((auto) => {
        contenedor.innerHTML += `
            <article class="auto-card">
                <img src="${auto.imagen}" alt="${auto.marca} ${auto.modelo}">
                <h3>${auto.marca} ${auto.modelo}</h3>
                <p>Año: ${auto.anio}</p>
                <p>Precio: ${formatearPrecio(auto.precio)}</p>
                <p>Tipo: ${auto.tipo}</p>
                <p>Combustible: ${auto.combustible}</p>
                <button type="button">Consultar</button>
            </article>
        `;
    });
};

mostrarAutos();