/* =========================================================
   HUALLANCAVIVE
   GUÍA TURÍSTICA DIGITAL DE HUALLANCA
   Creado y desarrollado por Gabriel Cornelio Reyes
   2026
========================================================= */


/* =========================================================
   BASE DE DATOS TURÍSTICA
========================================================= */

const lugares = [

    {
        nombre: "Nevado Chaupijanca",
        categoria: "montaña",
        categoriaTexto: "Montaña",
        imagen: "imagenes/chaupijanca.jpg",

        altitud: "5,283 m s. n. m.",

        distancia:
            "Aproximadamente 24 km por vía carrozable desde Huallanca hasta la cuenca superior de Chiuroco.",

        acceso:
            "El acceso al glaciar se realiza mediante vehículo 4x4 hacia la cuenca superior de la quebrada de Chiuroco y luego continúa el recorrido de montaña.",

        descripcion:
            "El Nevado Chaupijanca es uno de los principales atractivos naturales de la Cordillera Huallanca. Presenta un paisaje de alta montaña y condiciones ideales para actividades como observación de flora, observación de aves, camping y montañismo.",

        dato:
            "MINCETUR registra el Chaupijanca como recurso turístico de Huallanca y señala una altitud de 5,283 m s. n. m.",

        video:
            "https://www.facebook.com/share/r/1QNrhLBYqk/",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Nevado+Chaupijanca+Huallanca+Ancash"
    },


    {
        nombre: "Cordillera Huallanca",
        categoria: "montaña",
        categoriaTexto: "Montaña",
        imagen: "imagenes/cordillera-huallanca.jpg",

        altitud:
            "Zona de alta montaña",

        distancia:
            "Rodea diferentes sectores del territorio de Huallanca.",

        acceso:
            "El acceso depende de la cumbre o sector que se quiera visitar. Varias rutas requieren vehículo hacia zonas altas y posteriormente caminata.",

        descripcion:
            "La Cordillera Huallanca constituye uno de los principales paisajes naturales del distrito. Sus montañas, nevados, abras y lagunas forman un importante conjunto paisajístico altoandino.",

        dato:
            "La cordillera reúne diversos nevados, abras, lagunas y sectores de alta montaña.",

        video:
            "https://share.google/lK8vVtUXtUcugRCLA",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Cordillera+Huallanca+Ancash"
    },


    {
        nombre: "Laguna Contaycocha",
        categoria: "laguna",
        categoriaTexto: "Laguna",
        imagen: "imagenes/contaycocha.jpg",

        altitud:
            "3,896 m s. n. m.",

        distancia:
            "8.6 km desde la Plaza de Armas aproximadamente.",

        acceso:
            "Se llega desde Huallanca por la vía hacia La Unión. MINCETUR registra aproximadamente 8.6 km desde la Plaza de Armas.",

        descripcion:
            "Laguna altoandina ubicada junto a la vía Huallanca–La Unión. Presenta paisajes de ichu, totora y otras especies de flora altoandina.",

        dato:
            "Es un lugar interesante para observar aves como huachwas, gallaretas, yanavicos, gaviotas y otras especies.",

        video:
            "https://share.google/RkHxM19KiVvWyp79f",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Laguna+Contaycocha+Huallanca+Ancash"
    },


    {
        nombre: "Laguna Aguashcocha",
        categoria: "laguna",
        categoriaTexto: "Laguna",
        imagen: "imagenes/aguashcocha.jpg",

        altitud:
            "4,387 m s. n. m.",

        distancia:
            "Zona suroeste de Huallanca.",

        acceso:
            "Se puede acceder mediante una trocha carrozable que pasa cerca de la laguna. El recorrido permite observar el paisaje del nevado El Burro.",

        descripcion:
            "Aguashcocha está formada por pequeños cuerpos de agua unidos mediante cursos de agua, dando la apariencia de una laguna tejida.",

        dato:
            "MINCETUR registra una superficie aproximada de 29,081 m² y una longitud máxima de aproximadamente 518 metros.",

        video:
            "",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Laguna+Awashcocha+Huallanca+Ancash"
    },


    {
        nombre: "Cascada Sheglla",
        categoria: "cascada",
        categoriaTexto: "Cascada",
        imagen: "imagenes/sheglla.jpg",

        altitud:
            "3,522 m s. n. m.",

        distancia:
            "Aproximadamente 2–3 km desde Huallanca.",

        acceso:
            "Se encuentra junto a la vía Huallanca–La Unión. El acceso puede realizarse en vehículo y posteriormente a pie.",

        descripcion:
            "La Cascada Sheglla es una caída de agua ubicada cerca de Huallanca, en un entorno natural de paisaje altoandino.",

        dato:
            "MINCETUR la considera un lugar apropiado para fotografía y observación del paisaje.",

        video:
            "https://vm.tiktok.com/ZSVBf5fRQ/",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Cascada+Sheglla+Huallanca+Ancash"
    },


    {
        nombre: "Cascada Gaganani",
        categoria: "cascada",
        categoriaTexto: "Cascada",
        imagen: "imagenes/gagananí.jpg",

        altitud:
            "Zona altoandina de Huallanca",

        distancia:
            "2.8 km aproximadamente desde la Plaza de Armas.",

        acceso:
            "El recorrido puede realizarse desde Huallanca hacia el sector de Gaganani y continuar a pie según las condiciones del camino.",

        descripcion:
            "Gaganani es una cascada ubicada cerca de Huallanca y rodeada de vegetación y formaciones naturales.",

        dato:
            "El lugar combina naturaleza, paisaje y referencias locales a manifestaciones de arte rupestre.",

        video:
            "https://share.google/6LeRKeqYVOA9xlLdN",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Cascada+Gaganani+Huallanca+Ancash"
    },


    {
        nombre: "Cañón de Huagtahuaru",
        categoria: "patrimonio",
        categoriaTexto: "Cañón",
        imagen: "imagenes/Cañón-Huagtahuaru.jpg",

        altitud:
            "Zona del río Vizcarra",

        distancia:
            "Aproximadamente 6.5 km desde Huallanca.",

        acceso:
            "Se encuentra en dirección a La Unión, siguiendo la vía que atraviesa el sector del río Vizcarra.",

        descripcion:
            "El Cañón de Huagtahuaru es uno de los paisajes geológicos más llamativos de Huallanca. Sus paredes rocosas fueron modeladas por la erosión del río Vizcarra.",

        dato:
            "MINCETUR describe un desfiladero estrecho y profundo, con impresionantes paredes rocosas y formaciones naturales.",

        video:
            "https://youtube.com/shorts/WIOQDP-xdII?si=ae51DaLa3g_6s5Uk",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Cañon+de+Huagtahuaru+Huallanca+Ancash"
    },


    {
        nombre: "Baños Termales de Azulmina",
        categoria: "patrimonio",
        categoriaTexto: "Termales",
        imagen: "imagenes/Azulmina.jpg",

        altitud:
            "Zona de Azulmina",

        distancia:
            "Aproximadamente 7 km desde Huallanca.",

        acceso:
            "El acceso se realiza desde Huallanca hacia la zona de Azulmina por vía terrestre.",

        descripcion:
            "Los Baños Termales de Azulmina son un atractivo natural asociado a aguas de origen hidrotermal y forman parte del potencial turístico de Huallanca.",

        dato:
            "Las aguas termales están relacionadas con procesos hidrotermales y tectónicos. La temperatura debe verificarse antes del baño.",

        video:
            "https://vm.tiktok.com/ZSVBL23RN/",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Baños+Termales+Azulmina+Huallanca+Ancash"
    },


    {
        nombre: "Huellas de Dinosaurios de Palmadera",
        categoria: "paleontologia",
        categoriaTexto: "Paleontología",
        imagen: "imagenes/Palmadera.jpg",

        altitud:
            "Aproximadamente 4,442 m s. n. m.",

        distancia:
            "Sector Palmadera, carretera Conococha–Yanacancha, alrededor del km 80.",

        acceso:
            "El acceso se realiza por la carretera Conococha–Yanacancha hacia el sector Palmadera.",

        descripcion:
            "Palmadera alberga un importante yacimiento de huellas fósiles de dinosaurios y constituye uno de los recursos paleontológicos más destacados de Huallanca.",

        dato:
            "MINCETUR registra el recurso con jerarquía turística 2 y una altitud aproximada de 4,442 m s. n. m.",

        video:
            "https://youtube.com/shorts/JpTIeiCt3aw?si=7WZht0cJiv7FxAHT",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Huellas+de+Dinosaurios+Palmadera+Huallanca+Ancash"
    },


    {
        nombre: "Sagrapetaca",
        categoria: "arqueologia",
        categoriaTexto: "Arqueología",
        imagen: "imagenes/Sagrqpetaca.jpg",

        altitud:
            "3,803 m s. n. m.",

        distancia:
            "Aproximadamente 1.2 km desde la Plaza de Armas.",

        acceso:
            "Se puede acceder a pie por el barrio La Toma o por sectores cercanos. MINCETUR registra aproximadamente 40 minutos caminando.",

        descripcion:
            "Sagrapetaca es un sitio arqueológico preincaico situado en la cima del cerro del mismo nombre. Presenta construcciones circulares de piedra y una ubicación estratégica.",

        dato:
            "Desde Sagrapetaca se obtiene una vista panorámica de la ciudad de Huallanca y sus alrededores.",

        video:
            "",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Sagrapetaca+Huallanca+Ancash"
    },


    {
        nombre: "Paglagalán",
        categoria: "arqueologia",
        categoriaTexto: "Arte rupestre",
        imagen: "imagenes/Paglagalán.jpg",

        altitud:
            "Zona altoandina",

        distancia:
            "Sector rural de Huallanca.",

        acceso:
            "El acceso corresponde a una zona rural y puede requerir caminata por senderos locales. Se recomienda realizar el recorrido con conocimiento de la zona.",

        descripcion:
            "Paglagalán destaca por sus manifestaciones de arte rupestre, que forman parte del patrimonio arqueológico y cultural de Huallanca.",

        dato:
            "Entre las representaciones descritas localmente aparecen personas, auquénidos, manos, líneas, puntos y otras figuras en tonalidades rojizas.",

        video:
            "https://share.google/iQoIi9HLY6WKfG9sc",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Paglagalan+Huallanca+Ancash"
    },


    {
        nombre: "Ciudad de Huallanca",
        categoria: "patrimonio",
        categoriaTexto: "Patrimonio",
        imagen: "imagenes/Huallanca.jpg",

        altitud:
            "Aproximadamente 3,538 m s. n. m.",

        distancia:
            "Centro del distrito de Huallanca.",

        acceso:
            "La ciudad constituye el punto de partida para diferentes recorridos turísticos hacia montañas, lagunas, cascadas y sitios arqueológicos.",

        descripcion:
            "Huallanca es una ciudad altoandina rodeada de montañas y paisajes naturales. Desde su centro se pueden iniciar diferentes recorridos turísticos por el distrito.",

        dato:
            "Huallanca funciona como punto de conexión para descubrir numerosos atractivos naturales, arqueológicos y culturales.",

        video:
            "https://vt.tiktok.com/ZSVB5QaqQ/",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Huallanca+Bolognesi+Ancash+Peru"
    }

];



