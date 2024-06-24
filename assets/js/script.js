

const cardContainer = document.getElementById('card-containers')
const cardContainer2 = document.getElementById('card-containers-venta')

function crearCard(propiedad){
    const cardTemplate1 = `
    <div class="col-md-4 mb-4">
        <div class= "card">
            <img src= "${propiedad['src']}" alt = "Imagen del departamento"/>
            <div class ="card-body">
                <h5 class="card-title">
                    ${propiedad['nombre']}
                </h5>
                <p class="card-text">
                    ${propiedad['descripcion']}  
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad['ubicacion']}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad['habitaciones']}
                    <i class="fas fa-bath"></i> ${propiedad['baños']}
                </p>
                <p>
                    <i class="fas fa-dollar-sign">${propiedad['costo']}</i>
                </p>`
    let cardTemplate2 = '';
    let cardTemplate3 = '';
    console.log(cardTemplate1);  
    if (propiedad['smoke']){
        cardTemplate2 =
        `<p class="text-success">
        <i class="fas fa-smoking"></i> Permitido fumar
    </p>`
    }
    else{
        cardTemplate2 =
        ` <p class="text-danger">
         <i class="fas fa-smoking-ban"></i> No se permite fumar
         </p>`
    }
    if (propiedad['pets']){
        cardTemplate3 =
        `<p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>
        </div>
         </div>`
     }
     else{
        cardTemplate3 =
        `<p class="text-danger">
             <i class="fas fa-ban"></i> No se permiten mascotas
         </p>
         </div>
         </div>`
    }
    const cardTemplate = cardTemplate1 + cardTemplate2 +cardTemplate3;
    return cardTemplate
   
}

  
  function hacerCards(propiedades) {
    for ( let propiedad of propiedades){
        const cardHTML = crearCard(propiedad)
        cardContainer.innerHTML += cardHTML
        
        }
    }
    function hacerCardsVenta(propiedades) {
        for ( let propiedad of propiedades){
            const cardHTML2 = crearCard(propiedad)
            cardContainer2.innerHTML += cardHTML2
            }
    }

