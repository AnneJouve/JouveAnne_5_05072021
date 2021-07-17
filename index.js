/* Format d'un article */
class Furniture {
    constructor(jsonFurniture){
        jsonFurniture && Object.assign(this, jsonFurniture);
    }
}

class FurnitureManager {
    constructor(listFurniture) {
        this.listFurniture = listFurniture;
    }
}

fetch("http://localhost:3000/api/furniture")
    .then( data => data.json())
    .then( jsonListFurniture => {
        for(let jsonFurniture of jsonListFurniture) {
            let furniture = new Furniture(jsonFurniture);
            document.querySelector(".container").innerHTML += `<div class="row">
                                                                    <div class="col-lg-4 col-xxl-3">
                                                                        <div class="card bg-light text-center mb-4">
                                                                            <img src="${furniture.imageUrl}" alt="" class="card-img-top" />
                                                                                <div class="card-body">
                                                                                    <h5 class="card-title">${furniture.name}</h5>
                                                                                    <p class="card-text lead">${furniture.description}</p>
                                                                                    <p class="card-text fw-bold">${furniture.price} €</p>
                                                                                    <a href="produit.html" class="btn btn-primary stretched-link">Détails</a>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
        }
    }); 