/* =========================================================
   MOSTRAR LUGARES
========================================================= */

function mostrarLugares(lista = lugares) {

    const contenedor =
        document.getElementById("contenedor-lugares");

    contenedor.innerHTML = "";


    if (lista.length === 0) {

        contenedor.innerHTML = `

            <div class="sin-resultados">

                <h3>
                    No encontramos ese lugar
                </h3>

                <p>
                    Prueba con otra palabra o categoría.
                </p>

            </div>

        `;

        return;
    }


    lista.forEach(lugar => {

        const tarjeta =
            document.createElement("article");

        tarjeta.className =
            "lugar-card";


        tarjeta.innerHTML = `

            <div class="lugar-imagen">

                <img
                    src="${lugar.imagen}"
                    alt="${lugar.nombre}"
                >

                <span class="lugar-categoria">
                    ${lugar.categoriaTexto}
                </span>

            </div>


            <div class="lugar-info">

                <h3>
                    ${lugar.nombre}
                </h3>


                <p>
                    ${lugar.descripcion}
                </p>


                <div class="lugar-datos">

                    <span>
                        📍 ${lugar.distancia}
                    </span>

                    <span>
                        🏔️ ${lugar.altitud}
                    </span>

                </div>


                <button
                    class="btn-lugar"
                    onclick="mostrarLugar('${lugar.nombre}')">

                    Ver información →

                </button>

            </div>

        `;


        contenedor.appendChild(tarjeta);

    });

}



