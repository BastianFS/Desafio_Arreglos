const propiedadesVenta = [
   
    {
        nombre: 'Apartamento en casco historico',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qIBIjx05L1fRrWq-IKYGnxCbaPF-CZeyuA&s',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '132 Historical Place, Old Town, SU 46578',
        habitaciones: 3,
        baños: 2,
        costo: "3.500",
        smoke: true,
        pets: true,
        metrostotales: '300 m2',
        metrosutiles:'280 m2',
        equipamiento: 'porteria',        
        estacionamiento: false
    },
    {
        nombre: 'Apartamento Geometrico en zona residencial',
        src: 'https://r2.starryai.com/results/969243123/1a80a7d7-4a9e-4092-8100-9b5695575878.webp',
        descripcion: 'Este apartamento rupturista está situado en un terreno perfectamente plano',
        ubicacion: ' 64 Square Av., Geometry Peaks, MI 27656',
        habitaciones: 4,
        baños: 2,
        costo: "6.200",
        smoke: true,
        pets: true,
        metrostotales: '220 m2',
        metrosutiles:'190 m2',
        equipamiento: 'foso',        
        estacionamiento: true
    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5.000,
        smoke: false,
        pets: false,
        metrostotales: '200 m2',
        metrosutiles:'180 m2',
        equipamiento: 'piscina, gimnasio, cancha de tenis',        
        estacionamiento: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: "1.200",
        smoke: true,
        pets: true,
        metrostotales: '120 m2',
        metrosutiles:'95 m2',
        equipamiento: 'mirador',        
        estacionamiento: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: "4.500",
        smoke: false,
        pets: true,
        metrostotales: '220 m2',
        metrosutiles:'190 m2',
        equipamiento: 'piscina, gimnasio, sala multiuso',        
        estacionamiento: true
    },
]
const cardVenta = document.getElementById("container-venta");
let cardTemplate= "";
for (let propiedadVenta of propiedadesVenta) {
  cardTemplate += `
  <div class= "col-md-4 mb-4">
    <div class = "card h-100">
        <img src= "${propiedadVenta["src"]}" alt = "Imagen del departamento"/>
        <div class ="card-body">
            <h5 class="card-title">
                ${propiedadVenta["nombre"]}
            </h5>
            <p class="card-text">
                ${propiedadVenta["descripcion"]} 
                <ul> 
                <li>Metros totales: ${propiedadVenta["metrostotales"]}</li>
                <li>Metros utiles: ${propiedadVenta["metrosutiles"]}</li>
                <li>Equipamiento: ${propiedadVenta["equipamiento"]}</li>
                </ul>
            </p>
            
            <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedadVenta["ubicacion"]}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${propiedadVenta["habitaciones"]}
                <i class="fas fa-bath"></i> ${propiedadVenta["baños"]}
            </p>
            <p>
                <i class="fas fa-dollar-sign">${propiedadVenta["costo"]}</i>
            </p>`;

  if (propiedadVenta["smoke"]) {
    cardTemplate += `<p class="text-success">
        <i class="fas fa-smoking"></i> Permitido fumar
    </p>`;
  } else {
   cardTemplate += ` <p class="text-danger">
         <i class="fas fa-smoking-ban"></i> No se permite fumar
         </p>`;
  }
  if (propiedadVenta["pets"]) {
    cardTemplate +=  `<p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>`;
  } else {
    cardTemplate +=  `<p class="text-danger">
             <i class="fas fa-ban"></i> No se permiten mascotas
         </p>`;
  }
  if (propiedadVenta["estacionamiento"]) {
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

cardVenta.innerHTML = cardTemplate;