const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "2,000",
    smoke: false,
    pets: true,
    metrostotales: "60 m2",
    metrosutiles: "54 m2",
    equipamiento: "sala multiuso",
    estacionamiento: false,
  },
  {
    nombre: "Departamento Recoleta",
    src: "https://http2.mlstatic.com/D_NQ_NP_953537-MLC74940425251_032024-O.webp",
    descripcion:
      "Este departamento se encuentra en el piso 11 de un edificio residencial bien equipado y construido en el 2020 apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "804 Av.Recoleta, Recoleta",
    habitaciones: 2,
    baños: 2,
    costo: "1,000",
    smoke: true,
    pets: false,
    metrostotales: "65 m2",
    metrosutiles: "58 m2",
    equipamiento: "gimnasio, piscina, sala multiuso",
    estacionamiento: false,
  },
  {
    nombre: "Departamento Barrio Yungay",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240429/3211560/n_wm_2024042935454780477.webp",
    descripcion:
      "Este hermoso apartamento ofrece cercania al casco historico de la ciudad.",
    ubicacion: "San Pablo,1680",
    habitaciones: 1,
    baños: 1,
    costo: "950",
    smoke: false,
    pets: true,
    metrostotales: "50 m2",
    metrosutiles: "46 m2",
    equipamiento: "piscina, sala multiuso",
    estacionamiento: false,
  },
  {
    nombre: "Nuevo Estudio cerca de parque O'higgins",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240518/3251905/n_wm_2024051850024645475.webp",
    descripcion:
      "Este departamento cercano al metro rondizzoni invita a disfrutar del parque O'higgins diariamente.",
    ubicacion: "Beauchef,44",
    habitaciones: 2,
    baños: 1,
    costo: "1,250",
    smoke: false,
    pets: false,
    metrostotales: "60 m2",
    metrosutiles: "56 m2",
    equipamiento: "porteria",
    estacionamiento: false,
  },
  {
    nombre: "Departamento marin con terraza",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240527/3265502/n_wm_2024052712055309636.webp",
    descripcion:
      "Este bonito apartamento de 2 habitaciones cercano al centro de la ciudad te sorprenderá",
    ubicacion: "Marin 395",
    habitaciones: 2,
    baños: 2,
    costo: "1,000",
    smoke: true,
    pets: true,
    metrostotales: "60 m2",
    metrosutiles: "54 m2",
    equipamiento: "porteria, sala multiuso",
    estacionamiento: false,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "2,500",
    smoke: true,
    pets: true,
    metrostotales: "100 m2",
    metrosutiles: "80 m2",
    equipamiento: "piscina, sala multiuso",
    estacionamiento: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "2,200",
    smoke: false,
    pets: false,
    metrostotales: "100 m2",
    metrosutiles: "60 m2",
    equipamiento: "porteria, seguridad 24/7",
    estacionamiento: true,
  },
];

const cardAlquiler = document.getElementById("container-alquiler");
let cardTemplate= "";
for (let propiedadAlquiler of propiedadesAlquiler) {
  cardTemplate += `
  <div class= "col-md-4 mb-4">
    <div class = "card h-100">
        <img src= "${propiedadAlquiler["src"]}" alt = "Imagen del departamento"/>
        <div class ="card-body">
            <h5 class="card-title">
                ${propiedadAlquiler["nombre"]}
            </h5>
            <p class="card-text">
                ${propiedadAlquiler["descripcion"]}  
                 <ul> 
                <li>Metros totales: ${propiedadVenta["metrostotales"]}</li>
                <li>Metros utiles: ${propiedadVenta["metrosutiles"]}</li>
                <li>Equipamiento: ${propiedadVenta["equipamiento"]}</li>
                </ul>
            </p>
            
            <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedadAlquiler["ubicacion"]}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${propiedadAlquiler["habitaciones"]}
                <i class="fas fa-bath"></i> ${propiedadAlquiler["baños"]}
            </p>
            <p>
                <i class="fas fa-dollar-sign">${propiedadAlquiler["costo"]}</i>
            </p>`;

  if (propiedadAlquiler["smoke"]) {
    cardTemplate += `<p class="text-success">
        <i class="fas fa-smoking"></i> Permitido fumar
    </p>`;
  } else {
   cardTemplate += ` <p class="text-danger">
         <i class="fas fa-smoking-ban"></i> No se permite fumar
         </p>`;
  }
  if (propiedadAlquiler["pets"]) {
    cardTemplate +=  `<p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>`;
  } else {
    cardTemplate +=  `<p class="text-danger">
             <i class="fas fa-ban"></i> No se permiten mascotas
         </p>`;
  }
  if (propiedadAlquiler["estacionamiento"]) {
    cardTemplate +=  `<p class="text-success">
            <i class="fa-solid fa-car-side"></i></i> Cuenta con estacionamiento
        </p>
        </div>
    </div>
</div>`;
  } else {
    cardTemplate +=  `<p class="text-danger">
            <i class="fa-solid fa-car-side"></i></i> No cuenta con estacionamiento
         </p>
           </div>
    </div>
</div>`;
  }
}

cardAlquiler.innerHTML = cardTemplate;