/* =========================================================
   MOSTRAR FICHA
========================================================= */

function mostrarLugar(nombre) {

    const lugar =
        lugares.find(
            item => item.nombre === nombre
        );


    if (!lugar) return;


    const modal =
        document.getElementById("modal");

    const cuerpo =
        document.getElementById("modal-body");


    cuerpo.innerHTML = `

        <img
            src="${lugar.imagen}"
            alt="${lugar.nombre}"
            class="modal-imagen"
        >


        <p class="section-label">
            ${lugar.categoriaTexto.toUpperCase()}
        </p>


        <h2>
            ${lugar.nombre}
        </h2>


        <p class="modal-descripcion">
            ${lugar.descripcion}
        </p>


        <div class="modal-datos">

            <div>

                <strong>
                    📍 Distancia / ubicación
                </strong>

                <span>
                    ${lugar.distancia}
                </span>

            </div>


            <div>

                <strong>
                    🏔️ Altitud
                </strong>

                <span>
                    ${lugar.altitud}
                </span>

            </div>

        </div>


        <div class="modal-seccion">

            <h3>
                🥾 ¿Cómo llegar?
            </h3>

            <p>
                ${lugar.acceso}
            </p>

        </div>


        <div class="modal-seccion dato-interesante">

            <h3>
                💡 Dato interesante
            </h3>

            <p>
                ${lugar.dato}
            </p>

        </div>


        <div class="modal-seccion">

            <h3>
                🎥 Video del lugar
            </h3>


            ${
                lugar.video
                ?
                `

                    <a
                        href="${lugar.video}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="extra-boton">

                        ▶ Ver video

                    </a>

                `
                :
                `

                    <div class="video-pendiente">

                        <strong>
                            Video próximamente
                        </strong>

                        <p>
                            Agrega el enlace del video
                            en la propiedad
                            <b>video</b> de este lugar.
                        </p>

                    </div>

                `
            }

        </div>


        <div class="modal-seccion">

            <h3>
                🗺️ Ubicación
            </h3>


            <a
                href="${lugar.maps}"
                target="_blank"
                rel="noopener noreferrer"
                class="extra-boton">

                📍 Ver ubicación en Google Maps

            </a>

        </div>

    `;


    modal.classList.add("activo");

    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   CERRAR MODAL
========================================================= */

function cerrarModal() {

    const modal =
        document.getElementById("modal");

    modal.classList.remove("activo");

    document.body.style.overflow =
        "";

}



/* =========================================================
   CERRAR AL HACER CLICK FUERA
========================================================= */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("modal");


    if (event.target === modal) {

        cerrarModal();

    }

});



/* =========================================================
   ESC
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarModal();

    }

});



/* =========================================================
   BUSCADOR
========================================================= */

function buscarLugar() {

    const texto =
        document
            .getElementById("buscador")
            .value
            .toLowerCase()
            .trim();


    if (texto === "") {

        mostrarLugares();

        return;

    }


    const resultados =
        lugares.filter(lugar => {

            const contenido = `

                ${lugar.nombre}

                ${lugar.categoria}

                ${lugar.categoriaTexto}

                ${lugar.descripcion}

                ${lugar.dato}

                ${lugar.acceso}

                ${lugar.distancia}

            `.toLowerCase();


            return contenido.includes(texto);

        });


    mostrarLugares(resultados);

}



/* =========================================================
   FILTROS
========================================================= */

function filtrarCategoria(categoria) {

    const botones =
        document.querySelectorAll(".filtro");


    botones.forEach(boton => {

        boton.classList.remove("activo");

    });


    if (categoria === "todos") {

        mostrarLugares();

        if (botones[0]) {

            botones[0].classList.add("activo");

        }

        return;

    }


    const resultados =
        lugares.filter(
            lugar => lugar.categoria === categoria
        );


    mostrarLugares(resultados);


    const mapaCategorias = {

        montaña: "montaña",

        laguna: "laguna",

        cascada: "cascada",

        arqueologia: "arqueología",

        paleontologia: "fósiles",

        patrimonio: "patrimonio"

    };


    botones.forEach(boton => {

        if (
            boton.textContent
                .toLowerCase()
                .includes(mapaCategorias[categoria])
        ) {

            boton.classList.add("activo");

        }

    });

}



/* =========================================================
   MENÚ
========================================================= */

function toggleMenu() {

    const nav =
        document.querySelector(".navbar nav");

    nav.classList.toggle("menu-abierto");

}



/* =========================================================
   CULTURA
========================================================= */

function mostrarCultura(tipo) {

    const modal =
        document.getElementById("modal");

    const cuerpo =
        document.getElementById("modal-body");


    if (tipo === "negritos") {

        cuerpo.innerHTML = `

            <div class="cultura-modal">

                <div class="cultura-modal-icon">
                    🕺
                </div>


                <p class="section-label">
                    PATRIMONIO CULTURAL DE LA NACIÓN
                </p>


                <h2>
                    Los Negritos de Huallanca
                </h2>


                <p>
                    La danza de Los Negritos de Huallanca
                    es una de las expresiones culturales
                    más representativas del distrito.
                </p>


                <p>
                    Es una danza de adoración al Niño Jesús
                    que conserva referencias a la historia
                    ganadera y minera de Huallanca.
                </p>


                <div class="dato-cultural">

                    <strong>
                        🏛️ Declaratoria
                    </strong>

                    <p>
                        Fue declarada Patrimonio Cultural
                        de la Nación mediante la Resolución
                        Viceministerial N.° 251-2023-VMPCIC/MC.
                    </p>

                </div>


                <div class="dato-cultural">

                    <strong>
                        📅 Fechas tradicionales
                    </strong>

                    <p>
                        Navidad: 24, 25 y 26 de diciembre.
                        Año Nuevo: 31 de diciembre, 1 y 2 de enero.
                        Pascua de Reyes: 5 y 6 de enero.
                    </p>

                </div>


                <div class="dato-cultural">

                    <strong>
                        🎭 Personajes
                    </strong>

                    <p>
                        Negritos, Caporal, Patirón,
                        Mallica, Abanderados y Oso.
                    </p>

                </div>


                <div class="dato-cultural">

                    <strong>
                        🎶 Coreografía
                    </strong>

                    <p>
                        Entre sus expresiones aparecen
                        el Pachawallay, La Mudanza,
                        El Serrucho y el Ayhuallache.
                    </p>

                </div>


                <button
                    class="extra-boton"
                    onclick="mostrarVideoCultura('negritos')">

                    ▶ Ver video de los Negritos

                </button>

            </div>

        `;

    }



    if (tipo === "toros") {

        cuerpo.innerHTML = `

            <div class="cultura-modal">

                <div class="cultura-modal-icon">
                    🐂
                </div>


                <p class="section-label">
                    CULTURA Y FESTIVIDADES
                </p>


                <h2>
                    Tradición Taurina
                </h2>


                <p>
                    La tradición taurina forma parte
                    de las festividades y costumbres
                    de Huallanca.
                </p>


                <p>
                    La Plaza de Toros Montecarmelo es
                    uno de los espacios vinculados
                    a estas celebraciones.
                </p>


                <div class="dato-cultural">

                    <strong>
                        🐂 Tradición
                    </strong>

                    <p>
                        Las actividades taurinas forman
                        parte de las festividades tradicionales
                        del distrito.
                    </p>

                </div>


                <div class="dato-cultural">

                    <strong>
                        📍 Montecarmelo
                    </strong>

                    <p>
                        La Plaza de Toros Montecarmelo
                        constituye uno de los espacios
                        asociados a esta tradición.
                    </p>

                </div>


                <button
                    class="extra-boton"
                    onclick="abrirMapaToros()">

                    📍 Ver ubicación

                </button>

            </div>

        `;

    }


    modal.classList.add("activo");

    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   VIDEOS DE CULTURA
========================================================= */

function mostrarVideoCultura(tipo) {

    const modal =
        document.getElementById("modal");

    const cuerpo =
        document.getElementById("modal-body");


    if (tipo === "negritos") {

        cuerpo.innerHTML = `

            <div class="cultura-modal">

                <div class="cultura-modal-icon">
                    🎥
                </div>


                <p class="section-label">
                    HUALLANCAVIVE
                </p>


                <h2>
                    Videos de Los Negritos
                </h2>


                <p>
                    Aquí podrás agregar los enlaces
                    a los videos de la danza.
                </p>


                <div class="video-pendiente">

                    <strong>
                        🎬 Video 01
                    </strong>

                    <p>
                        Coloca aquí el enlace del video.
                    </p>

                </div>


                <div class="video-pendiente">

                    <strong>
                        🎬 Video 02
                    </strong>

                    <p>
                        Coloca aquí otro enlace.
                    </p>

                </div>


                <div class="video-pendiente">

                    <strong>
                        🎬 Video 03
                    </strong>

                    <p>
                        Puedes agregar tantos videos
                        como quieras posteriormente.
                    </p>

                </div>

            </div>

        `;

    }


    modal.classList.add("activo");

    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   MAPA TAURINO
========================================================= */

function abrirMapaToros() {

    window.open(
        "https://www.google.com/maps/search/?api=1&query=Plaza+de+Toros+Montecarmelo+Huallanca+Ancash",
        "_blank"
    );

}



/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarLugares();

    }
);